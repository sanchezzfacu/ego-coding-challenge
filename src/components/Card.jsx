import React from 'react'
import '../css/Card.css'

function Card({name, year, price, img}) {
    // if(price.toString().length >= 4 && price.toString().length <= 6) { //4 to 6 digit numbers price

    // }
    return (
        <div className='card'>
            <h2>{name}</h2>
            <h4>{year + ' | $ ' + price}</h4>
            <img src={img} alt="" />
        </div>
    )
}

export default Card
