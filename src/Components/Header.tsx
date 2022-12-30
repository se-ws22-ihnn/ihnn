import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ExploreIcon from '@mui/icons-material/Explore';
import { Button, Divider, Stack } from '@mui/material';
import CreateQuestion from './CreateQuestion';
import ThemeController from './ThemeController';
import AboutIhnnDialog from './AboutIHNN';
import FeedbackIcon from '@mui/icons-material/Feedback';

export default function ButtonAppBar() {
    return (
        <AppBar position="static">
            <Toolbar color="inherit">
                {/* Logo IHNN Section */}

                <ExploreIcon
                    sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}
                />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        display: { xs: 'flex', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        mr: 1,
                    }}
                >
                    IHNN
                </Typography>

                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    color="black"
                    sx={{ border: 1, mr: 1 }}
                />

                {/* Buttons in Appbar */}
                <Box sx={{ display: { marginRight: 'auto' } }}>
                    <Stack direction="row" spacing={2}>
                        <CreateQuestion />
                        <Button
                            color="inherit"
                            onClick={() =>
                                window.open(
                                    'https://forms.gle/eyBToprhCYNJqep28',
                                    '_blank',
                                )
                            }
                            startIcon={<FeedbackIcon />}
                        >
                            Feedback geben
                        </Button>
                    </Stack>
                </Box>

                <Box sx={{ display: { marginLeft: 'auto' } }}>
                    <Stack direction="row" spacing={2}>
                        <AboutIhnnDialog />
                        {/* Optional Theme Selector as nice to have, currently placeholder */}
                        <ThemeController />
                    </Stack>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
