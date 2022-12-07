import { Box } from "@mui/material";
import * as React from "react";
import CreateQuestion from "../Components/CreateQuestion";
import ButtonAppBar from "../Components/Header";
import AboutIHNN from "../Components/AboutIHNN";
import PrepareGame from "./PrepareGame";
import Game from "./Game";
import GroupVoting from "../Components/GroupVoting";
import ShowQuestion from "../Components/ShowQuestion";


export default function Mainpage() {
	return (
		<>
			<Box>
				{/* <AboutIHNN /> */}
				<Box>
					<PrepareGame />
					<Game/>
				</Box>
			</Box>
		</>
	);
}
