import { createContext, useState } from 'react';
import { Question } from '../types/questionType';

// ===> Context to make the Grouplist from the useState public
type ContextProps = {
    questionList: Question[];
    setQuestionList: (value: any) => void;
  }
//context variable with initial values
const initValues: ContextProps = {
    questionList: [],
    setQuestionList: function (value: string): void {
        throw new Error('Function not implemented.');
    }
}
export const QuestionListContext = createContext<ContextProps>(initValues);

// ===> Provider of the Context
type ProviderProps = {
    children?: React.ReactNode;
  };
export const QuestionListContextProvider = (props: ProviderProps) => {
    // useState erstellt eine Liste von Type Player die Anfangs leer ist
    // group ist eine Liste von Objekten des Type Player
    const [questionList, setQuestionList] = useState<Question[]>([]);

    /* Liste mit beispiel fragen befüllen */
    /* setQuestionList([]) */

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
