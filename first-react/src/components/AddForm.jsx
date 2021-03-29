import React, { Component } from 'react'

class AddForm extends Component {
  constructor(){
    super()

    this.state = {
      id : undefined,
      name: "",
      images: {
        sm : ''
      },
      biography: {
        publisher: ''
      }
      
    }
  }

  formOnSubmit(event){
    event.preventDefault()
    console.log(this.props);
    console.log('sbumit form!!!');
    fetch(`https://akabab.github.io/superhero-api/api/id/${this.state.id}.json`)
    .then(res=>{
      return res.json()
    })
    .then(res=>{
      console.log(res);
      this.setState({
        id: res.id,
        name: res.name,
        images:{
          sm: res.images.sm
        },
        biography: {
          publisher: res.biography.publisher
        }
      })
      console.log(this.state);
      this.props.addSuperhero(this.state)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  handleOnChange = (event) =>{
    console.log(event.target.value);
    // mengubah state harus pakai setState (mirip mutation di vue)
    this.setState({
      ...this.state,
      // id : event.target.value
      [event.target.name] : event.target.value
    })
  }

  

  render() {
    return (
      <>
        <form onSubmit={(event)=>this.formOnSubmit(event)}>
          <input 
          name="id"
          placeholder='add superhero by id (1-731)' 
          value={this.state.id} 
          type="number"
          onChange={this.handleOnChange}/>
          <button >Submit</button>
        </form>
      </>
    )
  }
}

export default AddForm