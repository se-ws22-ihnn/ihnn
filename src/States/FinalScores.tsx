import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import * as React from 'react';

import GroupScore, { GroupScoreChart } from '../Components/GroupScore';

export default function FinalScoreCard() {
    return (
        <Box sx={{ flexGrow: 0, m: 2 }}>
            <h2>Auswertung:</h2>
            <Grid container spacing={2}>
                <Grid xs={12} sm={6}>
                    <GroupScore />
                </Grid>
                <Grid xs={12} sm={6}>
                    <GroupScoreChart />
                </Grid>
            </Grid>
        </Box>
    );
}
