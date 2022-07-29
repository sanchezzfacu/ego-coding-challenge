import React from 'react'
import '../css/Card.css'

function Card({name, year, price, img, id}) {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <h4>{year + ' | $ ' + price}</h4>
            <img src={img} alt="" />
            <a href={'details/' + id}>
                <button>Ver Modelo</button>
            </a>
        </div>
    )
}

export default Card
