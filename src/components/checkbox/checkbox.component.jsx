import React from 'react';

//This componenet display checkbox
export default props => (
    <label htmlFor={props.name}>
        <input 
            id={props.name} 
            type="checkbox"
            checked={props.checked}
            onChange={props.onChangeCheckBox}
            />
        {props.name} 
    </label>
)

