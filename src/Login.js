import React from 'react';
import ReactPlayer from "react-player"



class Login extends React.Component {

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
          credentials: 'include',
          body: JSON.stringify(this.state),
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
      <form className="logform" onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <div>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}placeholder="Username" />
          <label htmlFor="name">name</label>
        </div>
        <div>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
        <ReactPlayer 
         url="https://www.youtube.com/watch?v=MKUex3fci5c"
        />
      </div>
    );
  }
}

export default Login;