import {
    Button,
    createTheme,
    Paper,
    ThemeProvider,
    Typography,
    CssBaseline,
} from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ResponsiveAppBar from './Components/Header';
import ButtonAppBar from './Components/Header';
import Mainpage from './Pages/Mainpage';
import { GroupContextProvider } from './Context/GroupContext';
import { QuestionListContextProvider } from './Context/QuestionsListContext';
import lightTheme from './Themes/light';
import GameStateMachine from './Pages/GameStateMachine';

/* adding a global visible background image to the page */
/* load it with  <div style={background.image}> */
const background = {
    image: {
        backgroundColor: '#BFB59E',
        height: '100vh',
    },
};

export default function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            {/* Hier unsere Components */}
            <QuestionListContextProvider>
                <GroupContextProvider>
                    <div style={background.image}>
                        <ButtonAppBar />
                        <GameStateMachine />
                    </div>
                </GroupContextProvider>
            </QuestionListContextProvider>
        </ThemeProvider>
    );
}
