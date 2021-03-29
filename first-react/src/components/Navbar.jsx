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
        console.log(this.state.inputSearch);
        this.props.filterHero(this.state.inputSearch)
        this.setState({
            ...this.state,
            inputSearch: ''
        })
    }

    handleOnChange = (event) => {
        console.log(event.target.value);
        this.setState({
            ...this.state,
            inputSearch: event.target.value
        })
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
                        <form class="form-inline my-2 my-lg-0" onSubmit={(event)=>this.handleSearch(event)}>
                            <input class="form-control mr-sm-2" name="inputSearch" type="search" value={this.state.inputSearch} onChange={this.handleOnChange} placeholder="Search by name" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" >Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar