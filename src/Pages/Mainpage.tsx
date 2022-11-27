import { Box } from "@mui/material";
import * as React from "react";
import CreateQuestion from "../Components/CreateQuestion";
import ButtonAppBar from "../Components/Header";
import ThisIsIHNN from "../Components/ThisIsIHNN";
import PrepareGame from "./PrepareGame";

/* adding a global visible background image to the page */
/* load it with  <div style={background.image}> */
const background = {
	image: {
		backgroundColor: "#fefe00",
	},
};

export default function Mainpage() {
	return (
		<>
			<div style={background.image}>
				<Box>
					<ThisIsIHNN />
					<Box>
						
						<PrepareGame />
					</Box>
				</Box>
			</div>
		</>
	);
}
