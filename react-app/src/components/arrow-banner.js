import React from "react";

import '../styles/components/arrow-banner.scss';

function ArrowBanner(props) {
    return (
        <i onClick={props.onClick} className={props.className}></i>
    );
}

export default ArrowBanner;