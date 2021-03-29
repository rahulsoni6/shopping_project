// // import React from "react";
// // const Login = () => {
// //   return <h1>login</h1>;
// // };

// // export default Login;
import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "../../node_modules/axios";

export default class Signup extends Component {
  t;
  state = {
    name: "",
    email: "",
    password: "",
  };
  // classes = useStyles();
  clicked = () => {
    // const email = document.getElementById("email");
    axios
      .post("http://localhost:8000/api/signup", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
      .then((data) => {
        console.log(data);
        alert("SignUp Successfull...");
        this.props.history.push("/login");
      })
      .catch((e) => {
        console.log("ERROR: ", e);
        alert("Failed to SignUp, Check Entries...");
      });
  };
  //   temp = (a) => {
  //     this.state.a: e.target.value;
  //   };
  //   changeddd = (e) => {
  //     this.temp(e.target.name);
  //     // this.setState({ name: e.target.value });
  //   };
  changed = (e) => {
    if (e.target.name == "name") {
      this.setState({ name: e.target.value });
    } else if (e.target.name == "email") {
      this.setState({ email: e.target.value });
    } else this.setState({ password: e.target.value });
    //console.log(this.state);
  };
  //   changedd = (e) => {
  //     this.setState({ password: e.target.value });
  //   };

  //t = event.target.value;

  abc = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={this.abc} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => this.changed(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => this.changed(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => this.changed(e)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              style={{ marginTop: "20px" }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.clicked}
            >
              Sign Up
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    );
  }
}
