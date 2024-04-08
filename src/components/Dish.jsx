import React from "react";

function Dish({ name, price, img }) {
    return (
        <div>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{price} €</p>
        </div>
    )
}

export default Dish;