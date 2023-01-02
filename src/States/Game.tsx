import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import GroupVoting from '../Components/GroupVoting';
import { Button } from '@mui/material';
import { GroupContext } from '../Context/GroupContext';
import { QuestionListContext } from '../Context/QuestionsListContext';
import ShowQuestion from '../Components/ShowQuestion';
// icon imports
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Game() {
    const { roundCounter, setRoundCounter } = React.useContext(GroupContext);
    const { questionList } = React.useContext(QuestionListContext);

    const handleNewRound = () => {
        // der Roundcounter übernimmt hier einige wichtige Dinge
        // 1. als Zähler in welcher Runde wir uns befinden
        // 2. als Index für die Liste der Fragen um eine neue Frage zu geben bei jeder neuen Runde
        // 3. als Key für die Groupvoting Komponente (wenn der key sich verändert wird die Komponente auf den Ursprung neu gerendert)
        // => dies ermöglich, dass jedes mal wenn eine neue Runde/Frage kommt, das voting neu ermöglicht wird!
        // 4. wenn der Roundcounter === der Listenlänge ist kann keine weitere Frage erfolgen, da der Button deaktiviert wird
        // => Spiel muss beendet werden
        setRoundCounter(roundCounter + 1);
    };

    return (
        <Box sx={{ flexGrow: 0, m: 2 }}>
            <h2>Runde: {roundCounter}</h2>
            <Grid container spacing={2}>
                <Grid xs={12} sm={6}>
                    <ShowQuestion />
                </Grid>
                <Grid xs={12} sm={6}>
                    <GroupVoting key={roundCounter} />
                </Grid>

                <Button
                    sx={{ ml: 1 }}
                    variant="contained"
                    onClick={handleNewRound}
                    disabled={roundCounter === questionList.length}
                    startIcon={<NavigateNextIcon />}
                    endIcon={<NavigateNextIcon />}
                >
                    Nächste Frage
                </Button>
            </Grid>
        </Box>
    );
}
