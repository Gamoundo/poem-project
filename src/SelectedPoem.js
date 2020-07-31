import React from "react"

const SelectedPoem = (props) => {
    // so div onclick should display the poem and (play music stretch feature)
  
  
  
    console.log(props)
    return (
      <div className="selectedPoem">
      <h3>{props.poem.body}</h3>
    </div>
    );
  };

  export default SelectedPoem;
