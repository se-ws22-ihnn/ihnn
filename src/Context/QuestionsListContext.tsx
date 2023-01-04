import { createContext, useState } from 'react';
import { Question } from '../types/questionType';

// ===> Context to make the Questionlist from the useState public

type ContextProps = {
    questionList: Question[];
    setQuestionList: (value: any) => void;
};
//context variable with initial values
const initValues: ContextProps = {
    questionList: [],
    setQuestionList: function (value: any): void {
        throw new Error('Function not implemented.');
    },
};
export const QuestionListContext = createContext<ContextProps>(initValues);

// ===> Provider of the Context
type ProviderProps = {
    children?: React.ReactNode;
};

export const QuestionListContextProvider = ({ children }: ProviderProps) => {
    // erstellung der Frageliste und zuweisung der default fragen per useState
    const [questionList, setQuestionList] = useState<Question[]>([
        /*leere Liste*/
    ]);

    return (
        <QuestionListContext.Provider
            value={{
                questionList: questionList,
                setQuestionList: setQuestionList,
            }}
        >
            {children}
        </QuestionListContext.Provider>
    );
};
