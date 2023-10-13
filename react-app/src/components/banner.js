import React from "react";

import './../styles/components/banner.scss';

function Banner(props) {
    return (
      <div className="banner">
        <div className="overlay"></div>
        <img src={props.imgSrc} alt="Banniere" />
        {props.bannerTitle ? <h1>{props.bannerTitle}</h1> : null}
      </div>
    );
}


export default Banner;