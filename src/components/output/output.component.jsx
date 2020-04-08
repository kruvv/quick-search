import React from 'react';

//This component displays the found information.
export default  props => (
    <div>
        <p><i>{props.id}</i>{props.data}<strong>{props.date}</strong></p>        
    </div>
) 