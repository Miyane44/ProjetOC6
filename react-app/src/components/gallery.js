import React from "react";

import logementsList from '../annonces.json';
import Card from "./card";

import './../styles/components/gallery.scss';

function Gallery() {
    return (
      <div className="gallery">
        {logementsList.map((e) => (
            <Card key={e.id} id={e.id} title={e.title} cover={e.cover} />
        ))}
      </div>
    );
}


export default Gallery;