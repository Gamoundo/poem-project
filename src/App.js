import React from 'react';

import './App.css';
import PoemContainer from "./PoemContainer"
import User from "./User"

import Register from './Register'
import Login from './Login'
import Navbar from './Navbar'
import { Route } from "react-router-dom"
import * as serviceWorker from './serviceWorker';
import NewPoemForm from './NewPoemForm';
import Profile from './Profile'

const storedUser= window.localStorage.getItem("Poem Project")

class App extends React.Component {

 state = {
  name: storedUser ? JSON.parse(storedUser).name : "",
  id: storedUser ? JSON.parse(storedUser).id : 0
}

 
ChangeUser = (newName, newId) => {
  this.setState({
    name: newName,
    id: newId
  })
}

HandleLogout() {
  localStorage.clear()
  window.location = '/'
}



// Where I put routes once that bug is solved
render() {
  return (
    <div className="App">
     
      {/* WHen either of these buttons are used you set state of the user */}
      
      
    <div>
      <h1 className="title">Poetry Palace</h1>
      <img src="https://bostonglobe-prod.cdn.arcpublishing.com/resizer/HDaIpPnyBHskerM6OeHR8cpvIuQ=/1440x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/NCV4ZC3HJ5H7TAS3TZKPRWH37M.jpg" alt="Reading for the fun of it" width="700" height="600"
      />
      <Navbar />
      {storedUser ? <button className="logout" onClick = {this.HandleLogout}> Logout</button> : ""}
      <Route exact path="/profile" render={routeProps => (
              <Profile
                {...routeProps}
                
                name={this.state.name}
                id={this.state.id}
                changeUser={this.ChangeUser}
              />
            )} />
      
      <Route exact path="/login" render={routeProps => (
              <Login
                {...routeProps}
                
                username={this.state.name}
                id={this.state.id}
                changeUser={this.ChangeUser}
              />
            )} />
      
      
      
      
      <Route exact path="/" render={routeProps => (
              <PoemContainer
                {...routeProps}
                
                username={this.state.name}
                id={this.state.id}
                changeUser={this.ChangeUser}
              />
            )} />
      <Route exact path="/register" render={routeProps => (
              <Register
                {...routeProps}
                
                username={this.state.name}
                id={this.state.id}
                changeUser={this.ChangeUser}
              />
            )} />
      <Route exact path="/newpoemform" render={routeProps => (
              <NewPoemForm
                {...routeProps}
                
                username={this.state.name}
                id={this.state.id}
                changeUser={this.ChangeUser}
              />
            )} />
      
    </div>
    
      {/* User having these props will render their user pages */}
    </div>
  );
 }
}

export default App;
