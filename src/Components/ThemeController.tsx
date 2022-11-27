import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import * as React from "react";

export default function ThemeController() {
	return (
		<>
			<FormGroup>
				<FormControlLabel
					control={<Switch checked={false} /* onChange={} */ />}
					label="Theme"
				/>
			</FormGroup>
		</>
	);
}
