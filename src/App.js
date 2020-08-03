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
class App extends React.Component {

 state = {
  name: "Kua",
  id: 142
}

 
ChangeUser = (newName, newId) => {
  this.setState({
    name: newName,
    id: newId
  })
}

// Where I put routes once that bug is solved
render() {
  return (
    <div className="App">
     
      {/* WHen either of these buttons are used you set state of the user */}
      
      
    <div>
      <Navbar />

      <Route exact path={`/users/${this.state.id}`} render={routeProps => (
              <User
                {...routeProps}
                
                username={this.state.name}
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
