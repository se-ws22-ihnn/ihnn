import {useState} from "react";
import {Player, Player1} from "../types/playerType";
import FinalScoreCard from "../Components/FinalScoreCard";
import {Button} from "@mui/material";


export default
const GameNew = () => {
    const [players, setPlayers] = useState<Player1[]>([])
    const [state, setState] = useState(0);

    const increaseState = () => {
        setState(state + 1);
    }

    return <>
        {
            state == 0 && <Init>
                <CurrentPlayers players={players}/>
                <CreatePlayers setPlayers={setPlayers}/>
            </Init>
        }
        {
            state == 1 &&
            <>
                <GamePlay players={players}>
                    <Questions/>
                    <VoteHandler players={players}/>
                </GamePlay>
            </>
        }
        <Button onClick={increaseState}></Button>


        {state == 2 && <FinalScoreCard/>}
    </>
}
