import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { GroupContext } from '../Context/GroupContext';
import { QuestionListContext } from '../Context/QuestionsListContext';
import FinalScores from './FinalScores';
import Game from './Game';
import PrepareGame from './PrepareGame';
import FeedbackIcon from '@mui/icons-material/Feedback';

export default function GameStateMachine() {
    const { group, setRoundCounter } = React.useContext(GroupContext);
    const { questionList, setQuestionList } = React.useContext(QuestionListContext);

    const [state, setState] = useState(0);
    /*  States beschreibung:
    0 = Startpage: Gruppenerstellung  
    1 = Gameplay: Fragerunden und Player Voting
    2 = Gameover: Auswertung 
    3 = 0 Startpage
    */

    const increaseState = () => {
        if (state >= 2) {
            setState(0);
            // um wieder auf dem ersten State zu landen ginge auch mit modulo%
        } else setState(state + 1);
    };

    const handleGameReset = () => {
        // 1. State erhöhen
        increaseState();
        
        // 2. Score der Gruppe zurück setzen
        // group.map((currentPlayer)=>{currentPlayer.iDidCounter = 0,currentPlayer.iDidNotCounter = 0}); //<== eslint mag das nicht
        group.map((currentPlayer)=>{return currentPlayer.iDidCounter = 0}); 
        group.map((currentPlayer)=>{return currentPlayer.iDidNotCounter = 0});
        
        // 3. Roundcounter zurücksetzen
        setRoundCounter(1);
        
        // 4. Fragenkathalog durchmischen
        //DEBUG: console.log("alte Liste:", questionList);
        const shuffledArray = questionList.sort((a, b) => 0.5 - Math.random());
        setQuestionList([...shuffledArray]);
        //DEBUG: console.log("neue Liste:", questionList);
    }

    return (
        <>
            {state == 0 && (
                <>
                    <PrepareGame />
                    <Button
                        onClick={increaseState}
                        variant="contained"
                        disabled={group.length < 2}
                        sx={{ m: 2 }}
                    >
                        State 1: Spiel starten
                    </Button>

                    <Button color="inherit" onClick={() =>
                        window.open('https://forms.gle/eyBToprhCYNJqep28','_blank',)}
                        startIcon={<FeedbackIcon />}>Feedback geben
                    </Button>
                </>
            )}
            {state == 1 && (
                <>
                    <Game />
                    <Button
                        onClick={increaseState}
                        variant="contained"
                        sx={{ m: 2 }}
                    >
                        State 2: Spiel beenden
                    </Button>

                    <Button color="inherit" onClick={() =>
                        window.open('https://forms.gle/eyBToprhCYNJqep28','_blank',)}
                        startIcon={<FeedbackIcon />}>Feedback geben
                    </Button>
                </>
            )}
            {state == 2 && (
                <>
                    <FinalScores />
                    <Button
                        onClick={handleGameReset}
                        variant="contained"
                        sx={{ m: 2 }}
                    >
                        State 3: zur Startseite
                    </Button>
                    
                    <Button color="inherit" onClick={() =>
                        window.open('https://forms.gle/eyBToprhCYNJqep28','_blank',)}
                        startIcon={<FeedbackIcon />}>Feedback geben
                    </Button>
                </>
            )}
        </>
    );
}
