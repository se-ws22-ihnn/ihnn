import { ThemeProvider } from '@mui/material';
import './index.css';
import ButtonAppBar from './Components/Header';
import { GroupContextProvider } from './Context/GroupContext';
import { QuestionListContextProvider } from './Context/QuestionsListContext';
import lightTheme from './Themes/light';
import GameStateMachine from './States/GameStateMachine';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
    const queryClient = new QueryClient();

    return (
        <ThemeProvider theme={lightTheme}>
            {/* Hier unsere Components */}
            <QueryClientProvider client={queryClient}>
                <QuestionListContextProvider>
                    <GroupContextProvider>
                        <div
                            style={{
                                backgroundImage:
                                    'url(images/background-logo.png), url(images/light-noise-background.png)',

                                minHeight: '100vh',
                                backgroundRepeat: 'no-repeat, repeat',
                                backgroundPosition: 'center 100px',
                                backgroundSize: '600px, 50px',
                            }}
                        >
                            {' '}
                            {/*Hintergrund und Logo initialisierung*/}
                            {/* style={background.image}  */}
                            <ButtonAppBar />
                            <GameStateMachine />
                            {/* <Box
                                      component="img"
                                      alt="IHNN Logo"
                                      src="images/logo512.png"
                                      minHeight= '10vh'
                                      maxHeight= '100vh'
                                      zIndex="-1"
                                      />

                          <Box/>  */}
                        </div>
                    </GroupContextProvider>
                </QuestionListContextProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
