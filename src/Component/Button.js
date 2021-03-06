import React from 'react'

function Button (props){
    let disabled=false;
    if(props.disabled){  
        disabled=props.disabled 
    }
    return(
        <button
        style={props.style}
        classname={props.type ==='primary'? 'btn btn-primary':'btn btn-secondary'}
      onClick={props.action}
      disabled={disabled}>{props.title}</button>
     )
    }
     export default Button;