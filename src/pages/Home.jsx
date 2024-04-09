import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Dish from '../components/Dish';


const Home = () => {
    return (
        <>
            <Container>
                <Row className="dish-container">
                    <Col>
                        <Dish
                            name="Tacos à l'unité"
                            price="3"
                            img="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
                        />
                    </Col>
                    <Col>
                        <Dish
                            name="Enchiladas"
                            price="12"
                            img="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
                        />
                    </Col>
                    <Col>
                        <Dish
                            name="Mole Poblano"
                            price="15"
                            img="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;