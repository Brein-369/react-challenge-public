function setLoading(payload){
    return( {type: 'loading/setLoading', payload})
}


function setAllHeroes(payload) {
    return ({type: "allHeroes/setHeroes", payload})
}
export function setAllHeroesAsync() {
    return (dispatch, getState) => {
        dispatch(setLoading(true))
        fetch(`https://akabab.github.io/superhero-api/api/all.json`)
        .then(res => {
            return res.json()
        })
        .then(allherodata => {
            let severalheroes = allherodata.slice(0, 10)
            // setAllHero diambil dari function diatas
            dispatch(setAllHeroes(severalheroes))
        })
        .catch(err => {
            console.log(err);
        })
        .finally(()=>{
            dispatch(setLoading(false))
        })
    };
}



export function addHero(payload) {
    return ({type: "allHeroes/addHero", payload})
}

// ga sempet perbaiki yang masih ada duplikat kak... 
// export function addHeroAsync(dataHero) {
//     return (dispatch, getState) => {
//         let doAdd = false
//         const {allHeroes} = getState()
//         allHeroes.forEach((e,i)=>{
//             if(e.id !== dataHero.id){
//                 doAdd = true 
//             }
//             if (doAdd && i === allHeroes.length-1) dispatch(addHero(dataHero))
//             if (!doAdd && i === allHeroes.length-1)return null
//         })   
//     }
// }



function setAllHeroNames(payload) {
    return ({type: "allHeroNames/setHeroNames", payload})
}
export function setAllHeroNamesAsync() {
    return (dispatch, getState) => {
        fetch(`https://akabab.github.io/superhero-api/api/all.json`)
        .then(res => {
            return res.json()
        })
        .then(allherodata => {
            let severalheroes = allherodata.slice(11, 30)
            let severalNames = severalheroes.map(hero => {
                return hero.name
            })
            // setAllHeroNames diambil dari function diatas
            dispatch(setAllHeroNames(severalNames))
        })
        .catch(err => {
            console.log(err);
        })
    };
}

export function setFilteredHero(payload) {
    return ({type: "filteredHero/setFilteredHero", payload})
}

