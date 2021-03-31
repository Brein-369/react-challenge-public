 
 const initialState= {
     favorites: []
 }
 
 
 function reducer(state = initialState, action) {
    const {type , payload } = action
    if(type === "favorite/addFavorite"){
        return {...state, favorites: [...state.favorites, payload]}
    }
    else if(type === "favorite/removeFavorite"){
        let newData = [...state.favorites].filter(favorite=>{
            return favorite.id !== payload.id
        })
        return {...state, favorites: newData}
    }
    return state
 }  

 export default reducer