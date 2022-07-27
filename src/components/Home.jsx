import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'
import Filters from './Filters'
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
        if(e.target.value === 'none') {
            let info = await fetch(modelListEndpoint)
            let modelList = await info.json()
            setList(modelList)
        }
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
            let modelsFiltered = await info.json()
            console.log(modelsFiltered)
            setList(modelsFiltered)
        } else if(e.target.value === '3'){
            let info = await fetch(modelListEndpoint + '?segment=3')
            let modelsFiltered = await info.json()
            setList(modelsFiltered)
        }else if(e.target.value === '4'){
            let info = await fetch(modelListEndpoint + '?segment=4')
            let modelsFiltered = await info.json()
            setList(modelsFiltered)
        } else if(e.target.value === '') {
            let info = await fetch(modelListEndpoint)
            let modelsFiltered = await info.json()
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

            <Filters filterListWithButtonsBy={filterListWithButtons} filterListWithSelectBy={filterListWithSelect}/>

            <div className='card-wrapper'>
            {
                list?.map(el => {
                    return (
                        <a href={'/details/' + el.id}
                         key={el.id}>
                            <Card name={el.name} year={el.year} price={el.price} img={el.photo}/>
                        </a>
                    )
                })
            }
            </div>
            <footer></footer>
        </div>
    )
}

export default Home
