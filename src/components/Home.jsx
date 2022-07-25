import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card'
import Navbar from './Navbar'

const modelListEndpoint =  'https://challenge.agenciaego.tech/api/models/'

function Home() {
    const [list, setList] = useState([])

    async function getList() {
        let info = await fetch(modelListEndpoint)
        let modelList = await info.json()
        setList(modelList)
    }

    useEffect(() => {
        getList()
    }, [])
    return (
        <div>
            <Navbar/>
            {
                list?.map(el => {
                    return (
                        <div key={el.id}>
                            <Card name={el.name} year={el.year} price={el.price} img={el.thumbnail}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home
