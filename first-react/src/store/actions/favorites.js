export function addFavorite(payload){
    return {type: "favorite/addFavorite", payload}
}

export function removeFavorite(payload) {
    return {type: "favorite/removeFavorite", payload}
}
