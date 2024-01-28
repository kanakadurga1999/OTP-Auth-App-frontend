
import React, { useState } from 'react';
import { TextField, Button,  Container, Grid} from '@mui/material';

const EmailForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <section className="public">
   
    
      <Container className="outerbox">
    <form onSubmit={handleSubmit}>
    <Grid item xs={12} sm={12} md={12}>
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </Grid>
       <Grid className="buttoncontainer" item xs={12} sm={12} md={12}>
      <Button type="submit" variant="contained" color="success">
        Submit
      </Button>
      </Grid>
    </form>
    </Container>
      
    </section>
  );
};

export default EmailForm;
