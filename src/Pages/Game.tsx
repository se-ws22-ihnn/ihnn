import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import ShowQuestion from '../Components/ShowQuestion';
import GroupVoting from '../Components/GroupVoting';
import { Button } from '@mui/material';
import FinalScoreCard from '../Components/FinalScoreCard';
import { GroupContext } from '../Context/GroupContext';

const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1A2027',
    border: '0px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#444d58',
    padding: theme.spacing(0),
    borderRadius: '18px',
    textAlign: 'center',
}));

export default function Game() {
    const { roundCounter, setRoundCounter } = React.useContext(GroupContext);
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
                        <GroupVoting />
                    </Item>
                </Grid>

                {/* Beenden und Auswertung erhalten */}
                <FinalScoreCard />
            </Grid>
        </Box>
    );
}
