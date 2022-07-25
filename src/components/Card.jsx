import React from 'react'

function Card({name, year, price, img}) {
    return (
        <div>
            <h2>{name}</h2>
            <h4>{year}</h4>
            <h4>{price}</h4>
            <img src={img} alt="" />
        </div>
    )
}

export default Card
