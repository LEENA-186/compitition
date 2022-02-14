import React from 'react';

function Input(props){
    let formControl ="form-control";
    if (props.touched && !props.valid){
        formControl = 'form.control control-error';     
        // if touched and invalid then error msg 
    }
    return(
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">
                {props.title}</label>
                <input 
                 id={props.name}
                className={formControl}
                name={props.name}
                type={props.inputType}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleChange}
                />
                {props.errorMsg ?
                
            <div style={{color:"red", marginBottom:"15px", fontSize:""}}>
            {props.errorMsg}</div> : null
            }
        </div>
    )
}
export default Input