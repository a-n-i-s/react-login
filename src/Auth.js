import React, { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { HowToRegOutlined } from "@mui/icons-material";
function Auth() {
  const [isSignup, setIsSignUp] = useState();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"auto"}
          marginTop={5}
          padding={3}
          boxShadow={"5px 5px 10px #ccc"}
          borderRadius={5}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h3" padding={3} textAlign="center">
            {isSignup ? "Registration" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              name="name"
              value={inputs.name}
              onChange={handleChange}
              type="text"
              variant="standard"
              placeholder="Name"
              margin={"normal"}
            />
          )}
          <TextField
            name="email"
            required
            value={inputs.email}
            onChange={handleChange}
            type="email"
            variant="standard"
            placeholder="Email"
            margin={"normal"}
          />
          <TextField
            name="password"
            required
            value={inputs.password}
            onChange={handleChange}
            type="password"
            variant="standard"
            placeholder="Password"
            margin={"normal"}
          />
          <Button
            onClick={handleSubmit}
            endIcon={isSignup ? <HowToRegOutlined /> : <LoginOutlinedIcon />}
            variant="contained"
            color="warning"
            sx={{ mt: 3, borderRadius: 3 }}
          >
            {isSignup ? "Create" : "Login"}
          </Button>

          <Button
            onClick={() => {
              setIsSignUp(!isSignup);
              setInputs({ name: "", email: "", password: "" });
            }}
            sx={{ mt: 3, borderRadius: 3 }}
          >
            {isSignup ? "Have an account? Login instead" : "Create new account"}
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Auth;
