import * as React from 'react';
import { Button, Typography } from '@mui/material';
import { QuestionListContext } from '../Context/QuestionsListContext';
import { useState } from 'react';
import { GroupContext } from '../Context/GroupContext';

export default function ShowQuestion() {
    const { questionList, setQuestionList } =
        React.useContext(QuestionListContext);
    const { roundCounter, setRoundCounter } = React.useContext(GroupContext);

    const handleNewRound = () => {
        // votings der runde muss in jedem spieler berücksichtig und übergeben werden werde (i did oder i didnt +1)

        // zurücksetzten der voting slider

        // neu Frage anzeigen
        // ===> Liste könnte jedes mal random befüllt werden und roundcounter wäre dann gleichzeitig der index mit dem man eine neue frage abruft
        // ===> wenn ende der liste erreich, dann meldung und einfach wieder von vorne? oder spiel beenden?

        // Roundcounter erhöhen
        setRoundCounter(roundCounter + 1);
    };

    return (
        <div>
            <h2>Ich habe noch nie ...</h2>

            {/* aktuell wird jede frage in der liste angezeigt, da noch nicht auf einen index gezeigt wird */}
            {questionList.map((currentQuestion, roundCounter) => (
                <Typography>{currentQuestion.questionText}</Typography>
            ))}

            <Button variant="contained" onClick={handleNewRound}>
                Nächste Frage
            </Button>
        </div>
    );
}
