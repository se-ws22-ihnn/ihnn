import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ResponsiveAppBar from "./Components/Header";
import ButtonAppBar from "./Components/Header";
import Mainpage from "./Pages/Mainpage";

/* adding a global visible background image to the page */
/* load it with  <div style={background.image}> */
const background = {
	image: {
		backgroundColor: "#fefe00",
		height: "100vh",
	},
};

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<div style={background.image}>
			<ButtonAppBar />
			<Mainpage />
		</div>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
