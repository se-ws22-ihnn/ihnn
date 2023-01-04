import * as React from 'react';
import { Typography } from '@mui/material';
import { GroupContext } from '../Context/GroupContext';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { QuestionListContext } from '../Context/QuestionsListContext';


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
    const { roundCounter } = React.useContext(GroupContext);
    const { questionList } =
        React.useContext(QuestionListContext);
    return (
        <>
            <Block elevation={10}>
                <h3>Ich habe noch nie ...</h3>
                <Block sx={{ backgroundColor: '#eeeeee' }}>
                    <Typography
                        color="inherit" //Farbe des Testfragen Textes
                    >
                        {(questionList?.length ?? 0) > 0 && questionList[roundCounter - 1].question}
                    </Typography>
                </Block>
            </Block>
        </>
    );
}
