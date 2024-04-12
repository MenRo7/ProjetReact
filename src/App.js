import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DishDetails from './pages/DishDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { CartProvider } from './utils/context/CartContext';

function App() {
    return (
        <CartProvider>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="plat/:slug" element={<DishDetails />} />
                    <Route path="about" element={<About />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </CartProvider>
    );
}

export default App;
