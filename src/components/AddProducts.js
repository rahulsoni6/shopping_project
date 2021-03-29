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
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Container from "@material-ui/core/Container";
import axios from "../../node_modules/axios";
import Select from "@material-ui/core/Select";
let arr = [];
let dddata;
let xyz;
export default class AddProducts extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/categories")
      .then((data) => {
        //console.log(data.data[0].name);
        arr = [...data.data];
        this.setState({ aray: arr });
        // localStorage.setItem("uid", data.data.user._id);
        // localStorage.setItem("token", data.data.token);
      })
      .catch((e) => console.log("ERROR: ", e));
  }
  state = {
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    photo: null,
    aray: arr,
  };
  clicked = () => {
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("description", this.state.description);
    data.append("price", this.state.price);
    data.append("stock", this.state.stock);
    data.append("category", this.state.category);
    data.append("photo", this.state.photo);
    axios
      .post(`http://localhost:8000/api/product/create/${xyz}`, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => {
        if (data.status == 200) {
          alert("Product Added Successfully...");
          this.props.history.push("/adminpanel");
        }

        console.log(data);
      })
      .catch((e) => console.log("ERROR: ", e));
  };

  changedd = (e) => {
    if (e.target.name == "category") {
      this.setState({ category: e.target.value });
    }
  };
  onFileChange = (e) => {
    if (e.target.name == "photo") {
      this.setState({ photo: e.target.files[0] });
    }
  };

  changed = (e) => {
    if (e.target.name == "name") {
      this.setState({ name: e.target.value });
    } else if (e.target.name == "description") {
      this.setState({ description: e.target.value });
    } else if (e.target.name == "price") {
      this.setState({ price: e.target.value });
    } else if (e.target.name == "stock") {
      this.setState({ stock: e.target.value });
    } else if (e.target.name == "category") {
      this.setState({ category: e.target.value });
    } else this.setState({ photo: e.target.value });
  };
  abc = (e) => {
    e.preventDefault();
  };
  render() {
    xyz = localStorage.getItem("uid");
    // console.log(this.state.category);
    // console.log(arr);

    dddata = arr.map((i) => {
      return <MenuItem value={i._id}>{i.name}</MenuItem>;
    });
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Add Product
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
              id="description"
              label="Description"
              name="description"
              onChange={(e) => this.changed(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="price"
              label="price"
              id="price"
              onChange={(e) => this.changed(e)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="stock"
              label="stock"
              id="stock"
              onChange={(e) => this.changed(e)}
            />
            <Select
              id="select"
              select
              displayEmpty
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="category"
              label="category"
              id="category"
              onChange={(e) => this.changedd(e)}
            >
              {dddata}
            </Select>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="photo"
              id="photo"
              type="file"
              onChange={this.onFileChange}
            />
            <div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: "20px " }}
                onClick={this.clicked}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}
export { arr };
