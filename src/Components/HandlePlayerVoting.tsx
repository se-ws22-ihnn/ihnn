import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';
import { Player } from '../types/playerType';
import { useState } from 'react';

import Game from '../Pages/Game';


export default function HandlePlayerVoting(currentPlayerVoteing: Player) {
    const [isClicked, setIsClicked] = useState(false);
    
    const handleIdidVote = () => {
        currentPlayerVoteing.iDidCounter + 1
        setIsClicked(true)
        console.log(currentPlayerVoteing.iDidCounter)
    }
    const handleIdidNotVote = () => {
        currentPlayerVoteing.iDidNotCounter + 1
        setIsClicked(true)
        console.log(currentPlayerVoteing.iDidNotCounter)
    }
    
    
    return (
        <>
            <IconButton color="primary" onClick={handleIdidVote} disabled = {isClicked}>
                <CheckCircleIcon />
            </IconButton>
            <IconButton color="primary" onClick={handleIdidNotVote} disabled = {isClicked}>
                <CancelIcon />
            </IconButton>
        </>
    );
}
