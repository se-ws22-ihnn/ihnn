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
						IHNN steht für "Ich habe noch nie" und basiert auf dem
						belieben Trinkspiel mit identischen namen. In diesem Spiel wird 
						der Gruppe bezüglich einer beliebigen Aktivität eine Frage gestellt.
						Unsere Version des Spiels bezieht sich auf Dinge die man auf eine 
						"Bucketliste" schreiben würde, daher muss die Person mit der meisten 
						Erfahrung in diesem Gebiet, im gegensatz zum namensgebenden Trinkspiel,
						nur davon erzählen anstatt einen 'Shot' zu nehmen. Da es sich bei 
						diesem Projekt um eine Studienleistung handelt, haben wir natürlich, 
						vernünftig wie wir sind, diese Spielregel angepasst.
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
