import React from 'react';
import { useCart } from '../utils/context/CartContext';

const Cart = () => {
    const { cart } = useCart();

    return (
        <div className="container">
            <h1 className="text-center">Panier</h1>
            {cart.length === 0 ? (
                <p>Votre panier est vide</p>
            ) : (
                <table className="table table-bordered table-striped mx-auto">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Quantité</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}€</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Cart;
