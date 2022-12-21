import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import GroupVoting from '../Components/GroupVoting';
import { Button } from '@mui/material';
import { GroupContext } from '../Context/GroupContext';
import { QuestionListContext } from '../Context/QuestionsListContext';
import FinalScoreCard from '../Components/FinalScoreCard';
import ShowQuestion from '../Components/ShowQuestion';


const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1A2027',
    border: '0px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#444d58',
    padding: theme.spacing(0),
    borderRadius: '18px',
    textAlign: 'center',
}));

export default function Game() {
    const { roundCounter, setRoundCounter } =
        React.useContext(GroupContext);
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
        <Box sx={{ flexGrow: 1, m: 2 }}>
            <h1>Runde: {roundCounter}</h1>
            <Grid container spacing={2}>
                <Grid xs={6}>
                    <Item sx={{ textAlign: 'left' }}>
                        <ShowQuestion />
                    </Item>
                </Grid>
                <Grid xs={6}>
                    <Item>
                        <GroupVoting key={roundCounter}/> 
                    </Item>
                </Grid>

                <Button variant="contained" onClick={handleNewRound} disabled={roundCounter === questionList.length}>
                    Nächste Frage
                </Button>

                {/* Beenden und Auswertung erhalten */}
                <FinalScoreCard />
            </Grid>
        </Box>
    );
}
