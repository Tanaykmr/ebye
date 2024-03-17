import React, { useState } from "react";
import {
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import axios from "axios";

const Sell = () => {
  // const [mode, setMode] = useState('User');
  const [model, setModel] = useState("");
  const [mfd, setMfd] = useState(2024);
  const [category, setCategory] = useState("");
  const [imageLink, setImageLink] = useState("");

  // const handleModeChange = () => {
  //   setMode(mode === 'User' ? 'Organization' : 'User');
  // };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form>
        <Typography variant="h4" align="center">
          Sell
        </Typography>
        {/* <FormGroup>
          <FormControlLabel
            control={<Switch checked={mode === 'Organization'} onChange={handleModeChange} />}
            label={mode === 'User' ? 'User' : 'Organization'}
          />
        </FormGroup> */}
        {/* {mode === 'User' ? (
         */}
        <>
          <TextField
            label="Model"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => {
              setModel(e.target.value);
            }}
          />
          <TextField
            label="Image Link"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => {
              setImageLink(e.target.value);
            }}
          />
          <TextField
            label="Year of Manufacture"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => {
              setMfd(e.target.value);
            }}
          />
          <TextField
            select
            label="Category"
            variant="outlined"
            fullWidth
            margin="normal"
            defaultValue=""
            onChange={(e) => {
              setCategory(e.target.value);
            }}
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
            <MenuItem value="mint">Mint</MenuItem>
            <MenuItem value="good">Good</MenuItem>
            <MenuItem value="bad">Bad</MenuItem>
          </TextField>
        </>
        {/* ) : (
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
        )} */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            let machine;
            machine.model = model;
            machine.imageLink = imageLink;
            machine.age = 2024 - mfd;
            machine.category = category;
            axios
              .post(
                "http://localhost:3000/user/selldevice",
                { machine },
                { authorization: localStorage.getItem("authorization") }
              )
              .then((response) => {
                console.log(response);
                if(response.status == 200){
                  alert("Device uploaded successfully")
                }
              });
          }}
        >
          Sell
        </Button>
      </form>
    </div>
  );
};

export default Sell;
