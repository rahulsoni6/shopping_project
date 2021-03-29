/* eslint-disable no-loop-func */
import React, { Component } from "react";
import ProductList from "./Product";
import { connect } from "react-redux";
import axios from "../../node_modules/axios";
import * as actions from "../actions/actions";
import { searcharr } from "../App";
// import fs from "../../"
let pro;
let exportarr = [];
let arr = [];
let prod = [];
let tr = true;
localStorage.setItem("photoid", "6042f2a271143a347879fb11");
class Productrender extends Component {
  // componentDidUpdate() {
  //   if (tr === "true") {
  //     prod = { ...this.props.productrenderarr };
  //     console.log(prod);
  //   }
  // }

  componentDidMount() {
    this.props.productrender();
    console.log("1", this.props.productrenderarr);
    pro = this.props.productrenderarr.map((p) => {
      return (
        <ProductList
          name={p.name}
          price={p.price}
          src={p.src}
          description={p.description}
          added={() => {
            this.added(p.name, p.price, p.src, p.description);
          }}
        />
      );
    });
  }
  // componentDidMount() {
  //   axios
  //     .get("http://localhost:8000/api/products")
  //     .then((data) => {
  //       //console.log(data.data[0].name);
  //       // for(let i in )
  //       arr = [...data.data];
  //       this.setState({ array: arr });
  //       for (let u of this.state.array) {
  //         axios
  //           .get(`http://localhost:8000/api/product/photo/${u._id}`)
  //           .then((res) => {
  //             // console.log(res);
  //             u.url = res.config.url;
  //             // console.log(arr);
  //             this.setState({ array: arr });
  //             product.push(res.config.url);
  //             this.setState({ product: product });
  //           })
  //           .catch((e) => console.log("ERROR: ", e));
  //       }
  //       // localStorage.setItem("uid", data.data.user._id);
  //       // localStorage.setItem("token", data.data.token);
  //     })
  //     .catch((e) => console.log("ERROR: ", e));
  // }
  state = {
    array: arr,
    product: [],
  };
  added = (id, price, src, description) => {
    alert("Successfully added to cart");
    exportarr.push({
      name: id,
      price: price,
      src: src,
      description: description,
      count: 1,
    });
  };
  render() {
    // console.log("2 hey", this.props.productrenderarr);
    // console.log(searcharr);
    pro = this.props.productrenderarr.map((p) => {
      return (
        <ProductList
          name={p.name}
          price={p.price}
          src={p.src}
          description={p.description}
          added={() => {
            this.added(p.name, p.price, p.src, p.description);
          }}
        />
      );
    });
    // if (searcharr === undefined) {
    //   pro = this.state.array.map((p) => {
    //     return (
    //       <ProductList
    //         name={p.name}
    //         price={p.price}
    //         src={p.url}
    //         description={p.description}
    //         added={() => {
    //           this.added(p.name, p.price, p.url, p.description);
    //         }}
    //       />
    //     );
    //   });
    // } else {
    //   pro = searcharr.map((p) => {
    //     return (
    //       <ProductList
    //         name={p.name}
    //         price={p.price}
    //         src={p.src}
    //         description={p.description}
    //         added={() => {
    //           this.added(p.name, p.price, p.src, p.description);
    //         }}
    //       />
    //     );
    //   });
    // }

    // this.state.product
    // this.state.product.map((p) => {
    //   return (
    //     <ProductList
    //       name={p.name}
    //       price={p.price}
    //       src={p.src}
    //       description={p.description}
    //       added={() => {
    //         this.added(p.name, p.price, p.src, p.description);
    //       }}
    //     />
    //   );
    // });
    return (
      <div>
        <div>{pro}</div>
        {/* <div>{this.state.product}</div> */}
        {/* <div>
      <PaginationLink />
    </div> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  productrenderarr: state.productrender,
});
const mapDispatchToProps = (dispatch) => ({
  productrender: () => dispatch(actions.productRenderReq()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Productrender);
export { arr };
export { exportarr };
