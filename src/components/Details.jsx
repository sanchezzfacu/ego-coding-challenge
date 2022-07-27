import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from './Navbar'
import '../css/Details.css'

const modelDetailsEndpoint = 'https://challenge.agenciaego.tech/api/models/'

function Details() {
    const [details, setDetails] = useState([])
    const { id } = useParams()
    let counter = 1


    async function getDetails(id) {
        let info = await fetch(modelDetailsEndpoint + id)
        let carDetails = await info.json()
        setDetails(carDetails)
    }

    useEffect(() => {
        getDetails(id)
    }, [id])

    return (
        <section className='details-container'>
                <Navbar/>
                <div className='details-wrapper'>
                    <img src={details.photo} alt="" />
                    <div className='details-information'>
                        <h2>{details.name}</h2>
                        <h1>{details.title}</h1>
                        {/* <h1>{details.description?.slice(details.description.indexOf('>') + 1, -4) }</h1> */}
                        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat explicabo eos modi aliquid incidunt suscipit libero
                            pariatur illo numquam! Ex necessitatibus molestiae suscipit totam
                            expedita.
                        </h4>
                    </div>
                </div>
                <div className='model-features'>
                    {details.model_features?.map(el => {
                        return (
                            <div key={el.image} className='feature'>
                                <img src={el.image} alt="img not found"/>
                                <h4>{el.name}</h4>
                                <h3>{el.description}</h3>
                            </div>
                        )
                    })}
                </div>

                <div className="model-highlights">
                    {details.model_highlights?.map(el => {
                        counter++
                        return (
                            <div key={el.image} className={`highlight-img-${counter % 2 === 0 ? 'left' : 'right'}`}>
                                <img src={el.image} alt="img not found"/>
                                <div className='highlight-info'>
                                    <h1>{el.title}</h1>
                                    <h3>{el.content?.slice(details.description.indexOf('>') + 1, -4)}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </section>
    )
}

export default Details
