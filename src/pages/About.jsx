import React from "react";
import { Container, Row } from "react-bootstrap";

const About = () => {
    return (
        <Container>
            <Row>
                <h1>À propos</h1>
            </Row>
            <Row>
                <p>
                    Bienvenue dans notre restaurant mexicain, où l'authenticité et la saveur se rencontrent pour créer une
                    expérience culinaire inoubliable. Plongez dans un voyage gustatif à travers le Mexique avec notre menu
                    varié, mettant en vedette des plats traditionnels préparés avec amour et expertise.
                    Chaque bouchée est une explosion de saveurs, que ce soit avec nos tacos à l’unité, des enchiladas
                    généreusement garnies ou notre mole poblano exquis. Nous croyons en l'utilisation d'ingrédients frais
                    et de qualité pour créer des plats qui vous transportent directement au cœur de la cuisine mexicaine.
                    Que vous soyez un amateur de plats épicés ou que vous préfériez des saveurs plus douces, notre menu
                    offre quelque chose pour satisfaire toutes les papilles gustatives. Venez nous rejoindre pour une
                    expérience culinaire authentique et chaleureuse dans une ambiance conviviale et accueillante. ¡Buen
                    provecho!
                </p>
            </Row>
        </Container>

    );
}

export default About;