import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import { withRouter } from "react-router";

let email = "";
let pass = "";
class SignIn extends Component {
  state = {
    username: "",
    password: "",
  };
  componentDidMount() {
    console.log(this.props);
  }
  // classes = useStyles();
  // clicked = () => {
  //   // const email = document.getElementById("email");
  //   axios
  //     .post("http://localhost:8000/api/signin/", {
  //       email: this.state.username,
  //       password: this.state.password,
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       localStorage.setItem("uid", data.data.user._id);
  //       localStorage.setItem("token", data.data.token);
  //       alert("Logged in Successfully...");
  //       this.props.history.push("/productrender");
  //     })
  //     .catch((e) => {
  //       console.log("ERROR: ", e);
  //       alert("Failed to login, check credentials...");
  //     });
  // };

  changed = (e) => {
    this.setState({ username: e.target.value });
    email = e.target.value;
  };
  changedd = (e) => {
    this.setState({ password: e.target.value });
    pass = e.target.value;
  };

  //t = event.target.value;

  abc = (e) => {
    this.props.history.push("/productrender");
    e.preventDefault();
  };
  render() {
    // console.log(this.state);
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Sign in
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

            <Button
              style={{ marginTop: "20px" }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.props.clicked}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to="/signup">Don't have an account? Sign Up</NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    );
  }
}
export { email, pass };
export default withRouter(SignIn);
// import React, { Component } from "react";

// export default class Login extends Component {
//   render() {
//     return (
//       <form>
//         <h3>Log in</h3>

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>

//         <div className="form-group">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>

//         <button type="submit" className="btn btn-dark btn-lg btn-block">
//           Sign in
//         </button>
//         <p className="forgot-password text-right">
//           Forgot <a href="#">password?</a>
//         </p>
//       </form>
//     );
//   }
// }
