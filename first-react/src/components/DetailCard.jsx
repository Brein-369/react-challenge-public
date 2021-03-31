import React from 'react'

function DetailCard (props){
    const {detailHero} = props
    console.log(detailHero, 'detailHero di detailHero card<<<<<<');

    return (
        // <> atau <React.Fragment> sama aja
        <>  
            <div className="card col-4 mx-3 my-3">
                <img className="card-img-top" src={detailHero.images.sm} alt=""/>
                <div className='card-body'>
                    <h5 className="card-title">Name : {detailHero.name}</h5>
                    <p>Gender: {detailHero.appearance.gender}</p>
                    <p>Race: {detailHero.appearance.race}</p>
                    <p>Height: {detailHero.appearance.height[1]=== "0 cm"?"unknown":detailHero.appearance.height[1] }</p>
                    <p>Weight: {detailHero.appearance.weight[1]=== "0 kg"?"unknown":detailHero.appearance.weight[1]}</p>
                    <p>Occupation: {detailHero.work.occupation}</p>
                </div>
            </div>
        </>
    )
}

export default DetailCard