import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import QuizIcon from '@mui/icons-material/Quiz';
import { QuestionListContext } from '../Context/QuestionsListContext';
import { Question } from '../types/questionType';
import axios from 'axios';

export default function CreateQuestionByDialog() {
    // Handle Open / Close
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Handle add Question to List
    const { questionList, setQuestionList } =
        React.useContext(QuestionListContext);
    const [questionTextInput, setQuestionTextInput] = React.useState('');

    const addQuestionToList = () => {
        const newQuestion: Question = {
            question: questionTextInput,
            category: 'default',
        };
        setQuestionList([...questionList, newQuestion]);

        axios
            .post('https://api.ihnn.x5f.de/questions', newQuestion)
            .then((response) => {
                setQuestionTextInput('');
                // setzt die Eingabe im Textfeld zurück
                handleClose();
                // schließt das Dialogfenster
            })
            .catch((error) => {
                alert(
                    'Ein Fehler ist aufgetreten, bitte versuche es später erneut.',
                );
                // Spuckt eine Fehlermeldung aus.
            });
    };

    return (
        <div>
            <Button
                color="inherit"
                onClick={handleClickOpen}
                startIcon={<QuizIcon />}
            >
                Frage einreichen
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Reiche deine eigene Frage ein:</DialogTitle>
                <DialogContent style={{ paddingTop: '5px' }}>
                    <TextField
                        autoFocus
                        id="question"
                        label="Schreibe deine Frage im passenden Stil"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={questionTextInput}
                        onChange={(event) =>
                            setQuestionTextInput(event.target.value)
                        }
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Abbrechen</Button>
                    <Button variant="contained" onClick={addQuestionToList}>
                        Einreichen
                    </Button>
                </DialogActions>

                {/* Handler einfügen für das Prüfen der Eingabe und Übertragen der Daten an die Datenbank/Mongo */}
            </Dialog>
        </div>
    );
}
