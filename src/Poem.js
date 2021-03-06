import React from "react"

const Poem = (props) => {
    // so div onclick should display the poem and (play music stretch feature)
    console.log(props.song.url)
    // console.log("=== hey yo yo", props)
    let audio = new Audio(props.song.url)

  
    return (
        
      <div className="container" onClick={props.click}>
      <h4><b>Title: {props.name}</b></h4> 
      <p>Author: {props.user.name}</p>
    <p>Song: {props.song.name}</p> 
    <audio controls  > <source src={`http://localhost:3000${props.song.url}`} type="audio/mpeg" /> </audio>

    </div>
    );
  };

  export default Poem;





