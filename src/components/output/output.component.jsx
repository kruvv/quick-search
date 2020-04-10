import React from 'react';
import './output.style.css'

//This component displays the found information.
export default  props => (
    <div className='out'>
        <p className='outputSearch'>userId:{props.userId}&nbsp;-&nbsp;id:{props.id}</p>
        <p className='outputSearch'>Title:&nbsp;<strong>{props.title}</strong></p>
        <p className='outputSearch'>Document:&nbsp;{props.body}</p>       
    </div>
) 