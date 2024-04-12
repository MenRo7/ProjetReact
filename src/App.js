import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DishDetails from './pages/DishDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (dish) => {
        setCart([...cart, dish]);
    };

    return (
        <>
            <Routes>
                <Route element={<Layout cart={cart} />}>
                    <Route index element={<Home />} />
                    <Route path="plat/:slug" element={<DishDetails addToCart={addToCart} />} /> 
                    <Route path="about" element={<About />} />
                    <Route path="cart" element={<Cart cart={cart} />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
