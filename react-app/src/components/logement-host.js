import React from 'react';

import '../styles/components/logement-host.scss';

function LogementHost(props) {
    return (
        <div className='logement-host'>
            <span className='host-name'>{props.name}</span>
            <img src={props.picture} className='host-picture' alt={props.name} ></img>
        </div>
    )
}

export default LogementHost;