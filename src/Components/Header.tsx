import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MapIcon from '@mui/icons-material/Map';
import ExploreIcon from '@mui/icons-material/Explore';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <ExploreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            IHNN
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Button color="inherit">About Us</Button>
          </Box>
            
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}