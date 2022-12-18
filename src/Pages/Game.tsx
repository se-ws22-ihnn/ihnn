import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import GroupVoting from '../Components/GroupVoting';
import { Button } from '@mui/material';
import { GroupContext } from '../Context/GroupContext';
import { QuestionListContext } from '../Context/QuestionsListContext';
import Paper from '@mui/material/Paper';
import { Avatar, Switch } from '@mui/material';
// Table Imports
import {
    Table,
    TableHead,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material';
import { useState } from 'react';
import FinalScoreCard from '../Components/FinalScoreCard';
import ShowQuestion from '../Components/ShowQuestion';
import HandlePlayerVoting from '../Components/HandlePlayerVoting';

// icon imports

const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1A2027',
    border: '0px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#444d58',
    padding: theme.spacing(0),
    borderRadius: '18px',
    textAlign: 'center',
}));

export default function Game() {
    const { group, roundCounter, setRoundCounter } =
        React.useContext(GroupContext);
    const { questionList } = React.useContext(QuestionListContext);
    const [checked, setChecked] = useState(false);

    const switchHandler = (event: any) => {
        setChecked(event.target.checked);
    };
    const handleNewRound = () => {
        // 1. wenn gruppe angegeben hat wie viele runden gespielt werden sollen muss das hier per if berücksichtigt werden
        // 2. votings der runde muss in jedem spieler berücksichtig und übergeben werden werde (i did oder i didnt +1)
        // 3. zurücksetzten der voting slider

        // 4. neu Frage anzeigen

        // BUG: wenn liste leer bzw durch, wird nichts mehr gerendert
        // ===> Liste könnte jedes mal random befüllt werden und roundcounter wäre dann gleichzeitig der index mit dem man eine neue frage abruft
        // ===> wenn ende der liste erreich, dann meldung und einfach wieder von vorne? oder spiel beenden?
        if (roundCounter === questionList.length) {
            console.log(
                'roundCounter',
                roundCounter,
                ' => ',
                'questionListL',
                questionList.length,
            );
            /* return <h3>Ihr habt alle Fragen beantwortet</h3>; */
            return <FinalScoreCard />;
            // BUG: Funkt nicht Wenn roundcounter == Fragenlistenlänge beende spiel
        } else {
            // 5. Roundcounter erhöhen
            setRoundCounter(roundCounter + 1);
        }
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
                                                <HandlePlayerVoting playerId={currentPlayer.playerId} name={''} shortname={''} color={''} iDidCounter={0} iDidNotCounter={0}/>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/* </Block> */}
                    </Item>
                </Grid>

                <Button variant="contained" onClick={handleNewRound}>
                    Nächste Frage
                </Button>

                {/* Beenden und Auswertung erhalten */}
                <FinalScoreCard />
            </Grid>
        </Box>
    );
}
