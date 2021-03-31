import React from 'react'
import SuperheroCard from '../components/SuperheroCard'
import {useSelector, useDispatch} from 'react-redux'

import Navbar from '../components/Navbar'

function Favorites() {
    const favorites = useSelector((state)=> state.favorites)
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center my-0 py-5 bg-secondary text-light">Favorite Heroes</h1>
            <div className="d-flex row justify-content-center mx-5">
                {
                    favorites.length?
                    favorites.map(favorite=>{
                        return <SuperheroCard superhero={favorite} isFavorite={true} key={favorite.id}></SuperheroCard>
                    })
                    :
                    <div className="text-center">
                        <img src="https://i.imgur.com/Mb6vx4d.png" alt="" className="pt-5"/>
                        <h3 className="mt-3">You have no favorite hero yet, try to add from homepage</h3>
                    </div>
                }
            </div>
        </div>
    )
}

export default Favorites  