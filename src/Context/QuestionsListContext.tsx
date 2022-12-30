import {createContext, useState} from 'react';
import {Question} from '../types/questionType';

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
export const QuestionListContextProvider = ({children}: ProviderProps) => {

    // Liste soll bereits test bzw default fragen als inital wert bekommmen!
    const initalQuestionList = [
        {
            id: 1,
            questionText: "Ich war noch nie Fallschirm springen",
            kategorie: "adventure"
          },{
            id: 2,
            questionText: "Ich habe noch nie ohne Zelt im Wald übernachtet",
            kategorie: "adventure"
          },{
            id: 3,
            questionText: "Ich habe noch nie einen Lost Place besucht",
            kategorie: "adventure"
          },{
            id: 4,
            questionText: "Ich bin noch nie von einer Klippe gesprungen",
            kategorie: "adventure"
          },{
            id: 5,
            questionText: "Ich bin noch nie Jetski gefahren",
            kategorie: "adventure"
          },{
            id: 6,
            questionText: "Ich habe noch nie in einem Iglu übernachtet",
            kategorie: "adventure"
          },{
            id: 7,
            questionText: "Ich habe noch nie in einem Wasserfall geduscht",
            kategorie: "adventure"
          },{
            id: 8,
            questionText: "Ich habe noch nie den Eiffelturm besucht",
            kategorie: "travel"
          },{
            id: 9,
            questionText: "Ich habe noch nie alle Kontinente bereist",
            kategorie: "travel"
          },{
            id: 10,
            questionText: "Ich habe noch nie eine Safari in Afrika gemacht",
            kategorie: "travel"
          },{
            id: 11,
            questionText: "Ich habe noch nie das Empire State Building besucht",
            kategorie: "travel"
          },{
            id: 12,
            questionText: "Ich habe noch nie die chinesische Mauer besucht",
            kategorie: "travel"
          },{
            id: 13,
            questionText: "Ich habe noch nie die ägyptischen Pyramiden besucht",
            kategorie: "travel"
          },{
            id: 14,
            questionText: "Ich habe noch nie die Casinos von Las Vegas besucht",
            kategorie: "travel"
          },{
            id: 15,
            questionText: "Ich habe noch nie einen Tauchschein gemacht",
            kategorie: "sport"
          },{
            id: 16,
            questionText: "Ich habe noch nie 50 Liegestütze am Stück geschafft",
            kategorie: "sport"
          },{
            id: 17,
            questionText: "Ich habe noch nie 100 km gehen in 24 Stunden geschafft",
            kategorie: "sport"
          },{
            id: 18,
            questionText: "Ich habe noch nie einen Baum gepflanzt",
            kategorie: "life"
          },{
            id: 19,
            questionText: "Ich habe noch nie Blut gespendet",
            kategorie: "life"
          },{
            id: 20,
            questionText: "Ich habe noch nie ein Tier aus einem Tierheim aufgenommen",
            kategorie: "life"
          }
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
            {children}
        </QuestionListContext.Provider>
    );
};
