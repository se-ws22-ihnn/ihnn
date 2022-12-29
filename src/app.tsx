import { Box, ThemeProvider, Typography } from '@mui/material';
import './index.css';
import ButtonAppBar from './Components/Header';
import { GroupContextProvider } from './Context/GroupContext';
import { QuestionListContextProvider } from './Context/QuestionsListContext';
import lightTheme from './Themes/light';
import GameStateMachine from './States/GameStateMachine';

/* adding a global visible background image to the page */
/* load it with  <div style={background.image}> */

// let w = window.innerWidth;
// let h = window.innerHeight;
// const background = {
//     image: {
//         minHeight: '100vh',
//         backgroundColor: '#BFB59E',
//         backgroundSize: w + 'px ' + h + 'px',
//     },
//     image2: {
//         backgroundImage: "url(images/logo512.png)",
//         backgroundRepeat: 'no-repeat',
//     },
// };




export default function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            {/* Hier unsere Components */}
            <QuestionListContextProvider>
                <GroupContextProvider>
                
                    <div 
                        style={{ backgroundImage: "url(images/logo512.png), url(images/light-noise-background.png)",
                        
                        minHeight: '100vh', 
                        backgroundRepeat: 'no-repeat, repeat',
                        backgroundPosition: 'center 100px',
                        backgroundSize: '600px, 50px',
                        }}>


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
        </ThemeProvider>
    );
}
