import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./ProductList.css";
const Productdelete = (props) => {
  return (
    <div className="flex-container ml-5 mt-3 tt">
      <Card style={{ width: "18rem", margin: "14px" }} className="">
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title className="cardtitle">{props.name}</Card.Title>
          <Card.Text className="cardtext">{props.description}</Card.Text>
          <Card.Text className="cardprice">Price ₹:{props.price}</Card.Text>
          <Button variant="primary" onClick={props.remove}>
            Delete Product
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Productdelete;
