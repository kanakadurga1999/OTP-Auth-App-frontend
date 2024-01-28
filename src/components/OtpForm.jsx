
import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';

const OTPForm = ({ onSubmit }) => {
  const [otp, setOTP] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(otp);
  };

  return (
    <section className="public">
   
    
      <Container className="outerbox">
    <form onSubmit={handleSubmit}>
    <Grid item xs={12} sm={12} md={12}>
   
      <TextField
        label="Enter OTP"
        type="text"
        variant="outlined"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
      />
      </Grid>
      <Grid className="buttoncontainer" item xs={12} sm={12} md={12}>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </Grid>
      
    </form>
    </Container>
      
    </section>
  );
};

export default OTPForm;
