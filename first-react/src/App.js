
import './App.css';
// import react dulu kalo mau pake class component, pluss ganti languagenya jadi javascript react supaya tag html bisa dibuat di render
import React from 'react'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {
  Home,
  Detail,
  Favorites
} from './pages/index.js'


function App() {
  
  
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id">
          <Detail></Detail>
        </Route>
        <Route path="/favorites">
          <Favorites></Favorites>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  )
}


export default App;
