import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ExploreIcon from "@mui/icons-material/Explore";
import { Divider, Stack } from "@mui/material";
import CreateQuestion from "./CreateQuestion";
import ThemeController from "./ThemeController";
import AboutIhnnDialog from "./AboutIHNN";

export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					{/* Logo IHNN Section */}

					<ExploreIcon
						sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }}
					/>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							display: { xs: "flex", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
							mr: 1,
						}}
					>
						IHNN
					</Typography>

					<Divider
						orientation="vertical"
						variant="middle"
						flexItem
						color="white"
						sx={{ border: 1, mr: 1 }}
					/>

					{/* Buttons in Appbar */}
					<Box sx={{ display: { marginRight: "auto" } }}>
						<CreateQuestion />
					</Box>
							
					<Box sx={{ display: { marginLeft: "auto" }}}>
					<Stack direction="row" spacing={2}>
					<AboutIhnnDialog />
						{/* Optional Theme Selector as nice to have, currently placeholder */}
						<ThemeController />
						</Stack>

					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
