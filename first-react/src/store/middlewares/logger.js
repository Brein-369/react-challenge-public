
// contoh custom middleware untuk nge console.log data2 dispatch sebelum ke reducer....


// cara pertama ES5
// function logger(storeAPI) {
//     return function wrapDispatch(next) {
//         return function handleAction(action) {
//             // Do anything here: pass the action onwards with next(action),
//             // or restart the pipeline with storeAPI.dispatch(action)
//             // Can also use storeAPI.getState() here


//             console.log(action, 'action di logger <<<<<<<<<<<<');

//             // next sama saja dengan dispatch
//             next(action)
            
//             // storeAPI sama aja kaya store yang  punya getState(), subscribe() dll...
//             console.log(storeAPI.getState(), 'store di logger <<<<<<<<<<<<')
//             return null  

//         }
//     }
// }


// cara kedua ES6
const logger = storeAPI => next => action => {
    console.log(action, 'action di logger <<<<<<<<<<<<');

    // next sama saja dengan dispatch
    next(action)
    
    // storeAPI sama aja kaya store yang  punya getState(), subscribe() dll...
    console.log(storeAPI.getState(), 'store di logger <<<<<<<<<<<<')
    return null 
  }

export default logger