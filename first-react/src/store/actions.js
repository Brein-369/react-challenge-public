export function addFavorite(payload){
    return {type: "favorite/addFavorite", payload}
}

export function removeFavorite(payload) {
    return {type: "favorite/removeFavorite", payload}
}

export function setAllHeroes(payload) {
    return ({type: "allHeroes/setHeroes", payload})
}
export function addHero(payload) {
    return ({type: "allHeroes/addHero", payload})
}

export function setAllHeroNames(payload) {
    return ({type: "allHeroNames/setHeroNames", payload})
}

export function setFilteredHero(payload) {
    return ({type: "filteredHero/setFilteredHero", payload})
}