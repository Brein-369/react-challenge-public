
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <h3 className="navbar-brand">Superheroes</h3>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/favorites' className="nav-link" >Favorites</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={(event)=>handleSearch(event)}>
                        <input className="form-control mr-sm-2" name="inputSearch" type="search" value={inputSearch} onChange={handleOnChange} placeholder="Search by name" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" >Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar