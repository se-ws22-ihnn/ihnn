import { createContext, useState } from 'react';
import { Question } from '../types/questionType';

// ===> Context to make the Grouplist from the useState public
type ContextProps = {
    questionList: Question[];
    setQuestionList: (value: any) => void;
};
//context variable with initial values
const initValues: ContextProps = {
    questionList: [],
    setQuestionList: function (value: string): void {
        throw new Error('Function not implemented.');
    },
};
export const QuestionListContext = createContext<ContextProps>(initValues);

// ===> Provider of the Context
type ProviderProps = {
    children?: React.ReactNode;
};
export const QuestionListContextProvider = (props: ProviderProps) => {

    // Liste soll bereits test bzw default fragen als inital wert bekommmen!
    const initalQuestionList = [
        {
            id: 1,
            questionText: 'Das ist Testfrage 1',
            kategorie: 'initalValue',
        },
        {
            id: 2,
            questionText: 'Das ist Testfrage 2',
            kategorie: 'initalValue',
        },
        {
            id: 3,
            questionText: 'Das ist Testfrage 3',
            kategorie: 'initalValue',
        },
    ];

    // erstellung der Frageliste und zuweisung der default fragen per useState
    const [questionList, setQuestionList] = useState<Question[]>(initalQuestionList);



    return (
        <QuestionListContext.Provider
            value={{
                questionList: questionList,
                setQuestionList: setQuestionList,
            }}
        >
            {props.children}
        </QuestionListContext.Provider>
    );
};
