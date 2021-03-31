import React from 'react'
import {useHistory} from 'react-router-dom'
import {addFavorite, removeFavorite} from '../store/actions'
import {useDispatch} from 'react-redux'

function SuperheroCard (props){
    let history = useHistory()
    const dispatch = useDispatch()
    const {superhero, isFavorite} = props
    console.log(superhero, 'di superhero card<<<<<<');

    function toDetailHero(id){
        history.push('/detail/'+ id)
    }
    function addToFavorites() {
        console.log(superhero, 'add to favorite');
        dispatch(addFavorite(superhero))
    }
    function removeFromFavorites() {
        console.log(superhero, 'remove from favorite');
        dispatch(removeFavorite(superhero))
    }

    return (
        // <> atau <React.Fragment> sama aja
        <>
            <div className="card col-2 mx-3 my-3 pt-3 border-dark">
                <img className="card-img-top" src={superhero.images.sm} alt=""/>
                <div className='card-body'>
                    <h5 className="card-title">{superhero.name}</h5>
                    <p><strong>Publisher:</strong> {superhero.biography.publisher}</p>
                    <div className="row">
                        <button onClick={()=> toDetailHero(superhero.id)} className="btn btn-warning col">Detail</button>
                        {
                            isFavorite ?
                            <i class="fa fa-thumbs-down fa-2x col text-right" onClick={removeFromFavorites} aria-hidden="true"></i>
                            // <button className="btn btn-primary" onClick={removeFromFavorites}>Remove from Favorites</button>
                            :
                            <i class="fa fa-thumbs-up fa-2x col text-right" onClick={addToFavorites} aria-hidden="true"></i>
                            // <button className="btn btn-primary" onClick={addToFavorites} ><i class="fa fa-thumbs-up" aria-hidden="true"></i></button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuperheroCard