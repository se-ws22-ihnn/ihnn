import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import QuizIcon from "@mui/icons-material/Quiz";

export default function CreateQuestionByDialog() {
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
				color="inherit"
				onClick={handleClickOpen}
				startIcon={<QuizIcon />}
			>
				Add Question
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Reiche deine eigene Frage ein:</DialogTitle>
				<DialogContent>
					{/* 					<DialogContentText>
						Um eine Frage hinzuzufügen, gebe sie einfach hier ein.
					</DialogContentText> */}
					<TextField
						autoFocus
						margin="dense"
						id="question"
						label="Schreibe deine Frage im passenden Stil"
						defaultValue="Ich habe noch nie "
						type="text"
						fullWidth
						variant="outlined"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Abbrechen</Button>
					<Button onClick={handleClose}>Einreichen</Button>
				</DialogActions>

				{/* Handler einfügen für das Prüfen der Eingabe und Übertragen der Daten an die Datenbank/Mongo */}
			</Dialog>
		</div>
	);
}
