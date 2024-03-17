import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Switch,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#010851",
    },
    secondary: {
      main: "#9A7AF1",
    },
    text: {
      secondary: "#707070",
    },
    error: {
      main: "#EE9AE5",
    },
  },
});

const Signup = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("User"); // Default mode is User
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleModeChange = () => {
    console.log("before change, mode is: ", mode);
    setMode(mode === "User" ? "Organization" : "User");
  };

  const handleSignup = () => {
    // Add your signup logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card variant="outlined" style={{ width: 300 }}>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Signup
            </Typography>
            <form onSubmit={handleSignup}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                color="secondary"
                onChange={(e) => {
                  setUsername(e.target.value);
                  console.log("now, username is: ", username)
                }}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
                color="secondary"
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                color="secondary"
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log("now, password is: ", password)
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <Typography variant="body1" style={{ marginRight: 10 }}>
                  User
                </Typography>
                <Switch
                  checked={mode === "Organization"}
                  onChange={handleModeChange}
                  color="primary"
                />{" "}
                <Typography variant="body1" style={{ marginRight: 10 }}>
                  Organization
                </Typography>
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => {
                  axios.post("http://localhost:3000/user/signup", {username, password}).then((response) => {
                    console.log(response)
                    if(response.status===200){
                      navigate("/sell")
                    }
                  })
                }}
              >
                Signup
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default Signup;
