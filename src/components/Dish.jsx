import React from "react";
import { Card } from 'react-bootstrap';
import '../assets/style/dish.css';

function Dish({ name, price, img }) {
    return (
        <Card className="dish-card">
            <Card.Img src={img} className="dish-img" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{price} €</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Dish;
