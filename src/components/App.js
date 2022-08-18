import React from "react"


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name:'',
            email: '',
            gender: 'Man',
        };

        this.onNameEventHandler = this.onNameEventHandler.bind(this)
        this.onEmailEventHandler = this.onEmailEventHandler.bind(this)
        this.onGenderEventHandler = this.onGenderEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onNameEventHandler(event) {
        this.setState(() => {
            return {
                name: event.target.value
            } 
        })
    }

    onEmailEventHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value
            }
        })
    }

    onGenderEventHandler(event) {
        this.setState(() => {
            return{
            gender: event.target.value
        }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        const message = `
        name: ${this.state.name}
        email: ${this.state.email}
        gender: ${this.state.gender}
        `

        alert(message)
    }

    render(){
      return (
        <div>
        <h1> Register Form</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <label for="name">Name: </label>
          <input id="name" type="text" value={this.state.name} onChange={this.onNameEventHandler}/>
          <br />
          <label for="email">Email: </label>
          <input id="email" type="text" value={this.state.email} onChange={this.onEmailEventHandler} />
          <br />
          <label for="gender">Gender: </label>
          <select id="gender" value={this.state.gender} onChange={this.onGenderEventHandler}>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
      )
    }
  }

  export default App;

