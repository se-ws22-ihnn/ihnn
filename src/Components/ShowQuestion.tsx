import * as React from 'react';
import { Button, Typography } from '@mui/material';
import { QuestionListContext } from '../Context/QuestionsListContext';
import { useState } from 'react';
import { GroupContext } from '../Context/GroupContext';

export default function ShowQuestion() {
    const { questionList, setQuestionList } = React.useContext(QuestionListContext);
    const { roundCounter, setRoundCounter } = React.useContext(GroupContext);

    const handleNewRound = () => {

        setRoundCounter(roundCounter + 1)

    }
    
    return (
        <div>
			<h2>Ich habe noch nie ...</h2>
                <Typography>
                    frage folgt hier
                </Typography>
				<Button variant='contained' onClick={handleNewRound}>Nächste Frage</Button>
        </div>
    );
}
