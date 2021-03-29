import React, { Component } from 'react'

class Navbar extends Component {
    constructor(props){
        super(props)

        this.state = {
            inputSearch:''
        }
        
    }

    handleSearch = (event) =>{
        event.preventDefault()
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <h3 class="navbar-brand">Superheroes</h3>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onSubmit={(event)=>this.handleSearch(event)}>Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar