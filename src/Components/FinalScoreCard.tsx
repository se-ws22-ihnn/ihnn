import * as React from 'react';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import InfoIcon from '@mui/icons-material/Info';
import { GroupContext } from '../Context/GroupContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Avatar, Switch } from '@mui/material';
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
    const { group, setGroup, roundCounter } = React.useContext(GroupContext);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleClickOpen}
                startIcon={<InfoIcon />}
            >
                Spiel beenden & auswerten
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>IHNN: Gruppenauswertung</DialogTitle>
                <Divider />

                <Stack direction="row">
                    <TableContainer component={Paper}>
                        <Table
                            sx={{
                                minWidth: 250,
                                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            }}
                        >
                            <TableHead>
                                Runden gespielt: {roundCounter}
                            </TableHead>
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
                </Stack>

                <DialogActions>
                    <Button onClick={handleClose}>zur Startseite</Button>
                </DialogActions>

                {/* Handler einfügen für das Prüfen der Eingabe und Übertragen der Daten an die Datenbank/Mongo */}
            </Dialog>
        </div>
    );
}
