import * as React from "react";
import { styled } from "@mui/material/styles";
import ButtonAppBar from "../Components/Header";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { AddGroupMember, ListGroupMember } from "../Components/Group";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

export default function PrepareGame() {
	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					{/* for later use: grid layout with three boxes https://mui.com/material-ui/react-grid/
					<Grid item xs={4}>
						<Item>Settings</Item>
					</Grid>
					<Grid item xs={4}>
						<ListGroupMember />
					</Grid>
					<Grid item xs={4}>
						<AddGroupMember />
					</Grid> */}

					<Grid item xs={6}>
						<ListGroupMember />
					</Grid>
					<Grid item xs={6}>
						<AddGroupMember />
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
