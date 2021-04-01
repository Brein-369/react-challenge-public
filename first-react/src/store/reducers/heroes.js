const initialState={
    loading: false,
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
        
        return {...state, allHeroes: [...state.allHeroes, payload]}
        
    }
    else if(type === "allHeroNames/setHeroNames"){
        return {...state, allHeroNames: payload}
    }
    else if(type === "filteredHero/setFilteredHero"){
        return {...state, filteredHero: payload}
    }
    else if(type === "loading/setLoading"){
        return {...state, loading: payload}
    }
    return state
}

export default reducer