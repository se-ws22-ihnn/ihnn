import * as React from 'react';
import { Typography } from '@mui/material';
import { QuestionListContext } from '../Context/QuestionsListContext';
import { GroupContext } from '../Context/GroupContext';


export default function ShowQuestion() {
    const { questionList } = React.useContext(QuestionListContext);
    const { roundCounter } = React.useContext(GroupContext);

    return (
        <>
            <h2>Ich habe noch nie ...</h2>
            <Typography>
                {questionList[roundCounter - 1].questionText}
            </Typography>

            {/* aktuell wird jede frage in der liste angezeigt, da noch nicht auf einen index gezeigt wird */}
            {/* {questionList.map((currentQuestion, roundCounter) => (
                <Typography>{currentQuestion.questionText}</Typography>
            ))} */}

        </>
    );
}
