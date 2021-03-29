import logo from "./logo.svg";
import "./App.css";
import ProductList from "./components/Product";
import { arr } from "./components/Productrender";
import Cart from "./components/Cart";
import AddProducts from "./components/AddProducts";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Nav, FormControl } from "react-bootstrap";
import Drawer from "./components/Drawer";
import Select from "../node_modules/@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "../node_modules/axios";
import Shopping from "./components/Shopping";
import { Redirect } from "react-router-dom";
// import Carousel from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { email, pass } from "../src/components/Login";
import {
  Link,
  Route,
  Switch,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import { Component } from "react";
import { CgShoppingCart } from "react-icons/cg";
import InputLabel from "@material-ui/core/InputLabel";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Productrender from "./components/Productrender";
import Upload from "./components/Upload";
import Admin from "./components/Admin";
import Adminpanel from "./components/Adminpanel";
import Delete from "./components/Delete";
import { withRouter } from "react-router";
let arrnew = [];
let searcharr;
let dddata;
let email1 = "";
let pass1 = "";
class App extends Component {
  state = {
    aray: arrnew,
    hidden: false,
  };
  componentDidMount() {
    console.log(email);
    axios
      .get("http://localhost:8000/api/categories")
      .then((data) => {
        //console.log(data.data[0].name);
        arrnew = [...data.data];
        this.setState({ aray: arrnew });
        // localStorage.setItem("uid", data.data.user._id);
        // localStorage.setItem("token", data.data.token);
      })
      .catch((e) => console.log("ERROR: ", e));
  }
  cartcall = () => <Link to="/cart"></Link>;
  logout = () => {
    alert("you have been logged out");
    localStorage.removeItem("uid");
    localStorage.removeItem("token");
    this.setState({ hidden: false });
    this.props.history.push("/productrender");
  };
  clicked = () => {
    email1 = email;
    pass1 = pass;
    console.log(email);
    // const email = document.getElementById("email");
    axios
      .post("http://localhost:8000/api/signin/", {
        email: email1,
        password: pass1,
      })
      .then((data) => {
        // this.setState({ log: "Logout" });
        console.log("redirecting....");
        console.log(data);
        this.setState({ hidden: true });
        this.setState({ email1: null });
        this.setState({ pass1: null });
        localStorage.setItem("uid", data.data.user._id);
        localStorage.setItem("token", data.data.token);
        email1 = "";
        pass1 = "";
        // alert("Logged in Successfully...");
        // <Redirect to="/productrender" />;
        //
        // this.props.history.push("/productrender");
      })
      .catch((e) => {
        console.log("ERROR: ", e);
        alert("Failed to login, check credentials...");
      });
    // console.log("redirecting....");
    // this.props.history.push("/productrender");
    // <Redirect from="/login" to="/productrender/" />;
  };
  search = (e) => {
    this.setState({});
    let t = e.target.value;
    searcharr = [];
    for (let i of arr) {
      if (i.name.includes(t)) {
        searcharr.push({ name: i.name, id: i._id, price: i.price, src: i.url });
      }
    }
    console.log(searcharr);
  };

  dropdowncall = (e) => {
    console.log("selected", e);
    // console.log(x);
  };
  selectchange = (e) => {
    let t = e.target.value;
    console.log("select", t);
  };

  render() {
    // console.log(arr);
    dddata = arrnew.map((i) => {
      return <MenuItem value={i.name}>{i.name}</MenuItem>;
      // return <Dropdown.Item value={i.value}>{i.name}</Dropdown.Item>;
    });
    //console.log(dddata);
    return (
      <>
        <Router>
          <div className="App">
            <Navbar bg="dark" variant="dark">
              {/* <Drawer /> */}
              <div>
                <Navbar.Brand>
                  <Link to="/productrender"> E-Shopping</Link>
                </Navbar.Brand>
              </div>
              <div>
                <Button>
                  <InputLabel id="demo-simple-select-readonly-label">
                    Category
                  </InputLabel>
                  <Select
                    style={{ color: "white" }}
                    onChange={(e) => this.selectchange(e)}
                  >
                    <MenuItem value="Select">
                      <em>Select</em>
                    </MenuItem>
                    {dddata}
                  </Select>
                </Button>
              </div>
              <Nav className="mr-auto">
                <Nav.Link>
                  <NavLink
                    className="linkclass"
                    activeStyle={{
                      color: "black",

                      fontSize: "20px",
                    }}
                    to="/admin"
                  >
                    <div className="li"> Admin </div>
                  </NavLink>
                </Nav.Link>
              </Nav>
              <Nav className="headdiv">
                <div className="mt-1">
                  <DropdownButton
                    style={{ marginRight: "50px" }}
                    onSelect={(e) => this.dropdowncall(e)}
                    title="Categories"
                  >
                    {/* <Dropdown.Item value="1">All</Dropdown.Item> */}
                    {dddata}
                  </DropdownButton>
                </div>
                <Nav.Link></Nav.Link>
                <Form inline>
                  <FormControl
                    autoFocus
                    size="lg"
                    type="text"
                    placeholder="Search"
                    className="search mr-sm-2 "
                    onChange={this.search}
                  />
                  <Button variant="outline-info">Search</Button>
                </Form>
              </Nav>
              <Nav.Link>
                <Link className="linkclass" to="/login">
                  <div className="li" hidden={this.state.hidden}>
                    Login
                  </div>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="linkclass">
                  <div
                    className="li"
                    hidden={!this.state.hidden}
                    onClick={this.logout}
                  >
                    Logout
                  </div>
                </Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link className="linkclass" to="/signup">
                  <div className="li ">SignUp</div>
                </Link>
              </Nav.Link> */}
              {/* <div>
                <Nav.Link>
                  <Link className="linkclass" to="/add-products">
                    <div className="li ">Add Products</div>
                  </Link>
                </Nav.Link>
              </div> */}
              <Link to="/cart">
                <IconButton aria-label="add to shopping cart">
                  <AddShoppingCartIcon className="iconbutton" />
                  <span style={{ color: "white " }}>0</span>
                </IconButton>
              </Link>
              {/* <CgShoppingCart /> */}
            </Navbar>

            <Switch>
              {/* <Route exact path="/" component={ProductList} /> */}
              <Route exact path="/" component={Productrender} />
              <Route exact path="/shoppingcart" component={Shopping} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/adminpanel" component={Adminpanel} />
              <Route exact path="/login">
                <Login clicked={this.clicked} />
              </Route>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/add-products" component={AddProducts} />
              <Route exact path="/deleteproduct" component={Delete} />
              {/* <Route exact path="/add-products" component={Drawer} /> */}
              <Route exact path="/products" component={Home} />
              <Route exact path="/productrender" component={Productrender} />
              <Route exact path="/upload" component={Upload} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default withRouter(App);
export { searcharr };
