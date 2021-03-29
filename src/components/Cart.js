// import React from "react";
// import { exportarr } from "./Productrender";
// import ProductList from "./Product";
// import PaginationLink from "./Pagination";
// import Backdrop from "./Backdrop";
// console.log(exportarr);
// const Cart = () => {
//   let pro = exportarr.map((p) => {
//     return (
//       <ProductList
//         name={p.name}
//         price={p.price}
//         description={p.description}
//         src={p.src}
//       />
//     );
//   });
//   return (
//     <div>
//       {pro}
//       <Backdrop />
//       {/* <PaginationLink /> */}
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import Cartproduct from "./Cartproduct";
import axios from "axios";
import { exportarr } from "./Productrender";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Cart = (props) => {
  let price = 0;
  for (let x of exportarr) {
    console.log(x.price);
    price += x.price;
  }
  let [totalprice, setpricee] = useState(price);
  console.log(totalprice);
  let pro = exportarr.map((p) => {
    return (
      <Cartproduct
        name={p.name}
        price={p.price}
        description={p.description}
        src={p.src}
        quantity={p.count}
        addd={() => {
          add(p.name);
        }}
        rem={() => {
          rem(p.name);
        }}
        remove={() => {
          remove(p.name);
        }}
      />
    );
  });

  // for (let x of exportarr) {
  //   console.log(x.price);
  //   totalprice = totalprice + x.price;
  // }
  console.log(exportarr);
  let rem = (name) => {
    let index = exportarr.findIndex((i) => name == i.name);
    exportarr[index].count -= 1;
    setquantity(exportarr[index].count);
    totalprice = totalprice - exportarr[index].price;
    setpricee(totalprice);
    pro = exportarr.map((p) => {
      return (
        <Cartproduct
          name={p.name}
          price={p.price}
          description={p.description}
          src={p.src}
          quantity={p.count}
          addd={() => {
            add(p.name);
          }}
          rem={() => {
            rem(p.name);
          }}
          remove={() => {
            remove(p.name);
          }}
        />
      );
    });
    setcart(pro);
  };
  let add = (name) => {
    let index = exportarr.findIndex((i) => name == i.name);
    exportarr[index].count += 1;
    setquantity(exportarr[index].count);
    console.log(totalprice);
    totalprice = totalprice + exportarr[index].price;
    setpricee(totalprice);
    console.log(totalprice);
    // let curprice = exportarr[index].price
    // setpricee();
    // price = price + exportarr[index].price;
    // console.log(price);
    pro = exportarr.map((p) => {
      return (
        <Cartproduct
          name={p.name}
          price={p.price}
          description={p.description}
          src={p.src}
          quantity={p.count}
          addd={() => {
            add(p.name);
          }}
          rem={() => {
            rem(p.name);
          }}
          remove={() => {
            remove(p.name);
          }}
        />
      );
    });
    setcart(pro);
  };
  const [count, setquantity] = useState(1);
  const [cart, setcart] = useState(pro);
  console.log(exportarr);
  let remove = (name) => {
    let index = exportarr.findIndex((id) => name == id.name);
    totalprice = totalprice - exportarr[index].price * exportarr[index].count;
    exportarr.splice(index, 1);
    setpricee(totalprice);
    pro = exportarr.map((p) => {
      return (
        <Cartproduct
          name={p.name}
          price={p.price}
          description={p.description}
          src={p.src}
          quantity={p.count}
          addd={() => {
            add(p.name);
          }}
          remove={() => {
            remove(p.name);
          }}
        />
      );
    });
    setcart(pro);
    console.log(exportarr);
  };
  let postorder = () => {
    let nar1 = [];
    for (let i of exportarr) {
      nar1.push({ name: i.name, count: i.count, price: i.price });
    }
    let orderobj = {
      products: nar1,
      amount: totalprice,
      user: localStorage.getItem("uid"),
    };
    axios
      .post(
        `http://localhost:8000/api/order/create/${localStorage.getItem("uid")}`,
        { order: orderobj },
        {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
            // `Bearer + ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((data) => {
        console.log(data);
        alert("Order Placed Successfully....!!");
      });
  };

  return (
    <div>
      {cart}
      <div className="mt-5">
        <div className="bg-light p-4 w-50 m-auto">
          <div className="row">
            <div className="col-sm-6 text-right">
              <h1>Total Amount : ₹</h1>
            </div>
            <div className="col-sm-6 text-left">
              <h1>{totalprice}</h1>
            </div>
          </div>
          <div
            className="btn btn-primary w-75 text-center mt-5 mr-5 "
            style={{ fontSize: "20px " }}
            onClick={postorder}
          >
            Place order
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
