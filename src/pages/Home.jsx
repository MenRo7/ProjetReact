import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Dish from '../components/Dish';
import dishesData from '../datas/dishes.json';

const Home = () => {
    const [showNewOnly, setShowNewOnly] = useState(false);
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const filterDishes = () => {
            const filteredDishes = showNewOnly ? dishesData.dishes.filter(dish => dish.isNew) : dishesData.dishes;
            setDishes(filteredDishes);
        };
        filterDishes();
    }, [showNewOnly]);

    const handleShowNewOnly = () => {
        setShowNewOnly(!showNewOnly);
    };

    return (
        <Container>
            <Row>
                <button onClick={handleShowNewOnly} className="text-center">
                    {showNewOnly ? 'Voir tous les plats' : 'Nouveautés uniquement'}
                </button>
            </Row>
            <Row>
                <h1 className="text-center">Nos plats</h1>
            </Row>
            <Row className="dish-container">
                {dishes.map((dish, index) => (
                    <Col key={index}>
                        <Dish
                            name={dish.name}
                            price={dish.price}
                            img={dish.img}
                            slug={dish.slug}
                            isNew={dish.isNew}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;
