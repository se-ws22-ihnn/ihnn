import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Avatar, Radio, Switch } from '@mui/material';
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

export default function GroupVoting() {
    const { group, setGroup } = React.useContext(GroupContext);
    const [checked, setChecked] = useState(false);

  const switchHandler = (event:any) => {
    setChecked(event.target.checked);
  };


    return (
        <>
            {/* <Block> */}
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
                                    <Switch checked={checked} onChange={switchHandler} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* </Block> */}
        </>
    );
}
