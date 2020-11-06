import React from 'react';
import User from './User'

const storedUser= window.localStorage.getItem("Poem Project")
class Profile extends React.Component {
    state = {
        name: storedUser ? JSON.parse(storedUser).name : "",
        id: storedUser ? JSON.parse(storedUser).id : 0
      }
render() {
    return (
        <div>
            <User/>
        </div>
    )
}
}

export default Profile;