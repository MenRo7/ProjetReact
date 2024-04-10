import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Dish from '../components/Dish';

const Home = () => {
    const [showNewOnly, setShowNewOnly] = useState(false);

    const handleShowNewOnly = () => {
        setShowNewOnly(!showNewOnly);
    };

    const dishes = [
        {
            name: "Tacos à l'unité",
            price: "3",
            img: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
            slug: "tacos",
            isNew: true
        },
        {
            name: "Enchiladas",
            price: "12",
            img: "https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
            slug: "enchiladas",
            isNew: false
        },
        {
            name: "Mole Poblano",
            price: "15",
            img: "https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
            slug: "mole-poblano",
            isNew: false
        }
    ];

    const filteredDishes = showNewOnly ? dishes.filter(dish => dish.isNew) : dishes;

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
                {filteredDishes.map((dish, index) => (
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
