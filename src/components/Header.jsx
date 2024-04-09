import React from 'react';
import { Navbar, Nav, NavLink, Container } from 'react-bootstrap';
import logo from '../assets/images/logo.webp';
import '../assets/style/header.css';

function Header() {
    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="Logo" className="logo" />
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
