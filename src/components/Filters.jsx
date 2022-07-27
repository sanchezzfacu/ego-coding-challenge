import React from 'react'
import '../css/Filters.css'
function Filters({filterListWithButtonsBy, filterListWithSelectBy}) {
    return (
        <section className='filters-container'>
            <div className='bttns-filters'>
                <label>Filtrar por</label> 
                <button onClick={filterListWithButtonsBy} value=''>Todos</button> 
                <button onClick={filterListWithButtonsBy} value='1'>Autos</button> 
                <button onClick={filterListWithButtonsBy} value='3'>Pickups y Comerciales</button> 
                <button onClick={filterListWithButtonsBy} value='4'>SUVs y Crossovers</button>
            </div>

            <select onChange={filterListWithButtonsBy} className='select-filters-type'>
                <option value='' hidden>Filtrar por</option>
                <option value=''>Todos</option> 
                <option value='1'>Autos</option> 
                <option value='3'>Pickups y Comerciales</option> 
                <option value='4'>SUVs y Crossovers</option>
            </select>

            <select onChange={filterListWithSelectBy} className='select-filters-year-price'>
                <option value='' hidden>Ordenar por</option>
                <option value='none'>Nada</option>
                <option value="lowestToHighest">De menor a mayor precio</option>
                <option value="highestToLowest">De mayor a menor precio</option>
                <option value="newestFirst">Más nuevos primeros</option>
                <option value="oldestFirst">Más viejos primeros</option>
            </select>
        </section>
    ) 
}

export default Filters
