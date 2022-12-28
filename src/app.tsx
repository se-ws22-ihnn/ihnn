import {ThemeProvider} from '@mui/material';
import './index.css';
import ButtonAppBar from './Components/Header';
import {GroupContextProvider} from './Context/GroupContext';
import {QuestionListContextProvider} from './Context/QuestionsListContext';
import lightTheme from './Themes/light';
import GameStateMachine from './States/GameStateMachine';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

/* adding a global visible background image to the page */
/* load it with  <div style={background.image}> */

let w = window.innerWidth;
let h = window.innerHeight;
const background = {
    image: {
        minHeight: '100vh',
        backgroundColor: '#BFB59E',
        backgroundSize: w + 'px ' + h + 'px',
    },
};


export default function App() {
    const queryClient = new QueryClient();

    return (
        <ThemeProvider theme={lightTheme}>
            {/* Hier unsere Components */}
            <QueryClientProvider client={queryClient}>
                <QuestionListContextProvider>
                    <GroupContextProvider>
                        <div
                            style={background.image}>

                            <ButtonAppBar/>
                            <GameStateMachine/>
                        </div>

                    </GroupContextProvider>
                </QuestionListContextProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
