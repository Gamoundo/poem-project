import React from "react"
import Poem from "./Poem"
import { handleChange } from "./Register"
import User from "./User"

class NewPoemForm extends React.Component {

    state = {
        name: "",
        genre: "happy",
        body: "",
        song: "Awaken",
        user: this.props.user,
        id: this.props.uid
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value, user: this.state.user});
      }

    
   
   
   
   
   
   
   
   
      handleSubmit = (event)  => {
        event.preventDefault();
        
        
       
    
        
        fetch('http://localhost:3000/poems', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type": "application/json"
          },
        }).then(r => r.json())
        .then(newpoem => this.props.addPoem(newpoem));
      }
    

    render () {
        console.log(this.state)
        return (
            <div>
      <form className="addpoem" onSubmit={this.handleSubmit}>
        <h1>Add Poem</h1>
        <div>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Title" />
          <label htmlFor="name">Name</label>
        </div>
        <div>
        <label htmlFor="genre">Genre</label>
          <select name="genre" onChange={this.handleChange} value={this.state.genre}>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="inspirational">Inspirational</option>
            <option value="romantic?">Romantic</option>
            <option value="angry">Angry</option>
          </select>
        </div>
        <div>
        <label htmlFor="body">Body</label>
          <textarea  name="body" rows="4" cols="50" value={this.state.body} onChange={this.handleChange}>
  
        </textarea>
        </div>
        <div>
        <label htmlFor="song">Song</label>
          <select name="song" onChange={this.handleChange} value={this.state.song}>
            <option value="Sleepwalker">Sleepwalker</option>
            <option value="Regrets">Regrets</option>
            <option value="I Can't Reach">I Can't Reach</option>
            <option value="American Vernacular">American Vernacular</option>
            <option value="OB1">OB1</option>
            <option value= "Steps">Steps</option>
            <option value="Sulking">Sulking</option>
            <option value="Awaken">Awaken</option>
            <option value="Really Really Doe">Really Really Doe</option>
            <option value= "Meadows">Meadows</option>
            <option value= "Treat Yourself">Treat Yourself</option>
          </select>
        </div>
        <input type="submit" value="Create poem" />
      </form>
      
      </div>
        )
    }
}

export default NewPoemForm;