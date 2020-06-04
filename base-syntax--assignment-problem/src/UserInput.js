import React from 'react';


const UserInput = (props) => {
        return (
            <div style={props.style1}> 
              <input type = "text" onChange={props.changed} value={props.username} ></input>  
            </div>
        );
}

export default UserInput;
