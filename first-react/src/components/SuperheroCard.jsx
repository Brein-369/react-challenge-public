import React from 'react'

class SuperheroCard extends React.Component {
    render(){
        const {superhero} = this.props
        console.log(superhero);
        return (
            // <> atau <React.Fragment> sama aja
            <>
                <div className="card col-2 mx-3 my-3">
                    <img className="card-img-top" src={superhero.images.sm} alt=""/>
                    <div className='card-body'>
                        <h5 className="card-title">{superhero.name}</h5>
                        <p>Publisher: {superhero.biography.publisher}</p>
                        <button className="btn btn-primary">do something</button>
                    </div>
                </div>
            </>
        )
    }
}

export default SuperheroCard