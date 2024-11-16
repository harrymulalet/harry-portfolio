import React from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';

function Education() {
  return (
    <Box id="education" sx={{ py: 8 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Education
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6">
                Bachelor of Science in Information Engineering
              </Typography>
              <Typography variant="subtitle1">
                The Hamburg University of Applied Sciences
              </Typography>
              <Typography variant="subtitle2">
                2022 - Present
              </Typography>
            </Paper>
          </Grid>
          {/* Add more Grid items for other education */}
        </Grid>
      </Container>
    </Box>
  );
}

export default Education;