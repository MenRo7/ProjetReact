import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import dishesData from '../datas/dishes.json';
import NotFound from './NotFound';

const DishDetails = ({ addToCart }) => {
    const { slug } = useParams();
    const [dish, setDish] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const foundDish = dishesData.dishes.find(d => d.slug === slug);
        if (foundDish) {
            setDish(foundDish);
        } else {
            setNotFound(true);
        }
    }, [slug]);

    const handleAddToCart = () => {
        addToCart({ ...dish, quantity });
    };
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
                        <div>
                            <label>Quantité:</label>
                            <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                        </div>
                        <Button className="my-3" variant="primary" onClick={handleAddToCart}>Ajouter au panier</Button>
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
