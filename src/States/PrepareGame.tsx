import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { AddGroupMember, ListGroupMember } from '../Components/GroupCreation';


export default function PrepareGame() {
    return (
        <Box sx={{ flexGrow: 0, m: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <AddGroupMember />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ListGroupMember />
                </Grid>
            </Grid>
        </Box>
    );
}
