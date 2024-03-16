import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [mode, setMode] = useState("User"); // Default mode is User

  const handleModeChange = () => {
    setMode(mode === "User" ? "Organization" : "User");
    console.log("mode is: ", mode);
  };

  const handleLogin = () => {
    // Add your login logic here
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
              Login
            </Typography>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                color="secondary"
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                color="secondary"
                onChange={(e) => {
                  setPassword(e.target.value)
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

                <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Organization" />
                </FormGroup>
                {/* <Switch
                  checked={mode === "Organization"}
                  onChange={handleModeChange}
                  color="primary"
                /> */}
                {/* <Typography variant="body1" style={{ marginRight: 10 }}>
                  Organization
                </Typography> */}
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                style={{ marginTop: 10 }}
              >
                Login
              </Button>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default Login;
