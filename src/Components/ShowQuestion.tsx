import * as React from 'react';
import { Button, Typography } from '@mui/material';
import { QuestionListContext } from '../Context/QuestionsListContext';
import { GroupContext } from '../Context/GroupContext';

// diese Komponente muss mit Gorupvoting zusammengelegt werden, damit handleNewRound alle Werte erhält

export default function ShowQuestion() {
    const { questionList } = React.useContext(QuestionListContext);
    const { roundCounter, setRoundCounter } = React.useContext(GroupContext);

    const handleNewRound = () => {
        // 1. wenn gruppe angegeben hat wie viele runden gespielt werden sollen muss das hier per if berücksichtigt werden
        // 2. votings der runde muss in jedem spieler berücksichtig und übergeben werden werde (i did oder i didnt +1)
        // 3.zurücksetzten der voting slider
        // 4. neu Frage anzeigen oder direkt im return() ????
        // BUG: wenn liste leer bzw durch, wird nichts mehr gerendert
        // ===> Liste könnte jedes mal random befüllt werden und roundcounter wäre dann gleichzeitig der index mit dem man eine neue frage abruft
        // ===> wenn ende der liste erreich, dann meldung und einfach wieder von vorne? oder spiel beenden?

        // 5. Roundcounter erhöhen
        setRoundCounter(roundCounter + 1);
    };

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

            <Button variant="contained" onClick={handleNewRound}>
                Nächste Frage
            </Button>
        </>
    );
}
