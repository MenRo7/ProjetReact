import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import '../assets/style/header.css';

const Header = () => {
    return (
        <header>
            <Navbar>
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="Logo" className="logo" />
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <NavLink className="nav-link" to="/">Accueil</NavLink>
                            <NavLink className="nav-link" to="/about">À propos</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
        </header>
    );
}

export default Header;
