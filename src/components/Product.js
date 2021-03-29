import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./ProductList.css";
const ProductList = (props) => {
  return (
    <div className="flex-container ml-5 mt-3 tt">
      <Card style={{ width: "18rem", margin: "14px" }} className="">
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title className="cardtitle">{props.name}</Card.Title>
          <Card.Text className="cardtext">{props.description}</Card.Text>
          <Card.Text className="cardprice">Price ₹:{props.price}</Card.Text>
          <Button variant="primary" onClick={props.added}>
            Add to Cart
          </Button>
          {/* <Button
            variant="danger"
            style={{ margin: "10px 10px 10px 10px" }}
            onClick={props.added}
          >
            Remove
          </Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductList;
