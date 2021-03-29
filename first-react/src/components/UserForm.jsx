import React, { Component } from 'react'

class UserForm extends Component {
  constructor(){
    super()

    this.state = {
      name: 'awal',
      age: 1
    }
  }

  formOnSubmit(event){
    event.preventDefault()
    this.props.addUser(this.state)
  }

  handleOnChange = (event) =>{
    console.log(event.target.value);
    // mengubah state harus pakai setState (mirip mutation di vue)
    this.setState({
      ...this.state,
      [event.target.name] : event.target.value
    })
  }

  render() {
    return (
      <>
        <form onSubmit=''>
          <input 
          name="name" 
          value={this.state.name} 
          type="text"
          onChange={this.handleOnChange}/>

          <input 
          name="age" 
          value={this.state.age} 
          type="text"
          onChange={this.handleOnChange}/>
          <button onSubmit={this.formOnSubmit}>Submit</button>
        </form>

      </>
    )
  }
}

export default UserForm