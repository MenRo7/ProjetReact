import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Dish from '../components/Dish';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Container>
                <Row className="dish-container">
                    <Col>
                        <Link to="/tacos">
                            <Dish
                                name="Tacos à l'unité"
                                price="3"
                                img="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
                            />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/enchiladas">
                            <Dish
                                name="Enchiladas"
                                price="12"
                                img="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
                            />
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/mole-poblano">
                            <Dish
                                name="Mole Poblano"
                                price="15"
                                img="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
                            />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;
