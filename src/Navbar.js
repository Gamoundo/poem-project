import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'red',
  textDecoration: 'none',
  color: 'white',
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'fuchsia'
          }}
        >Home</NavLink>
        <NavLink
          to="/register"
          exact
          style={link}
          activeStyle={{
            background: 'orange'
          }}
        >Register</NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'purple'
          }}
        >Login</NavLink>
        <NavLink
          to="/profile"
          exact
          style={link}
          activeStyle={{
            background: 'purple'
          }}
        >Profile</NavLink>
      </div>
    )
  }
}

export default Navbar;