
import {useState} from 'react'
import {
    Link
} from 'react-router-dom'

function Navbar(props) {

    const [inputSearch, setInputSearch] = useState('')

    function handleSearch(event){
        event.preventDefault()
        console.log(inputSearch);
        props.filterHero(inputSearch)
        setInputSearch('')
    }

    function handleOnChange(event){
        console.log(event.target.value);
        setInputSearch(event.target.value)
    }

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
                            <Link to='/' class="nav-link" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/favorites' class="nav-link" >Favorites</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0" onSubmit={(event)=>handleSearch(event)}>
                        <input class="form-control mr-sm-2" name="inputSearch" type="search" value={inputSearch} onChange={handleOnChange} placeholder="Search by name" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" >Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar