import logo from './logo.svg';
import './App.css';
// import react dulu kalo mau pake class component, pluss ganti languagenya jadi javascript react supaya tag html bisa dibuat di render
import React from 'react'
import Dictionary from './components/Dictionary'
import UserForm from './components/UserForm'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state= {
      name: "edward B",
      users : [{
        id: 1,
        name: 'edward',
        age: 10
      },
      {
        id:2,
        name: "bill",
        age: 11
      }
      ]
      
    }
  }

  addUser = (user) =>{
    let newData = this.state.users.concat(user)
    this.setState({
      ...this.state,
      users : newData
    })
  }

  render() {
    // const {users} = this.users
    return (
      // harus satu head tag ( sama seperti vue )
      <div>
        <h1>{this.state.name}</h1>
        <ul>
          {
            this.state.users.map(user=>{
              return <Dictionary user={user} key={user.id}></Dictionary>
            })
          }
        </ul>
        <UserForm addUser={this.addUser}></UserForm>
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
