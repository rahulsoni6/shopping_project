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
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { exportarr } from "./Productrender";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Cartproduct = (props) => {
  //   let remove = () => {
  //     let index = exportarr.findindex((id) => {
  //       console.log(id);
  //     });
  //     exportarr.splice(index, 1);
  //     console.log(exportarr);
  //   };
  return (
    <div>
      <div className="mt-5">
        <div className="container bg-light w-75 mt-3 text-left p-3">
          <div className="row">
            <div className="col-sm-3">
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                className="text-left  img-fluid"
                src={props.src}
              />
            </div>
            <div className="col-sm-6 text-left">
              <h3>
                <strong>Name: </strong>
                {props.name}
              </h3>
              <br />
              <h3>
                <strong>Price : ₹{props.price}</strong>
              </h3>
              <br />
              <h3>
                <strong>Description: </strong>
                {props.description}
              </h3>
              <br />

              <Button
                variant="danger"
                className="w-25"
                style={{ padding: "7px 8px", fontSize: "18px" }}
                onClick={props.remove}
              >
                Remove Item
              </Button>
            </div>
            <div className="col-sm-3">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="text-center">
                      <RemoveIcon onClick={props.rem} />
                    </th>
                    <th className="text-center" style={{ fontSize: "19px" }}>
                      {props.quantity}
                    </th>
                    <th className="text-center">
                      <AddIcon onClick={props.addd} />
                    </th>
                  </tr>
                </thead>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartproduct;
