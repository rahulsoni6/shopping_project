import React, { Component } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Backdrop from "./Backdrop";
import Select from "@material-ui/core/Select";
import Buttonx from "@material-ui/core/Button";
import { Link } from "react-router-dom";
// import { arr } from "./AddProducts";
let x = localStorage.getItem("uid");
let arr = [];
let dddata;
let fff;
let tempobj = [];
console.log(arr);
let createcategory;
let o;
// let createcategory = { name: this.state.category };

class Adminpanel extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/categories")
      .then((data) => {
        //console.log(data.data[0].name);
        arr = [...data.data];
        tempobj = [...data.data];
        this.setState({ aray: arr });
        // localStorage.setItem("uid", data.data.user._id);
        // localStorage.setItem("token", data.data.token);
      })
      .catch((e) => console.log("ERROR: ", e));
  }
  state = {
    aray: arr,
    toggle: true,
    name: null,
    togglee: true,
    category: null,
    catename: tempobj,
    toggleee: true,
    removetoggle: true,
    deletetoggle: true,
  };
  cateinput = (e) => {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
    createcategory = { name: e.target.value };
    console.log(createcategory);
  };
  categoryupdatefield = (e) => {
    // category + e.target.value;
    let t = e.target.value;
    this.setState({ catename: t });
    console.log(e.target.value);
  };
  togglevalue = () => {
    this.setState({ toggle: false });
  };
  changedtoggleee = () => {
    let index = arr.findIndex((i) => i.name == this.state.category);
    let indexid = arr[index]._id;
    arr[index].name = this.state.catename;
    o = { name: this.state.catename };
    axios
      .put(
        `http://localhost:8000/api/category/${indexid}/6040be789b752b3d90937d7e/`,
        o,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQwYmU3ODliNzUyYjNkOTA5MzdkN2UiLCJpYXQiOjE2MTQ5NDY2NjN9.wk3pUdkBBUfIvt59Ko6u_0ZLZkSRs9eItqzWm1Wrzec",
          },
        }
      )
      .then((data) => {
        console.log(data.data);
      })
      .catch((e) => console.log("Error", e));
    alert("Category Successfully Updated...");
    this.setState({ aray: arr });
    this.setState({ togglee: true, toggleee: true });
  };
  changed = () => {
    axios
      .post(`http://localhost:8000/api/create/category/${x}`, createcategory, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((data) => {
        console.log(data.data);
      })
      .catch((e) => console.log("Error", e));
    alert("Category Successfully Created..");
    this.setState({ toggle: true });
  };
  changedd = (e) => {
    if (e.target.name == "category") {
      this.setState({ category: e.target.value });
      this.setState({ catename: e.target.value });
      this.setState({ toggleee: false });
    }
  };
  removechange = (e) => {
    if (e.target.name == "category") {
      this.setState({ category: e.target.value });
      this.setState({ deletetoggle: false });
    }
  };
  updatecategory = () => {
    this.setState({ togglee: false });
    // console.log("hi", this.txt);
  };
  removecategory = () => {
    this.setState({ removetoggle: false });
    // console.log("hi", this.txt);
  };
  addproduct = () => {
    this.props.history.push("/add-products");
  };
  deletee = () => {
    let index = arr.findIndex((i) => i.name == this.state.category);
    let indexid = arr[index]._id;
    alert("Category Successfully Deleted...");
    this.setState({ deletetoggle: true });
    this.setState({ removetoggle: true });
    // console.log(index);
    axios
      .delete(
        `http://localhost:8000/api/category/${indexid}/6040be789b752b3d90937d7e`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQwYmU3ODliNzUyYjNkOTA5MzdkN2UiLCJpYXQiOjE2MTQ5NDY2NjN9.wk3pUdkBBUfIvt59Ko6u_0ZLZkSRs9eItqzWm1Wrzec",
          },
        }
      )
      .then((data) => {
        console.log(data.data);
      })
      .catch((e) => console.log("Error", e));
  };

  //   if (this.state.toggle == "true") {
  //     return <h1>okkkkkk</h1>;
  //   }
  render() {
    console.log(this.state.catename);
    console.log(this.state.aray);
    dddata = this.state.aray.map((i) => {
      return <MenuItem value={i.name}>{i.name}</MenuItem>;
    });
    fff = tempobj.map((i) => {
      return <h3>{i.name} </h3>;
    });
    // console.log(this.state.aray[0]);
    return (
      <div>
        <h1>This is Admin Panel......</h1>
        <Button variant="outline-dark" onClick={this.togglevalue}>
          Create Category
        </Button>
        <Button
          variant="outline-dark"
          style={{ margin: "10px" }}
          onClick={this.updatecategory}
        >
          Update Category
        </Button>
        <Button
          variant="outline-dark"
          style={{ margin: "10px" }}
          onClick={this.removecategory}
        >
          Remove Category
        </Button>

        <Link className="linkclass" to="/add-products">
          <Button variant="outline-dark">Add Products</Button>
        </Link>
        <Link
          style={{ margin: "10px" }}
          className="linkclass"
          to="/deleteproduct"
        >
          <Button variant="outline-dark">Delete Product</Button>
        </Link>

        <div>
          <TextField
            //hidden={this.state.toggle ? this.setState({ toggle: false }) : null}
            hidden={this.state.toggle}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="category"
            label=" Create Category"
            name="categorry"
            autoFocus
            style={{ width: "40%" }}
            onChange={(e) => this.cateinput(e)}
            //   disabled={this.state.disabled ? "disabled" : ""}
            //   onClick={this.clickedd.bind(this)}
          />
        </div>
        <div>
          <Select
            id="select"
            select
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="category"
            label="category"
            id="category"
            style={{ width: "40%" }}
            hidden={this.state.togglee}
            onChange={(e) => this.changedd(e)}
          >
            {dddata}
          </Select>
          <Select
            id="select"
            select
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="category"
            label="category"
            id="category"
            style={{ width: "40%" }}
            hidden={this.state.removetoggle}
            onChange={(e) => this.removechange(e)}
          >
            {dddata}
          </Select>
        </div>
        <div>
          <Buttonx
            hidden={this.state.toggle}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "20px", width: "40%" }}
            onClick={this.changed}
          >
            Submit
          </Buttonx>
        </div>
        <div>
          <TextField
            //hidden={this.state.toggle ? this.setState({ toggle: false }) : null}
            hidden={this.state.toggleee}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="category"
            label="Selected Category"
            name="categorry"
            value={this.state.catename}
            autoFocus
            style={{ width: "40%" }}
            onChange={(e) => this.categoryupdatefield(e)}
            //   disabled={this.state.disabled ? "disabled" : ""}
            //   onClick={this.clickedd.bind(this)}
          />
        </div>
        <div>
          <Buttonx
            hidden={this.state.toggleee}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "20px", width: "40%" }}
            onClick={this.changedtoggleee}
          >
            Submit
          </Buttonx>
          <Buttonx
            hidden={this.state.deletetoggle}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "20px", width: "40%" }}
            onClick={this.deletee}
          >
            Delete
          </Buttonx>
        </div>
        {/* <Backdrop /> */}
        {/* <PaginationLink /> */}
        {/* <div>{fff}</div> */}
      </div>
    );
  }
}

export default Adminpanel;
