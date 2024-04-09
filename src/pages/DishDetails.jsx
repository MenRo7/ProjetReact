import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

const DishDetails = () => {
    const { slug } = useParams();
    return (
        <Container>
            <Row>
                <h1>Details du plat avec le slug : {slug}</h1>
            </Row>
        </Container>
    );
}

export default DishDetails;
