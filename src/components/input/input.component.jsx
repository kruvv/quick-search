import React from 'react';

//This component is a search string.
export default  props => (
    <div>
        <h3>Quick Search</h3>
        <input type="text" onChange={props.onChangeInput} />       
    </div>
) 