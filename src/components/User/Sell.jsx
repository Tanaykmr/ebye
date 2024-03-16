import React, { useState } from 'react';
import { FormControlLabel, FormGroup, Switch, TextField, Button, MenuItem, Typography } from '@mui/material';

const Sell = () => {
  const [mode, setMode] = useState('User');

  const handleModeChange = () => {
    setMode(mode === 'User' ? 'Organization' : 'User');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" align="center">Sell</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={mode === 'Organization'} onChange={handleModeChange} />}
            label={mode === 'User' ? 'User' : 'Organization'}
          />
        </FormGroup>
        {mode === 'User' ? (
          <>
            <TextField label="User Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Product Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Year of Manufacture" type="number" variant="outlined" fullWidth margin="normal" />
            <TextField
              select
              label="Category"
              variant="outlined"
              fullWidth
              margin="normal"
              defaultValue=""
            >
              <MenuItem value="laptop">Laptop</MenuItem>
              <MenuItem value="mobile">Mobile</MenuItem>
              <MenuItem value="pc">PC</MenuItem>
            </TextField>
            <TextField
              select
              label="Condition"
              variant="outlined"
              fullWidth
              margin="normal"
              defaultValue=""
            >
              <MenuItem value="good">Good</MenuItem>
              <MenuItem value="bad">Bad</MenuItem>
              <MenuItem value="mint">Mint</MenuItem>
            </TextField>
          </>
        ) : (
          <>
            <TextField label="Organization Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Product Name" variant="outlined" fullWidth margin="normal" />
            <TextField label="Year of Manufacture" type="number" variant="outlined" fullWidth margin="normal" />
            <TextField
              select
              label="Category"
              variant="outlined"
              fullWidth
              margin="normal"
              defaultValue=""
            >
              <MenuItem value="laptop">Laptop</MenuItem>
              <MenuItem value="mobile">Mobile</MenuItem>
              <MenuItem value="pc">PC</MenuItem>
            </TextField>
            <TextField
              select
              label="Condition"
              variant="outlined"
              fullWidth
              margin="normal"
              defaultValue=""
            >
              <MenuItem value="good">Good</MenuItem>
              <MenuItem value="bad">Bad</MenuItem>
              <MenuItem value="mint">Mint</MenuItem>
            </TextField>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              The minimum quantity should be 10 units
            </Typography>
          </>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sell
        </Button>
      </form>
    </div>
  );
};

export default Sell;
