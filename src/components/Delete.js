import React, { Component } from "react";
import axios from "axios";
import Deleteproduct from "./Deleteproduct";
import { arr } from "./Productrender";
import Productdelete from "./Deleteproduct";
let PrintPr = "";
let product = [];
let a = [];
class Delete extends Component {
  state = {
    print: PrintPr,
  };
  delete = (id) => {
    let index = product.findIndex((i) => i.id == id);
    console.log(id);
    axios
      .delete(
        `http://localhost:8000/api/product/${id}/6040be789b752b3d90937d7e`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => console.log(res));
    product.splice(index, 1);
    PrintPr = product.map((p) => {
      return (
        <Productdelete
          name={p.name}
          src={p.src}
          price={p.price}
          remove={() => {
            this.delete(p.id);
          }}
        ></Productdelete>
      );
    });
    this.setState({ print: PrintPr });
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/api/products")
      .then((data) => {
        console.log(arr);

        for (let cat of arr) {
          product.push({
            name: cat.name,
            src: cat.url,
            price: cat.price,
            id: cat._id,
            quant: 1,
          });
        }
        console.log(product);
        PrintPr = product.map((p) => {
          return (
            <Productdelete
              name={p.name}
              src={p.src}
              price={p.price}
              remove={() => {
                this.delete(p.id);
              }}
            ></Productdelete>
          );
        });
        this.setState({ print: PrintPr });
      })
      .catch((e) => console.log("ERROR: ", e));
  }
  render() {
    return <div>{this.state.print}</div>;
  }
}
export default Delete;
