import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
	Avatar,
	Button,
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	TextField,
} from "@mui/material";
// Table Imports
import {
	Table,
	TableHead,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Player } from "../types/playerType";
// icon imports
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from "@mui/icons-material/Delete";

// own palette of colors available for the avatar
const avatarcolors = {
	pink: "#e91e63",
	purple: "#673ab7",
	blue: "#2196f3",
	teal: "#009688",
	green: "#4caf50",
	lime: "#cddc39",
	brown: "#795548",
};

const Block = styled(Paper)(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === "dark"
			? "rgba(27, 33, 40, 0.8)"
			: "rgba(255, 255, 255, 0.8)",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "left",
	color: theme.palette.text.secondary,
}));

/* welche daten gehören zu einem Member? */

/* variable um dort alle gruppendaten einzulagern */

export function ListGroupMember() {
	return (
		<>
			<Block>
				<h2>Aktuelle Spieler</h2>

				<TableContainer component={Paper}>
					<Table
						sx={{
							minWidth: 250,
							backgroundColor: "rgba(255, 255, 255, 0.5)",
						}}
						aria-label="Spielerliste"
					>
						<TableHead></TableHead>
						<TableBody>
							{/* hier durch die verschiedenen Einträge loopen, eine Row definieren und dann wiederholen lassen */}
							<TableRow>
								<TableCell align="left">
									<Avatar
										sx={{ bgcolor: avatarcolors.green }}
									>
										N
									</Avatar>
								</TableCell>
								<TableCell align="left">Norbert</TableCell>
								<TableCell align="left">
									<IconButton
										color="error"
										aria-label="Eintrag entfernen"
										component="label"
										onClick={() => {
											alert("gelöscht");
										}}
									>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>

							{/* testweise */}
							<TableRow>
								<TableCell align="left">
									<Avatar
										sx={{ bgcolor: avatarcolors.purple }}
									>
										R
									</Avatar>
								</TableCell>
								<TableCell align="left">Roland</TableCell>
								<TableCell align="left">
									<IconButton
										color="error"
										aria-label="Eintrag entfernen"
										component="label"
										onClick={() => {
											alert("gelöscht");
										}}
									>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Block>
		</>
	);
}

export function AddGroupMember() {
	// useState für farbe picken
	const [color, setColor] = React.useState("");

	const handleSetColor = (event: SelectChangeEvent) => {
		setColor(event.target.value as string);
	};

	// useState erstellt eine Liste von Type Player die Anfangs leer ist
	// group ist eine Liste von Objekten des Type Plyer
	const [group, setGroup] = useState<Player[]>([]);

	return (
		<>
			<Block>
				<h2>Spieler hinzuf&uuml;gen</h2>
				<FormControl>
					{/* <InputLabel id="name-label">Name</InputLabel> */}
					<TextField
						required
						id="outlined-required"
						label="Spielername"
						sx={{ marginBottom: 1 }}
					/>

					{/* <InputLabel id="color-label">Color</InputLabel> */}

					{/* <InputLabel id="demo-simple-select-label">Color</InputLabel> */}
					<Select
						/* labelId="demo-simple-select-label" */
						id="demo-simple-select"
						value={color}
						label="Color"
						onChange={handleSetColor}
					>
						<MenuItem
							sx={{ bgcolor: avatarcolors.pink }}
							value={avatarcolors.pink}
						>
							pink
						</MenuItem>
						<MenuItem
							sx={{ bgcolor: avatarcolors.purple }}
							value={avatarcolors.purple}
						>
							purple
						</MenuItem>
						<MenuItem
							sx={{ bgcolor: avatarcolors.blue }}
							value={avatarcolors.blue}
						>
							blue
						</MenuItem>
						<MenuItem
							sx={{ bgcolor: avatarcolors.teal }}
							value={avatarcolors.teal}
						>
							teal
						</MenuItem>
						<MenuItem
							sx={{ bgcolor: avatarcolors.green }}
							value={avatarcolors.green}
						>
							green
						</MenuItem>
						<MenuItem
							sx={{ bgcolor: avatarcolors.lime }}
							value={avatarcolors.lime}
						>
							lime
						</MenuItem>
						<MenuItem
							sx={{ bgcolor: avatarcolors.brown }}
							value={avatarcolors.brown}
						>
							brown
						</MenuItem>
					</Select>

					<br></br>
					<Button
						variant="contained"
						endIcon={<PersonAddIcon />}
						onClick={() => {
							alert("clicked");
						}}
					>
						Add
					</Button>
				</FormControl>
			</Block>
		</>
	);
}
