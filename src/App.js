import React from 'react';
import './assets/style/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Dish from './components/Dish';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Container>
          <Row className="dish-container">
            <Col md={4}>
              <Dish
                name="Tacos à l'unité"
                price="3"
                img="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
              />
            </Col>
            <Col md={4}>
              <Dish
                name="Enchiladas"
                price="12"
                img="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
              />
            </Col>
            <Col md={4}>
              <Dish
                name="Mole Poblano"
                price="15"
                img="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
