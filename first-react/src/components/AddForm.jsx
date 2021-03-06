import React from 'react'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setAllHeroNamesAsync, addHero} from '../store/actions/heroes'


function AddForm () {
  const dispatch = useDispatch()
  useEffect(() => {
    // async function harus di invoke supaya mereturn sesuatu
    dispatch(setAllHeroNamesAsync())
  }, [])

  const superheroNames = useSelector(state => state.heroes.allHeroNames)
  
  
  //beberapa state saya buat lokal state aja gpp kan kak ? soalnya bisa dianggap ini belum fix
  const [inputId, setInputId] = useState(undefined)
  const [inputName, setInputName] = useState('')
  const [heroToAdd, setHeroToAdd] =  useState ({
    id : 0,
    name: "",
    images: {
      sm : ''
    },
    biography: {
      publisher: ''
    }
  })
  
  // kalo local state berubah waktu submit langsung proses dispatch add
  useEffect(()=>{
    console.log(heroToAdd, 'hero to add hooks<<<<')
    dispatch(addHero(heroToAdd))
  },[heroToAdd])

  function formOnSubmit(event){
    event.preventDefault()
    console.log('sbumit form!!!');
    fetch(`https://akabab.github.io/superhero-api/api/id/${inputId}.json`)
    .then(res=>{
      return res.json()
    })
    .then(res=>{
      console.log(res, 'res di submit');
      let newObj = {
        id: res.id,
        name: res.name,
        images:{
          sm: res.images.sm
        },
        biography: {
          publisher: res.biography.publisher
        }
      }
      setHeroToAdd(newObj)
      console.log(newObj, 'new obj<<<<<2');
      setInputId(undefined)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  function formOnSubmitAddByName(event){
    event.preventDefault()
    fetch(`https://akabab.github.io/superhero-api/api/all.json`)
    .then(res=>{
      return res.json()
    })
    .then(res=>{
      console.log('res di submit by name');
      let filterByName = res.filter(heroData => heroData.name === inputName )
      console.log(filterByName);
      let newObj = {
        id: filterByName[0].id,
        name: filterByName[0].name,
        images:{
          sm: filterByName[0].images.sm
        },
        biography: {
          publisher: filterByName[0].biography.publisher
        }
      }
      setHeroToAdd(newObj)
      console.log(newObj, 'new obj<<<<<2');
      setInputId(undefined)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  function handleOnChange(event){
    console.log(event.target.value,"event target value<<<<<<<<");
    if(event.target.id === "byId")setInputId(event.target.value)
    else setInputName(event.target.value)
  }
  
  return (
    <>
    <div className="mt-3">
      <form onSubmit={(event)=>formOnSubmit(event)}>

        <label for="byId">Choose Superhero By Id</label><br/> 
        <input 
        id="byId"
        name="id"
        placeholder='add superhero by id (1-731)' 
        value={inputId} 
        type="number"
        onChange={handleOnChange}/>
        <button className="btn btn-success mx-2">Submit</button>
      </form>
    </div>

      <div className="d-flex justify-content-center mt-3">
        <div className="form-group w-25">
        <form onSubmit={(event)=>formOnSubmitAddByName(event)}>
          <label for="superheroName">Choose Superhero By Name</label>
          <select className="form-control" id="superheroName" name="name" type="text" onChange={handleOnChange}>
            <option selected>Choose Superhero Name</option>
            {
              superheroNames.map(heroName=>{
                return <option value={heroName}>{heroName}</option> 
              })
            }
          </select>
          <button className="btn btn-success mt-2">Submit</button>
        </form>
        </div>

      </div>
    </>
  )
  
  
}

export default AddForm