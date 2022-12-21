import * as React from 'react';
import { GroupContext } from '../Context/GroupContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Avatar, Box, Button, Grid, styled, Switch } from '@mui/material';
// Table Imports
import {
    Divider,
    Paper,
    Stack,
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material';

export default function FinalScoreCard() {
    const { group, roundCounter } = React.useContext(GroupContext);
    return (
        <>
            <Box sx={{ flexGrow: 1, m: 2 }}>
                <h2>IHNN: Gruppenauswertung</h2>
                <Divider />
                <h3>Runden gespielt: {roundCounter}</h3>

                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <TableContainer component={Paper}>
                            <Table
                                sx={{
                                    minWidth: 250,
                                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                }}
                            >
                                <TableHead></TableHead>
                                <TableBody>
                                    {/* Table bauen pro Gruppenmitglied */}
                                    {group.map((currentPlayer) => (
                                        <TableRow key={currentPlayer.playerId}>
                                            <TableCell
                                                align="left"
                                                key={currentPlayer.playerId}
                                            >
                                                <Avatar
                                                    sx={{
                                                        bgcolor:
                                                            currentPlayer.color,
                                                    }}
                                                >
                                                    {currentPlayer.shortname}
                                                </Avatar>
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                key={currentPlayer.playerId}
                                            >
                                                {currentPlayer.name}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                key={currentPlayer.playerId}
                                            >
                                                <CheckCircleIcon />
                                                {currentPlayer.iDidCounter}
                                            </TableCell>
                                            <TableCell
                                                align="right"
                                                key={currentPlayer.playerId}
                                            >
                                                <CancelIcon />
                                                {currentPlayer.iDidNotCounter}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid xs={6}>Hier könnte ein Chart sein @Sören </Grid>
                </Grid>
            </Box>
        </>
    );
}
