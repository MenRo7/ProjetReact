import React from "react";

function Plate({ name, price, img }) {
    return (
        <div>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{price} €</p>
        </div>
    )
}

export default Plate;