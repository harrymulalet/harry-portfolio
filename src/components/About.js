import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

function About() {
  return (
    <Box id="about" sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography paragraph>
            My academic and professional journey reflects a dedication to continuous growth, innovative problem-solving, and a passion for technology. I am currently pursuing a Bachelor of Science in Information Engineering at the Hamburg University of Applied Sciences, following initial engineering studies at Addis Ababa Science and Technology University.
          </Typography>
          <Typography paragraph>
            I co-founded Ethio Bookstore, Ethiopia's largest online bookstore, transforming the literary landscape with a user-friendly platform that enhanced access to knowledge. My technical skills extend to software development, evidenced by my freelance work as a Full-Stack Developer for Hammonia Taxi, where I developed a Shift Planner application to streamline taxi shift management.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}

export default About;