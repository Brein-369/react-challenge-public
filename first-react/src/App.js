
import './App.css';
// import react dulu kalo mau pake class component, pluss ganti languagenya jadi javascript react supaya tag html bisa dibuat di render
import React from 'react'
import SuperheroCard from './components/SuperheroCard'
import AddForm from './components/AddForm'
import Navbar from './components/Navbar'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state= {
      title: "Multiple Universes Superheroes",
      filteredHero:{},
      superheroLists : []
      
    }
  }

  addHero = (superhero) =>{
    let newData = this.state.superheroLists.concat(superhero)
    this.setState({
      ...this.state,
      superheroLists : newData
    })
  }

  getSeveralHeroes = () =>{
    fetch(`https://akabab.github.io/superhero-api/api/all.json`)
    .then(res=>{
      return res.json()
    })
    .then(res=>{
      let severalHeroes = res.slice(0,5)
      this.setState({
        ...this.state,
        superheroLists : severalHeroes
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  filterHero = (searchName) => {
    console.log(searchName,'searchname di filter hero app.js');
    let filtered = this.state.superheroLists.filter((hero)=>{
      return hero.name.toLowerCase() === searchName.toLowerCase()
    })
    this.setState({
      ...this.state,
      filteredHero: filtered
    })
  }

  componentDidMount(){
    this.getSeveralHeroes()
  }

  render() {
    // const {users} = this.users
    return (
      // harus satu lead tag ( sama seperti vue )
      <div>
        <Navbar filterHero={this.filterHero}></Navbar>
        <h1 className="text-center my-5">{this.state.title}</h1>
        <div className="text-center my-5">
          <h3>Add Superhero</h3>
          <AddForm addSuperhero={this.addHero}></AddForm>
        </div>
        <div className="d-flex row justify-content-center mx-5">
          {
            this.state.superheroLists.map(superhero=>{
              return <SuperheroCard superhero={superhero} key={superhero.id}></SuperheroCard>
            })
          }
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
