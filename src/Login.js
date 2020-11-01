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
        
        
       console.log(this.state)
    
        
        fetch('http://localhost:3000/login', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(this.state),
          headers: {
            "Content-Type": "application/json"
          },
        }).then(r => r.json())
        .then(newuser => {
          if(newuser.name === undefined) {
            alert("User doesn't exist. Sure it isn't your first time here?")
          }
          else  {

           let user = {
              name:newuser.name,
              id: newuser.id
            }
            console.log(newuser)
            this.props.changeUser(user.name, user.id)
            window.localStorage.setItem("Poem Project", JSON.stringify(user)); 
            window.location = '/profile'
        
            // this.props.history.push("/profile");
          }
         
          // else {
          //   alert("User doesn't exist. Sure it isn't your first time here?")
          // }
          
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
         url="https://www.youtube.com/watch?v=4THFRpw68oQ&list=PLb0mEpWg8c6W8ns6LR8uMfY-Pue6fl5Pe&index=34"
        />
      </div>
    );
  }
}

export default Login;