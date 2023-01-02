import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
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
import { useState } from 'react';
import HandlePlayerVoting from './HandlePlayerVoting';

/* !!!!! aktuell keine Verwendung weil diese Componente in die Game Komponente ausgelagert wurde !!!!
   Dies kann sich aber auch wieder ändern je nach dem wie ich eine Lösung finde (Jannik) */

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
            <Block elevation={10}>
                <h3>Votings der Gruppenmitglieder </h3>
                <TableContainer component={Paper}>
                    <Table
                        sx={{
                            minWidth: 250,
                        }}
                    >
                        <TableHead></TableHead>
                        <TableBody>
                            {/* Table bauen pro Gruppenmitglied */}
                            {group.map((currentPlayer) => (
                                <TableRow key={currentPlayer.playerId}>
                                    <TableCell align="left">
                                        <Avatar
                                            sx={{
                                                bgcolor: currentPlayer.color,
                                            }}
                                        >
                                            {currentPlayer.shortname}
                                        </Avatar>
                                    </TableCell>
                                    <TableCell align="left">
                                        {currentPlayer.name}
                                    </TableCell>
                                    <TableCell align="right">
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
