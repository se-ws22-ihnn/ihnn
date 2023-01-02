import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';
import { Player } from '../types/playerType';
import { useEffect, useState } from 'react';

type handlePlayerInterface = {
    currentPlayer: Player;
};
export default function HandlePlayerVoting(props: handlePlayerInterface) {
    const [isClicked, setIsClicked] = useState(false);

    const handleIdidVote = () => {
        props.currentPlayer.iDidCounter++;
        setIsClicked(true);
        // console.log(props.currentPlayer.iDidCounter)
    };
    const handleIdidNotVote = () => {
        props.currentPlayer.iDidNotCounter++;
        setIsClicked(true);
        // console.log(props.currentPlayer.iDidNotCounter);
    };

    return (
        <>
            <IconButton
                color="primary"
                onClick={handleIdidVote}
                disabled={isClicked}
            >
                <CheckCircleIcon />
            </IconButton>
            <IconButton
                color="primary"
                onClick={handleIdidNotVote}
                disabled={isClicked}
            >
                <CancelIcon />
            </IconButton>
        </>
    );
}
