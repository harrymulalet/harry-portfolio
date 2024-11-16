import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Harry Mulalet
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Information Engineering Student & Full-Stack Developer
        </Typography>
      </Container>
    </Box>
  );
}

export default Hero;