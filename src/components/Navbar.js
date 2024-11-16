import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Harry Mulalet
        </Typography>
        <Box>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#experience">Experience</Button>
          <Button color="inherit" href="#education">Education</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;