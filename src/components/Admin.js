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
import { Redirect } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
// import { useHistory } from "react-router";
let x = localStorage.getItem("uid");
console.log(x);
export default class Admin extends Component {
  state = {
    username: "",
    password: "",
  };
  componentDidMount() {
    console.log(this.props);
  }
  // classes = useStyles();
  clicked = () => {
    // const email = document.getElementById("email");
    axios
      .post("http://localhost:8000/api/signin/", {
        email: this.state.username,
        password: this.state.password,
      })
      .then((data) => {
        console.log(data.data.user._id);
        if (
          data.data.user.role == 1
          // this.state.username == "djjj@gmail.com" &&
          // this.state.password == "Abc@123"
        ) {
          alert("Welcome Admin");
          this.props.history.push("/adminpanel");
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("uid", data.data.user._id);
        } else {
          alert("Check Credentials...");
        }
      })
      .catch((e) => {
        console.log("ERROR: ", e);
        alert("Failed to login, check credentials...");
      });
    // if (
    //   x === "6040be789b752b3d90937d7e" &&
    //   this.state.username == "djjj@gmail.com" &&
    //   this.state.password == "Abc@123"
    // ) {
    //   //   <Alert variant="success">Hiiii.....</Alert>;
    //   //   <Alert variant="primary">This is a alert—check it out!</Alert>;
    //   alert("Welcome Admin");
    //   this.props.history.push("/adminpanel");
    //   //   <Redirect to="/products" />;
    // } else alert("Failed to login");
  };

  changed = (e) => {
    this.setState({ username: e.target.value });
  };
  changedd = (e) => {
    this.setState({ password: e.target.value });
  };
  // console.log(this.state);
  //t = event.target.value;

  abc = (e) => {
    e.preventDefault();
  };
  render() {
    // console.log(this.state);

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Admin Sign In
          </Typography>
          <form onSubmit={this.abc} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
              onChange={(e) => this.changedd(e)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.clicked}
              style={{ marginTop: "20px" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
                </Link>
            </Grid> */}
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    );
  }
}
