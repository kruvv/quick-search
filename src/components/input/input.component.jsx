import React from 'react';

//This component is a search string.
export default  props => (
    <div>
        <h1>Quick Search</h1>
        <input id="inputSearch" type="text" onChange={props.onChangeInput} />       
    </div>
) 