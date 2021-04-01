import React from 'react'
import SuperheroCard from '../components/SuperheroCard'
import AddForm from '../components/AddForm'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useEffect } from 'react'
// import useFetch from '../helpers/hooks/useFetch'
import {useSelector, useDispatch} from 'react-redux'
import {setAllHeroesAsync, setFilteredHero} from '../store/actions/heroes'


function Home() {
    // const { data, loading } = useFetch('https://akabab.github.io/superhero-api/api/all.json')
    const dispatch = useDispatch()
    const loading = useSelector(state => state.heroes.loading)
    const allHeroes = useSelector(state => state.heroes.allHeroes)
    const filteredHero = useSelector(state => state.heroes.filteredHero)
    const [title] = useState('Multiple Universes Superheroes')

    useEffect(() => {
        // async function harus di invoke supaya mereturn sesuatu

        // kak ini mau ga mau bikin ga bisa nambah database soalnya di set All heroes async udah ke slice lagi dari awal kalo ke home....
        dispatch(setAllHeroesAsync())
    }, [])

    

    function filterHero(searchName) {
        console.log(searchName, 'searchname di filter hero app.js');
        let filteredData = []
        for(let i = 0; i< allHeroes.length; i++){
            if (allHeroes[i].name.toLowerCase().includes(searchName.toLowerCase())){
                filteredData.push(allHeroes[i])
            }
        }
        if (filteredData.length) dispatch(setFilteredHero(filteredData))
        else {
            dispatch(setFilteredHero([]))
            console.log(filteredHero, '<<<<<<');
        }
    }

    
    return (
        <div>
            <Navbar filterHero={filterHero}></Navbar>
            <h1 className="text-center my-0 py-5 bg-warning">{title}</h1>
            <div className="text-center my-5 ">
                <h3>Add Superhero</h3>
                <AddForm></AddForm>
            </div>
            <div className="d-flex row justify-content-center mx-5">

                {loading ?
                    <h1>LOADING</h1> 
                    :
                    filteredHero.length ?
                        filteredHero.map(hero=>{
                        return <SuperheroCard superhero={hero} isFavorite={false} key={hero.id}></SuperheroCard>
                        })
                        :
                        allHeroes.map(superhero => {
                            return <SuperheroCard superhero={superhero} isFavorite={false} key={superhero.id}></SuperheroCard>
                        })
                }
            </div>
        </div>
    )
}

export default Home
