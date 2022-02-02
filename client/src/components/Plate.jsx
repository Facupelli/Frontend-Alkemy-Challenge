import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const plateMock = {
  id: 716429,
  title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
  image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
  imageType: "jpg",
  servings: 2,
  readyInMinutes: 45,
  license: "CC BY-SA 3.0",
  sourceName: "Full Belly Sisters",
  sourceUrl:
    "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
  spoonacularSourceUrl:
    "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
  aggregateLikes: 209,
  healthScore: 19.0,
  spoonacularScore: 83.0,
  pricePerServing: 163.15,
  analyzedInstructions: [],
  cheap: false,
  creditsText: "Full Belly Sisters",
  cuisines: [],
  dairyFree: false,
  diets: [],
  gaps: "no",
  glutenFree: false,
  instructions: "",
  ketogenic: false,
  lowFodmap: false,
  occasions: [],
  sustainable: false,
  vegan: false,
  vegetarian: false,
  veryHealthy: false,
  veryPopular: false,
  whole30: false,
  weightWatcherSmartPoints: 17,
  dishTypes: ["lunch", "main course", "main dish", "dinner"],
};

export const Palte = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
