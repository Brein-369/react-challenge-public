const initialState={
    allHeroes: [],
    allHeroNames: [],
    filteredHero:[]
}

function reducer(state=initialState, action){
    const {type, payload} = action
    if(type === "allHeroes/setHeroes"){
        return {...state, allHeroes: payload}
    }
    else if(type === "allHeroes/addHero"){
        console.log(payload, "payload di reducer<<<<<<");
        // let doAdd = false
        // state.allHeroes.forEach((e,i)=>{
        //     if(e.id !== payload.id){
        //         doAdd = true 
        //     }
        //     if (doAdd && i === state.allHeroes.length-1) return {...state, allHeroes: [...state.allHeroes, payload]}
        //     if (!doAdd && i === state.allHeroes.length-1)return {...state, allHeroes: [...state.allHeroes]}
        // })
        return {...state, allHeroes: [...state.allHeroes, payload]}
        
    }
    else if(type === "allHeroNames/setHeroNames"){
        return {...state, allHeroNames: payload}
    }
    else if(type === "filteredHero/setFilteredHero"){
        return {...state, filteredHero: payload}
    }
    return state
}

export default reducer