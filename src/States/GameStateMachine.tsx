import { Button } from '@mui/material';
import { group } from 'console';
import React from 'react';
import { useState } from 'react';
import { GroupContext } from '../Context/GroupContext';
import FinalScores from './FinalScores';
import Game from './Game';
import PrepareGame from './PrepareGame';

export default function GameStateMachine() {

    const { group } = React.useContext(GroupContext);

    const [state, setState] = useState(0);
    /*  States beschreibung:
    0 = Startpage: Gruppenerstellung  
    1 = Gameplay: Fragerunden und Player Voting
    2 = Gameover: Auswertung 
    3 = 0 Startpage
    */

    const increaseState = () => {
        if(state >= 2 ) {
            setState(0)
            // um wieder auf dem ersten State zu landen ginge auch mit modulo%
        }
        else setState(state + 1);

    };
    return (
        <>
            {state == 0 && (
                <>
                    <PrepareGame />
                    <Button onClick={increaseState} variant="contained" disabled={group.length < 2}>
                        State 1: Spiel starten
                    </Button>
                </>
            )}
            {state == 1 && (
                <>
                    <Game />
                    <Button onClick={increaseState} variant="contained">
                        State 2: Spiel beenden
                    </Button>
                </>
            )}
            {state == 2 && (
                <>
                    <FinalScores />
                    <Button onClick={increaseState} variant="contained">
                        State 3: zur Startseite
                    </Button>
                </>

            )}
        </>
    );
}
