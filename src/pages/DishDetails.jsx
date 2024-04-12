import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import dishesData from '../datas/dishes.json';
import NotFound from './NotFound';

const DishDetails = () => {
    const { slug } = useParams();
    const [dish, setDish] = useState(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const foundDish = dishesData.dishes.find(d => d.slug === slug);
        if (foundDish) {
            setDish(foundDish);
        } else {
            setNotFound(true);
        }
    }, [slug]);

    if (notFound) {
        return <NotFound />;
    }

    return (
        <Container>
            {dish ? (
                <Row>
                    <Col>
                        <img className="mw-100" src={dish.img} alt={dish.name} />
                    </Col>
                    <Col>
                        <h1>{dish.name}</h1>
                        <p>{dish.description}</p>
                        <p>{dish.price}€</p>
                        <Button variant="primary">Commander</Button>
                    </Col>
                </Row>
            ) : (
                <Row>
                    <p>Aucun plat trouvé...</p>
                </Row>
            )}
        </Container>
    );
}

export default DishDetails;
