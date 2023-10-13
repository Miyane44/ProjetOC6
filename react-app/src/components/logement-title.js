import React from 'react';

import '../styles/components/logement-title.scss';

function LogementTitle(props) {
    return (
        <div className='logement-title-infos'>
            <h2 className='logement-title'>{props.title}</h2>
            <span className='logement-location'>{props.location}</span>
        </div>
    )
}

export default LogementTitle;