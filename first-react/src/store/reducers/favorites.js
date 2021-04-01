const initialState={
    data: [],
}

function reducer(state=initialState, action){
    const {type, payload} = action 

    if(type === "favorite/addFavorite"){
        return {...state, data: [...state.data, payload]}
    }
    else if(type === "favorite/removeFavorite"){
        let newData = [...state.data].filter(data=>{
            return data.id !== payload.id
        })
        return {...state, data: newData}
    }
    return state
}

export default reducer