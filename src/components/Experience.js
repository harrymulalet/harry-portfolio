import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, 
         TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

function Experience() {
  return (
    <Box id="experience" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6">
                  Working Student
                </Typography>
                <Typography variant="subtitle1">
                  Nacora International Insurance Brokers
                </Typography>
                <Typography variant="subtitle2">
                  Nov 2023 - Present
                </Typography>
                <Typography>
                  Assist in maintaining global systems and supporting IT projects
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6">
                  Freelance Software Engineer
                </Typography>
                <Typography variant="subtitle1">
                  Hammonia Taxi
                </Typography>
                <Typography variant="subtitle2">
                  Aug 2024 - Sep 2024
                </Typography>
                <Typography>
                  Developed a Shift Planner application using React.js and Firebase, 
                  implementing real-time data synchronization and secure user authentication.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6">
                  Cofounder
                </Typography>
                <Typography variant="subtitle1">
                  Ethio Bookstore
                </Typography>
                <Typography variant="subtitle2">
                  Apr 2020 - Mar 2022
                </Typography>
                <Typography>
                  Founded and managed Ethiopia's largest online bookstore, 
                  implementing e-commerce solutions using WordPress and WooCommerce.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Box>
  );
}

export default Experience;