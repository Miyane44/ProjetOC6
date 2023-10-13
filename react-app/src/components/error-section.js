import React from 'react';

import '../styles/components/error-section.scss';

function ErrorSection() {
    return (
        <div className='error-section'>  
            <p className='error-code'>404</p>
            <p className='error-message'>Oups! La page que vous demandez n'existe pas</p>
            <div className='error-link'>
                <a href='/'>Retourner sur la page d'accueil</a>
            </div>
        </div>
    )
}

export default ErrorSection;