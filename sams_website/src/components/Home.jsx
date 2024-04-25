import React from 'react';
import { Container, Grid, Paper, Typography, Button, TextField, createTheme, ThemeProvider } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#000000',
    },
  },
});

const HomePage = () => {


  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/contact');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          {/* Hero Section */}
          <Paper sx={{ p: 4, bgcolor: 'primary.main', color: 'primary.contrastText', textAlign: 'center' }}>
            <Typography variant="h2" gutterBottom>Sam, Freelance Web Developer</Typography>
            <Typography variant="h5" gutterBottom>Building your digital dreams into reality.</Typography>
            <Button variant="contained" color="secondary" onClick={handleSubmit}>Get Started</Button>
          </Paper>

          {/* About Section */}
          <Paper sx={{ p: 4, bgcolor: 'black', color: 'white', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>About Me</Typography>
            <Typography variant="body1" gutterBottom>I'm Sam, a passionate freelance web developer with over 5 years of experience. I specialize in creating dynamic and beautiful web applications that provide real value to your business.</Typography>
          </Paper>

          {/* Services Section */}
          <Paper sx={{ p: 4, bgcolor: 'background.default', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>Services</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6" gutterBottom>Website Development</Typography>
                  <Typography variant="body2">Custom websites built with modern technologies to meet your business needs.</Typography>
                </Paper>
              </Grid>
              {/* Repeat for other services */}
            </Grid>
          </Paper>

          {/* Portfolio Section */}
          <Paper sx={{ p: 4, bgcolor: 'black', color: 'white', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>Portfolio</Typography>
            {/* Showcase your portfolio here */}
          </Paper>

          {/* Testimonials Section */}
          <Paper sx={{ p: 4, bgcolor: 'background.default', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>Testimonials</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="body1">Client testimonial 1</Typography>
                </Paper>
              </Grid>
              {/* Repeat for other testimonials */}
            </Grid>
          </Paper>

          {/* Contact Section */}
          <Paper sx={{ p: 4, bgcolor: 'black', color: 'white', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>Contact Me</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Email" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">Send Message</Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default HomePage;