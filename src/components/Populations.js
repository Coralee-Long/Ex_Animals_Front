import { useState, useEffect } from "react";
import axios from 'axios'



const Populations = () => {

    const [populations, setPopulations] = useState([])
    const [country, setCountry ] = useState('')
    const [year, setYear ] = useState(2000)
    const [newPopulation, setNewPopulation] = useState({
        country : '',
        population : '',
        year : 0
    })


    useEffect(() => {
        fetchPopulationsAPI()
    }, [country, year])

    const fetchPopulationsAPI = async () => {
        await axios.get(`http://localhost:3002/api/populations/country/${country}/${year}`)
        .then(res => setPopulations(res.data))
        .catch(err => console.log(err) )
    }

    const addPopulation = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3002/api/populations', newPopulation)
        .then(res => console.log(res))
        .catch(err => console.log(err) )
        fetchPopulationsAPI()
    }




    return(
        <div style={{textAlign :'center'}}>
            <input value={country} onChange={e => setCountry(e.target.value)} />
            <input type='number' value={year} onChange={e => setYear(e.target.value)} />

            {populations.map(population => {
                return(
                    <>
                        <h2>{population.country}</h2>
                        <p>{population.population} {population.year}</p>
                    </>
                )
            })}
            <form onSubmit={addPopulation}>
                <input value={newPopulation.country} onChange={e => setNewPopulation({...newPopulation, country : e.target.value})} />
                <input  value={newPopulation.population} onChange={e => setNewPopulation({...newPopulation, population : e.target.value})}/>
                <input type='number' value={newPopulation.year} onChange={e => setNewPopulation({...newPopulation, year : e.target.value})}/>
                <button type='submit'>
                    Add population
                </button>
            </form>
        
        </div>
    )
}

export default Populations