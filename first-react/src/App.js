
import './App.css';
// import react dulu kalo mau pake class component, pluss ganti languagenya jadi javascript react supaya tag html bisa dibuat di render
import React from 'react'
import SuperheroCard from './components/SuperheroCard'
import AddForm from './components/AddForm'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { useEffect } from 'react'
import useFetch from '../src/helpers/hooks/useFetch'



function App() {
  const {data: superheroLists, loading, fetchAll, setData } = useFetch('https://akabab.github.io/superhero-api/api/all.json')
  const [title, setTitle] = useState('Multiple Universes Superheroes')
  // const [superheroLists, setSuperheroLists] = useState([])
  const [filteredHero, setFilteredHero] = useState([])
  const [superheroNames, setSuperheroNames] = useState([])

  useEffect(() => {
    let newData = superheroLists.slice(0,5)
    console.log(newData);
    setData(newData)
  }, [])

  // function getAllHero(){
  //   let newData = superheroLists.slice(0,5)
  //   console.log(newData);
  //   setData(newData)
  // }

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
        let severalNames = severalheroes.map(hero=>{
          return hero.name
        })
        setSuperheroNames(severalNames)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  function filterHero(searchName) {
    console.log(searchName, 'searchname di filter hero app.js');
    let filtered = superheroLists.filter((hero) => {
      return hero.name.toLowerCase() === searchName.toLowerCase()
    })
    if(filtered) setFilteredHero(filtered)
    else {
      setFilteredHero([])
      console.log(filteredHero, '<<<<<<');
    }
  }

  function addHero(superhero) {
    setData(superheroLists.concat(superhero))
  }
  
  // setelah dibuat conditional rendering bugnya menghilang...
  return (
    <div>
      <Navbar filterHero={filterHero}></Navbar>
      <h1 className="text-center my-5">{title}</h1>
      <div className="text-center my-5">
        <h3>Add Superhero</h3>
        <AddForm addSuperhero={addHero} superheroNames={superheroNames}></AddForm>
      </div>
      <div className="d-flex row justify-content-center mx-5">

        { filteredHero[0] ?
          <SuperheroCard superhero={filteredHero[0]} key={filteredHero[0].id}></SuperheroCard>
          :
          superheroLists.map(superhero => {
            return <SuperheroCard superhero={superhero} key={superhero.id}></SuperheroCard>  
          })
        }

      </div>
    </div>
  )
}


export default App;
