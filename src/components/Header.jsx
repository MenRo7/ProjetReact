import React from 'react';
import { Navbar, Nav, NavLink, Container } from 'react-bootstrap';
import '../assets/style/header.css';

function Header() {
    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <img src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png" alt="Logo" className="logo" />
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <NavLink exact to="/">Accueil</NavLink>
                            <NavLink to="/about">À propos</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
        </header>
    );
}

export default Header;
