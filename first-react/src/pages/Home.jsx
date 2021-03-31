import React from 'react'
import SuperheroCard from '../components/SuperheroCard'
import AddForm from '../components/AddForm'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useEffect } from 'react'
import useFetch from '../helpers/hooks/useFetch'
import {useSelector, useDispatch} from 'react-redux'
import {setAllHeroes, setAllHeroNames, setFilteredHero, addHero} from '../store/actions'


function Home() {
    const dispatch = useDispatch()
    const allHeroes = useSelector(state => state.allHeroes)
    const allHeroNames = useSelector(state => state.allHeroNames)
    const filteredHero = useSelector(state => state.filteredHero)
    const { data, loading } = useFetch('https://akabab.github.io/superhero-api/api/all.json')
    const [title] = useState('Multiple Universes Superheroes')
    // const [superheroLists, setSuperheroLists] = useState([])
    // const [superheroNames, setSuperheroNames] = useState([])
    // const [filteredHero, setFilteredHero] = useState([])

    useEffect(() => {
        let newData = data.slice(0, 5)
        console.log(newData, "<<<<<<< new data di app");
        // setSuperheroLists(newData)
        dispatch(setAllHeroes(newData))
    }, [data])

    // useEffect(() => {
    //   fetch(`https://akabab.github.io/superhero-api/api/all.json`)
    //     .then(res => {
    //       return res.json()
    //     })
    //     .then(res => {
    //       let severalHeroes = res.slice(0, 5)
    //       setSuperheroLists(severalHeroes)
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
    // }, [])

    useEffect(() => {
        fetch(`https://akabab.github.io/superhero-api/api/all.json`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                let severalheroes = res.slice(6, 30)
                let severalNames = severalheroes.map(hero => {
                    return hero.name
                })
                dispatch(setAllHeroNames(severalNames))
                // setSuperheroNames(severalNames)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function filterHero(searchName) {
        console.log(searchName, 'searchname di filter hero app.js');
        let filtered = allHeroes.filter((hero) => {
            return hero.name.toLowerCase() === searchName.toLowerCase()
        })
        if (filtered) dispatch(setFilteredHero(filtered))
        else {
            dispatch(setFilteredHero([]))
            console.log(filteredHero, '<<<<<<');
        }
    }

    function functionAddHero(superhero) {
        dispatch(addHero(superhero))
    }
    return (
        <div>
            <Navbar filterHero={filterHero}></Navbar>
            <h1 className="text-center my-0 py-5 bg-warning">{title}</h1>
            <div className="text-center my-5 ">
                <h3>Add Superhero</h3>
                <AddForm addSuperhero={functionAddHero} superheroNames={allHeroNames}></AddForm>
            </div>
            <div className="d-flex row justify-content-center mx-5">

                {loading ?
                    <h1>LOADING</h1> :
                    filteredHero[0] ?
                        <SuperheroCard superhero={filteredHero[0]} isFavorite={false} key={filteredHero[0].id}></SuperheroCard>
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
