import { Button } from '@mui/material';
import { useState } from 'react';
import FinalScoreCard from '../Components/FinalScoreCard';
import Game from './Game';
import PrepareGame from './PrepareGame';

export default function GameStateMachine() {
    const [state, setState] = useState(0);
    /*  States beschreibung:
    0 = Vorbereitung: Gruppenerstellung  
    1 = Gameplay: Fragerunden und Player Voting
    2 = Auswertung und Spiel beenden 
    */

    const increaseState = () => {
        setState(state + 1);
    };
    return (
        <>
            {state == 0 && (
                <>
                    <PrepareGame />
                    <Button onClick={increaseState}>
                        State 1: Spiel starten
                    </Button>
                </>
            )}
            {state == 1 && (
                <>
                    <Game />
                    <Button onClick={increaseState}>
                        State 2: Spiel beenden
                    </Button>
                </>
            )}
            {state == 2 && (
                <>
                    <FinalScoreCard />
                    <Button onClick={increaseState}>
                        State 3: zur Startseite
                    </Button>
                </>
            )}
        </>
    );
}
