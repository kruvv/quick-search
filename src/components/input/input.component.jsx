import React from 'react';

//This component is a search string.
export default  props => (
    <div>
        <h2>Quick Search</h2>
        <input id="inputSearch" type="text" onChange={props.onChangeInput} />       
    </div>
) 