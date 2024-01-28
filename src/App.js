
import React, { useState } from 'react';
import EmailForm from './components/EmailForm';
import OtpForm from './components/OtpForm';
import Welcome from './components/Welcome';
import { Container, Paper, Typography } from '@mui/material';

const App = () => {
  const [email, setEmail] = useState('');
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const handleEmailSubmit = async (enteredEmail) => {
    try {
      
      const response = await fetch('http://localhost:4000/generateotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: enteredEmail }),
      });

      if (response.ok) {
        setShowOTPForm(true);
      } else {
        console.error('Error generating OTP:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

    
    

  
    const handleOTPSubmit = async (enteredOTP) => {
      try {
        
        const response = await fetch('http://localhost:4000/verifyotp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, enteredOTP }),
        });
  
        if (response.ok) {
          
          setAuthenticated(true);
        } else {
          
          console.error('Error verifying OTP:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    
    
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {authenticated ? (
          <Welcome />
        ) : !showOTPForm ? (
          <EmailForm onSubmit={handleEmailSubmit} />
        ) : (
          <OtpForm onSubmit={handleOTPSubmit} />
        )}
      </Paper>
    </Container>
  );
};

export default App;
