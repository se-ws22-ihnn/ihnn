import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Stack } from '@mui/material';
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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { PieChart } from 'react-minimal-pie-chart';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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

export default function GroupScore() {
    const { roundCounter, group } = React.useContext(GroupContext);

    return (
        <>
            <Block elevation={10}>
                <h3>Runden gespielt: {roundCounter}</h3>
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
                                                color: '#ffffff',
                                            }}
                                        >
                                            {currentPlayer.shortname}
                                        </Avatar>
                                    </TableCell>
                                    <TableCell align="left">
                                        {currentPlayer.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            gap={2}
                                        >
                                            <CheckCircleIcon color="success" />
                                            {currentPlayer.iDidCounter}
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Stack
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="center"
                                            gap={2}
                                        >
                                            <CancelIcon color="error" />
                                            {currentPlayer.iDidNotCounter}
                                        </Stack>
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

export function GroupScoreChart() {
    const { group } = React.useContext(GroupContext);
    const allIDid = group
        .map((currentPlayer) => currentPlayer.iDidCounter)
        .reduce((currentValue, perItem) => {
            currentValue += perItem;
            return currentValue;
        }, 0);
    const allIDidNot = group
        .map((currentPlayer) => currentPlayer.iDidNotCounter)
        .reduce((currentValue, perItem) => {
            currentValue += perItem;
            return currentValue;
        }, 0);

    const voteData = [
        { title: 'Yes', value: allIDid, color: '#3a883d' },
        { title: 'No', value: allIDidNot, color: '#dd3a2e' },
    ];

    if (allIDid === 0 && allIDidNot === 0) {
        return (
            <>
                <Block elevation={10}>
                    <h3>Verteilung aller Stimmen</h3>
                    <Block sx={{ bgcolor: '#bfb59e' }}>
                        <Stack direction="row" alignItems="center" gap={1}>
                            <ErrorOutlineIcon />
                            <p>Es wurden keine Stimmen abgegeben</p>
                        </Stack>
                    </Block>
                </Block>
            </>
        );
    }

    return (
        <>
            <Block elevation={10}>
                <h3>Verteilung aller Stimmen</h3>
                <Block sx={{ bgcolor: '#bfb59e' }}>
                    <PieChart
                        data={voteData}
                        lineWidth={20}
                        paddingAngle={18}
                        radius={40}
                        style={{ height: '500px' }}
                        rounded
                        label={({ dataEntry }) => dataEntry.value}
                        labelStyle={(index) => ({
                            fill: voteData[index].color,
                            fontSize: '8px',
                            fontFamily: 'sans-serif',
                        })}
                        labelPosition={60}
                    />
                </Block>
            </Block>
        </>
    );
}
