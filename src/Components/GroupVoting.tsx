import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Avatar, Radio, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
// Table Imports
import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material';
// icon imports
import { GroupContext } from '../Context/GroupContext';
import { green, red } from '@mui/material/colors';
import { useState } from 'react';
import HandlePlayerVoting from './HandlePlayerVoting';

const Block = styled(Paper)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(27, 33, 40, 0.8)'
            : 'rgba(145, 115, 94, 1)',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
}));

export default function GroupVoting() {
    const { group } = React.useContext(GroupContext);

    return (
        <>
            <Block>
                <h2>Votings der Gruppenmitglieder </h2>
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
                                                bgcolor: currentPlayer.color,
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
                                        <HandlePlayerVoting
                                            currentPlayer={currentPlayer}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Block>
        </>
    );
}
