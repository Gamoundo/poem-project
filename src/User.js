import React, { Component } from "react";
import Register from "./Register"
import Login from "./Login"
import NewPoemForm from "./NewPoemForm"
import Poem from "./Poem"
import SelectedPoem from "./SelectedPoem"
// import { withRouter} from "react-router-dom"
class User extends Component {

    // constructor(props) {
    //     super (props) 
        
    // }
    state = {
        id: this.props.id,
        name: this.props.username,
        poems: [],
        poem: "",
        userpoem: []
    }

displayPoem = (text) => {
    this.setState({
      poem: text,
      
    })
  }

addPoem(text) {
    this.setState({
        userpoem: [...this.state.userpoem, text]
    })
}

  renderUserPoems () {
    console.log(this.state.id)
  return (this.state.userpoem.map((poem) => {
    let callback = () => this.displayPoem(poem)
    return(
        
        <Poem 
        key={poem.id}
        name={poem.name}
        body={poem.body}
        user={poem.user}
        song={poem.song}
        click={callback}
        />
    )
   }))
}

componentDidMount() {
    fetch("http://localhost:3000/poems")
    .then(r => r.json())
    .then(poems =>  {
        this.setState({ poems })
      const userpoem = poems.filter(poem => {
            return poem.user.id === this.state.id
        })
        this.setState({ userpoem })
  })
}
   

render (){
    console.log(this.props)
    console.log(this.state.userpoem)
    return (
        <div>
         <h1>{this.state.name}'s poetry page</h1>
         <h2>{this.state.id}</h2>
         <NewPoemForm  userpoem={this.state.userpoem} addPoem={this.addPoem} user={this.props.username}/>
         <div className="poems">
         
            <div>{this.renderUserPoems()}</div>
            <SelectedPoem poem={this.state.poem} />
        </div>
        </div>
    )
}
}
// const ComponentWithRouter = withRouter(User)
export default User;