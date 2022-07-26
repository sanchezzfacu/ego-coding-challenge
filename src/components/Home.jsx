import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import '../css/Filters.css'
import '../css/Home.css'

const modelListEndpoint =  'https://challenge.agenciaego.tech/api/models/'

function Home() {
    const [list, setList] = useState([])

    async function getList() {
        let info = await fetch(modelListEndpoint)
        let modelList = await info.json()
        setList(modelList)
    }

    async function filterListWithSelect(e) {
        if(e.target.value === 'lowestToHighest') {
            let info = await fetch(modelListEndpoint + '?ordering=price')
            let modelList = await info.json()
            setList(modelList)
        } else if(e.target.value === 'highestToLowest') {
            let info = await fetch(modelListEndpoint + '?ordering=-price')
            let modelList = await info.json()
            setList(modelList)
        } else if(e.target.value === 'newestFirst') {
            let info = await fetch(modelListEndpoint + '?ordering=year')
            let modelList = await info.json()
            setList(modelList)
        } else if(e.target.value === 'oldestFirst') {
            let info = await fetch(modelListEndpoint + '?ordering=-year')
            let modelList = await info.json()
            setList(modelList)
        }
    }

    async function filterListWithButtons(e) {
        if(e.target.value === '1') {
            let info = await fetch(modelListEndpoint + '?segment=1')
            let modelsFiltered = info.json()
            setList(modelsFiltered)
        } else if(e.target.value === '3'){
            let info = await fetch(modelListEndpoint + '?segment=3')
            let modelsFiltered = info.json()
            setList(modelsFiltered)
        }else if(e.target.value === '4'){
            let info = await fetch(modelListEndpoint + '?segment=4')
            let modelsFiltered = info.json()
            setList(modelsFiltered)
        } else if(e.target.value === '') {
            let info = await fetch(modelListEndpoint)
            let modelsFiltered = info.json()
            setList(modelsFiltered)
        }
    }

    useEffect(() => {
        getList()
    }, [])
    return (
        <div>
            <Navbar/>

            <h1 className='discover-all-models'>Descubrí todos los modelos</h1>

            <section className='filters-container'>
                <div className='bttns-filters'>
                    Filtrar por 
                    <button onClick={filterListWithButtons} value=''>Todos</button> 
                    <button onClick={filterListWithButtons} value='1'>Autos</button> 
                    <button onClick={filterListWithButtons} value='3'>Pickups y Comerciales</button> 
                    <button onClick={filterListWithButtons} value='4'>SUVs y Crossovers</button>
                </div>
                <select onChange={filterListWithSelect} className='select-filters'>
                    <option value='' hidden>Ordenar por</option>
                    <option value={null}>Nada</option>
                    <option value="lowestToHighest">De menor a mayor precio</option>
                    <option value="highestToLowest">De mayor a menor precio</option>
                    <option value="newestFirst">Más nuevos primeros</option>
                    <option value="oldestFirst">Más viejos primeros</option>
            </select>

            </section>
            <div className='card-wrapper'>
            {
                list?.map(el => {
                    return (
                        <div key={el.id}>
                            <Card name={el.name} year={el.year} price={el.price} img={el.photo}/>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Home
