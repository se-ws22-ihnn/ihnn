import { ThemeProvider } from '@mui/material';
import './index.css';
import ButtonAppBar from './Components/Header';
import { GroupContextProvider } from './Context/GroupContext';
import { QuestionListContextProvider } from './Context/QuestionsListContext';
import lightTheme from './Themes/light';
import GameStateMachine from './States/GameStateMachine';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';

export default function App() {
    const queryClient = new QueryClient();

    useEffect(() => {
        const onBeforeUnload = (e: BeforeUnloadEvent) => {
            // Customize the message
            e.preventDefault();
            e.returnValue = 'Reloading deletes your session!';
        };

        window.addEventListener('beforeunload', onBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', onBeforeUnload);
        };
    }, []);

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
                            <ButtonAppBar />
                            <GameStateMachine />
                        </div>
                    </GroupContextProvider>
                </QuestionListContextProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
