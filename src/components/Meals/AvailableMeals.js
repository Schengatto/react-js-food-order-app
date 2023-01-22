import React from "react";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: "1",
        name: "Pizza",
        description: "A delicious Italian dish made with dough, tomato sauce, cheese and other toppings.",
        price: 8.99,
    },
    {
        id: "2",
        name: "Burger",
        description: "A classic American dish made with a beef patty, bun, lettuce, tomato and other condiments.",
        price: 6.99,
    },
    {
        id: "3",
        name: "Tacos",
        description: "A Mexican dish made with a corn or flour tortilla filled with meat and vegetables.",
        price: 4.99,
    },
    {
        id: "4",
        name: "Pho",
        description: "A Vietnamese noodle soup made with broth, herbs and spices.",
        price: 9.99,
    },
    {
        id: "5",
        name: "Ramen",
        description: "A Japanese noodle soup made with broth and various toppings.",
        price: 7.99,
    },
    {
        id: "6",
        name: "Fried Rice",
        description: "An Asian dish made with cooked rice stir-fried in a wok or skillet.",
        price: 5.99,
    },
    {
        id: "7",
        name: "Sushi",
        description:
            "A Japanese dish made of cooked vinegared rice combined with other ingredients such as seafood or vegetables.",
        price: 11.99,
    },
    {
        id: "8",
        name: "Curry",
        description: "An Indian dish made of spices and herbs cooked in a sauce or gravy.",
        price: 10.99,
    },
    {
        id: "9",
        name: "Paella",
        description: "A Spanish dish made of saffron-flavored rice cooked with vegetables and seafood or meat.",
        price: 12.99,
    },
    {
        id: "10",
        name: "Lasagna",
        description:
            "An Italian layered pasta dish typically made of ground beef or pork between layers of pasta sheets and cheese sauce.",
        price: 8.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
    ));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;

// Create dummy meals array with 10 foods. Each meal should have id (string), name (string), description (string), price (number).
