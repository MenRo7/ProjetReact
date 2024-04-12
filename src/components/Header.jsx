import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import '../assets/style/header.css';
import { useCart } from '../utils/context/CartContext';

const Header = () => {
    const { cart } = useCart();
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        setCartItemCount(itemCount);
    }, [cart]);

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
                            <NavLink className="nav-link" to="/cart">
                                Panier 
                                <span className="cart-count"> ({cartItemCount})</span>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
