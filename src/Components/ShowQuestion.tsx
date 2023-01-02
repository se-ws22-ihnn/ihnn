import * as React from 'react';
import { Table, TableContainer, Typography } from '@mui/material';
import { QuestionListContext } from '../Context/QuestionsListContext';
import { GroupContext } from '../Context/GroupContext';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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

export default function ShowQuestion() {
    const { questionList } = React.useContext(QuestionListContext);
    const { roundCounter } = React.useContext(GroupContext);

    return (
        <>
            <Block elevation={10}>
                <h3>Ich habe noch nie ...</h3>
                <Block sx={{ backgroundColor: '#eeeeee' }}>
                    <Typography
                        color="inherit" //Farbe des Testfragen Textes
                    >
                        {questionList[roundCounter - 1].questionText}
                    </Typography>

                    {/* aktuell wird jede frage in der liste angezeigt, da noch nicht auf einen index gezeigt wird */}
                    {/* {questionList.map((currentQuestion, roundCounter) => (
                    <Typography>{currentQuestion.questionText}</Typography>
                ))} */}
                </Block>
            </Block>
        </>
    );
}
