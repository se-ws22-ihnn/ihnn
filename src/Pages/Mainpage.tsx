import { Box } from "@mui/material";
import * as React from "react";
import CreateQuestion from "../Components/CreateQuestion";
import ButtonAppBar from "../Components/Header";
import ThisIsIHNN from "../Components/ThisIsIHNN";
import PrepareGame from "./PrepareGame";

export default function Mainpage() {
	return (
		<>
				<Box>
					<ThisIsIHNN />
					<Box>
						
						<PrepareGame />
					</Box>
				</Box>
		</>
	);
}
