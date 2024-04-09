import React from "react";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/style/dish.css';

const Dish = ({ name, price, img, to }) => {
    return (
        <Link to={to} className="dish-link">
            <Card className="dish-card">
                <Card.Img src={img} className="dish-img" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{price} €</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Dish;
