
import './App.css';
// import react dulu kalo mau pake class component, pluss ganti languagenya jadi javascript react supaya tag html bisa dibuat di render
import React from 'react'
import SuperheroCard from './components/SuperheroCard'
import AddForm from './components/AddForm'
import Navbar from './components/Navbar'
import {useState} from 'react'
import {useEffect} from 'react'





function App() {
  
  const [title, setTitle] = useState('Multiple Universes Superheroes')
  const [superheroLists, setSuperheroLists] = useState([])
  const [filteredHero, setFilteredHero] = useState({})
  
  useEffect(() => {
    fetch(`https://akabab.github.io/superhero-api/api/all.json`)
    .then(res=>{
      return res.json()
    })
    .then(res=>{
      let severalHeroes = res.slice(0,5)
      setSuperheroLists(severalHeroes)
    })
    .catch(err=>{
      console.log(err);
    })
    // CLEAN UP ??
    // return () => {
      //   cleanup
      // }
    }, [])

    function filterHero (searchName) {
      console.log(searchName,'searchname di filter hero app.js');
      let filtered = superheroLists.filter((hero)=>{
        return hero.name.toLowerCase() === searchName.toLowerCase()
      })
      setFilteredHero(filtered)
      console.log(filtered,'<<<<<<');
    }

    function addHero(superhero){
        setSuperheroLists(superheroLists.concat(superhero))
      }
      
      if (!filteredHero.length){
        return (
      // harus satu lead tag ( sama seperti vue )
      <div>
        <Navbar filterHero={filterHero}></Navbar>
        <h1 className="text-center my-5">{title}</h1>
        <div className="text-center my-5">
          <h3>Add Superhero</h3>
          <AddForm addSuperhero={addHero}></AddForm>
        </div>
        <div className="d-flex row justify-content-center mx-5">
          {
            superheroLists.map(superhero=>{
              return <SuperheroCard superhero={superhero} key={superhero.id}></SuperheroCard>
            })
          }
        </div>
      </div>
    )
  }
  else {
    return (
      // harus satu lead tag ( sama seperti vue )
      <div>
        <Navbar filterHero={filterHero}></Navbar>
        <h1 className="text-center my-5">{title}</h1>
        <div className="d-flex row justify-content-center mx-5">
          <SuperheroCard superhero={filteredHero[0]} key={filteredHero[0].id}></SuperheroCard>
        </div>
      </div>
    )
  }
}


// cara lain selain menggunakan class component

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
