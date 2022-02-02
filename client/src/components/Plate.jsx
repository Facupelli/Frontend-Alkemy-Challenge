import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const plateMock = {
  id: 654959,
  title: "Pasta With Tuna",
  image: "https://spoonacular.com/recipeImages/654959-312x231.jpg",
  imageType: "jpg",
};

export const Plate = ({image, title}) => {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="text-dark">{title}</Card.Title>
        <Card.Text className="text-dark">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
  );
};
