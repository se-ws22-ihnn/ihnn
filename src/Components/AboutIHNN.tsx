import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Divider, Paper, Stack, Typography } from "@mui/material";

export default function AboutIhnnDialog() {
	const [open, setOpen] = React.useState(true);

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
				startIcon={<InfoIcon />}
			>
				About IHNN
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>What is IHNN: BucketList Edition?</DialogTitle>
				<Divider />
				<Stack direction="row" >
					<Box
						component="img"
						sx={{
							height: 233,
							width: 350,
							maxHeight: { xs: 233, md: 167 },
							maxWidth: { xs: 350, md: 250 },
						}}
						alt="IHNN Cover"
						src="images/ihnn-cover.avif"
					/>
					
					<Typography>
						IHNN steht für Ich habe noch nicht und basiert auf einem
						belieben Trinkspiel. Bei diesem wird der Gruppe in der
						man sich befindet eine Frage gestellt nach einer Sache
						die die Personen noch nicht getan haben. Hat eine Person
						diese Sache bzw. Frage noch nie getan muss diese Person
						einen Shot trinken. Da es sich bei diesem Projekt um
						eine Studienleistung handelt, haben wir uns gedacht, das
						Spielprinzip anzupassen. Ziel ist Fragen zu stellen die
						man auf seiner BucketListe haben könnte. Wie z.b
					</Typography>
                    
				</Stack>
				
				<DialogActions>
					<Button
						onClick={() =>
							window.open(
								"https://github.com/se-ws22-ihnn/ihnn",
								"_blank"
							)
						}
					>
						Github Repo anzeigen
					</Button>
					<Button onClick={handleClose}>verstanden</Button>
				</DialogActions>

				{/* Handler einfügen für das Prüfen der Eingabe und Übertragen der Daten an die Datenbank/Mongo */}
			</Dialog>
		</div>
	);
}
