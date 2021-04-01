import React from 'react'
import Navbar from '../components/Navbar'
import DetailCard from '../components/DetailCard'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Detail() {
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [detailHero, setDetailHero] = useState({})

    useEffect(()=>{
        setLoading(true)
        fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
        .then(res => res.json())
        .then(hero => {
            setDetailHero(hero)
        })
        .catch(err=>{
            console.log(err);
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center my-5">Detail Hero</h1>
            <div className="d-flex row justify-content-center mx-5">

                {detailHero.id ?
                    <DetailCard detailHero={detailHero} key={detailHero.id}></DetailCard>
                    :<h1>LOADING</h1> 
                }
            </div>
        </div>
    )
}

export default Detail  