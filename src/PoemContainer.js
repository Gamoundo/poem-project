import React, { Component } from "react";
import Poem from "./Poem"
import SelectedPoem from "./SelectedPoem"


class PoemContainer extends Component {

state = {
    poems: [],
    poem: ""

}

displayPoem = (text) => {
    
    this.setState({
      poem: text
      
    })
  }


renderPoems () {
    console.log(this.props.id)
  return (this.state.poems.map((poem) => {
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
        .then(poems => this.setState({ poems }));
      }
      render () {
          console.log(this.state)
          return (
              <div className="poems">
                  <div>{this.renderPoems()}</div>
              
              <SelectedPoem poem={this.state.poem}/>
              </div>
          )  
      } 

}

export default PoemContainer;