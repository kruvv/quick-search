import React from 'react';

//This component displays the found information.
export default  props => (
    <div>
        <p><em>{props.id}</em>{props.data}<strong>{props.date}</strong></p>        
    </div>
) 