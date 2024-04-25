import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, createTheme, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bgImage from './bg.jpg'; // Import the image

const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: 'rgb(51, 48, 255)',
    },
  },
});

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!/^\d{10}$/.test(formData.phonenumber)) {
      newErrors.phonenumber = 'Invalid phone number';
    }
    if (Object.keys(newErrors).length === 0) {
      fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.text())
        .then(data => {
          console.log(data);
          navigate('/');
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Paper sx={{ p: 4, bgcolor: 'background.default', textAlign: 'center', opacity: 0.9 }}>
            <Typography variant="h4" gutterBottom>Get Started</Typography>
            <form onSubmit={handleSubmit}>
              <TextField label="Email" variant="outlined" fullWidth name="email" onChange={handleChange} error={errors.email} helperText={errors.email} />
              <TextField label="Name" variant="outlined" fullWidth name="name" onChange={handleChange} />
              <TextField label="Lastname" variant="outlined" fullWidth name="lastname" onChange={handleChange} />
              <TextField label="Service" variant="outlined" fullWidth name="service" onChange={handleChange} />
              <TextField label="Phonenumber" variant="outlined" fullWidth name="phonenumber" onChange={handleChange} error={errors.phonenumber} helperText={errors.phonenumber} />
              <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Form;