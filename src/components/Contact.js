import React from 'react';
import { Box, Container, Typography, Paper, Grid, Link } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';

function Contact() {
  return (
    <Box id="contact" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Contact
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" gap={1}>
                <Email />
                <Link href="mailto:harrymulalet@gmail.com">
                  harrymulalet@gmail.com
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" gap={1}>
                <Phone />
                <Typography>+49 17631367478</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" gap={1}>
                <LocationOn />
                <Typography>Walddörferstraße 202, 22047 Hamburg, Germany</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default Contact;