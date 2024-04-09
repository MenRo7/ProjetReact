import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../assets/style/header.css';

function Header() {
    return (
        <Navbar className='header'>
            <Navbar.Brand>
                <img src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png" alt="Logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Collapse>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/about">À propos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Accueil</a>
                    </li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
