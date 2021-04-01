
import {useState} from 'react'
import {
    Link,
    useHistory
} from 'react-router-dom'


function Navbar(props) {
    const history = useHistory()
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
    function toHome () {
        if(props.filterHero){
            props.filterHero('')
        }
        history.push('/')
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
                            <a href='#' onClick={toHome} className="nav-link" >Home</a>
                        </li>
                        <li className="nav-item">
                            <Link to='/favorites' className="nav-link" >Favorites</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={(event)=>handleSearch(event)}>
                        <input className="form-control mr-sm-2" name="inputSearch" type="search" value={inputSearch} onChange={handleOnChange} placeholder="Search empty to go Home" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" >Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar