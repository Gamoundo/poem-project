import React from 'react';
import User from "./User"
import ReactPlayer from 'react-player';

class Register extends React.Component {
  
    state = {
        name: "",
        password: ""
        
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
    
    
    
    handleSubmit = (event)  => {
        event.preventDefault();
        
        
       
    
        
        fetch('http://localhost:3000/users', {
          method: 'POST',
          body: JSON.stringify(this.state),
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          },
        }).then(r => r.json())
        .then(newuser => {
            console.log(newuser)
             this.props.changeUser(newuser.name, newuser.id)
        
            this.props.history.push(`/users/${newuser.id}`);
      })
    
    }
  
    render() {
        
        return (
      <div>
      <form className="regform" onSubmit={this.handleSubmit}>
        <h1>Register</h1>
        <div>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Username" />
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Register" />
      </form>
            <ReactPlayer 
            url = "https://www.youtube.com/watch?v=l-MHDRuJ1ME"
            />
      </div>
    );
  }
}

export default Register;

