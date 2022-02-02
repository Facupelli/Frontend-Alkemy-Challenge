import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Plate = ({ image, title, search,id }) => {
  return (
    <Card style={{ width: "15rem" }}>
      <Link to={`/recipe/${id}`}>
        <Card.Img
          variant="top"
          src={image}
          className="img-fluid"
          alt="Card image"
        />
      </Link>
      <Card.Body>
        <Card.Title className="text-dark">{title}</Card.Title>
        {/* <Button variant="primary" className="">
          See more
        </Button> */}
        {search && (
          <Button variant="primary" className="">
            Add to Menu
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
