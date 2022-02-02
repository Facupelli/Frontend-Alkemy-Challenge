import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const plateMock = {
  id: 654959,
  title: "Pasta With Tuna",
  image: "https://spoonacular.com/recipeImages/654959-312x231.jpg",
  imageType: "jpg",
};

export const Plate = ({ image, title }) => {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img
        variant="top"
        src={image}
        className="img-fluid"
        alt="Card image"
      />
      <Card.Body>
        <Card.Title className="text-dark">{title}</Card.Title>
        <Button variant="primary" className="">
          See more
        </Button>
      </Card.Body>
    </Card>
  );
};
