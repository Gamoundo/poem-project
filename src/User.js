import React  from "react";
import Register from "./Register"
import Login from "./Login"
import NewPoemForm from "./NewPoemForm"
import Poem from "./Poem"
import SelectedPoem from "./SelectedPoem"
import { withRouter} from "react-router-dom"

const storedUser= window.localStorage.getItem("Poem Project")

class User extends React.Component {

    // constructor(props) {
    //     super (props) 
        
    // }
    state = {
        id: storedUser ? JSON.parse(storedUser).id : 0,
        name: storedUser ? JSON.parse(storedUser).name : "",
        poems: [],
        poem: "",
        userpoem: []
    }

   

displayPoem = (text) => {
    this.setState({
      poem: text,
      
    })
  }

addPoem = text => {
    this.setState(prevState => ({
        userpoem: [...prevState.userpoem, text]
    }))
}

  renderUserPoems () {
    console.log(this.state.id)
    console.log(this.state.name)
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
    fetch("http://localhost:3000/poems", {
      method: 'GET',
      
      headers: {
        "Content-Type": "application/json",
        
      }
    }
    )
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
         <NewPoemForm  userpoem={this.state.userpoem} addPoem={this.addPoem} user={this.state.name} uid={this.state.id}/>
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