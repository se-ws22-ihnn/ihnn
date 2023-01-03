import * as React from 'react';
import { Table, TableContainer, Typography } from '@mui/material';
import { QuestionListContext } from '../Context/QuestionsListContext';
import { GroupContext } from '../Context/GroupContext';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Question} from '../types/questionType';

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
    const { questionList, setQuestionList } = React.useContext(QuestionListContext);
    
    const { roundCounter } = React.useContext(GroupContext);
    const [apiResponse, setApiResponse] = useState(null);

    // um aus data eine Frage zurück zu bauen um diese dann der QuestionListe setQuestionList([...questionList, question]) hinzuzufügen
    const [question, setQuestion] = useState<Question>()

    useEffect(() => {
        /* GET Request to API using axios */
        async function fetchData() {
            const response = await axios.get(
                'https://api.ihnn.x5f.de/questions',
            );
            /* strip key "data" from response */
            const resp = response.data;
            const { data } = resp;
            /* object with keys {_id, question, category, __v} is written to apiResponse */
            setApiResponse(data);
            console.log("Data:",data)
            console.log("apiResponse:",apiResponse) // ist null
            
            /* to do: @Jannik
             * Put object to correct list/object for questions
             * randomize list
             * show just question and maybe category.
             * test & remove to do. */

            // 1. Fragen aus Data wieder zusammenbasteln?
            // Frage ist wie splitte ich Data auf sodass ich nur die question vergebe
            data.map()
            // question?.id = data?._id,
            // question?.questionText = data.question
            // question?.kategorie = data.category

            //setQuestion()

            // 2. QuestionList mit jeweils der Zusammengestellten Frage befüllen
            setQuestionList([...questionList, question])

            // 3. Questlist durchmischen
            const shuffledArray = questionList.sort((a, b) => 0.5 - Math.random());
            setQuestionList([...shuffledArray]);
        }
        fetchData();
    }, []);

    return (
        <>
            <Block elevation={10}>
                <h3>Ich habe noch nie ...</h3>
                <Block sx={{ backgroundColor: '#eeeeee' }}>
                    {apiResponse ? (
                        <div>{JSON.stringify(apiResponse)}</div>
                    ) : (
                        <div>Loading...</div>
                    )}
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
