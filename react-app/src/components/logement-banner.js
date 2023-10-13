import React from 'react';

import '../styles/components/logement-banner.scss';

function LogementBanner(props) {
    return (
        <img className={props.className} src={props.imgSrc} alt="Banniere" />
      );
}

export default LogementBanner;