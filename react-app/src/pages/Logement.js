import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import PageFooter from '../components/page-footer';
import PageHeader from '../components/page-header';
import Error from '../pages/Error';
import LogementBanner from '../components/logement-banner';
import logementsList from '../annonces.json';
import ArrowBanner from '../components/arrow-banner';
import LogementTitle from '../components/logement-title';
import LogementHost from '../components/logement-host';
import Tag from '../components/tag';
import Rate from '../components/rate';
import Info from '../components/info';

import '../styles/pages/logement.scss';

function Logement() {
    const {id} = useParams();
    const logement = logementsList.find(logement => logement.id === id);
    const [activeBanner, setActiveBanner] = useState(0);

    if(!logement) {
        return <Error />;
    }

    const logementPictures = logement.pictures;
    const rates = [1, 2, 3, 4, 5];

    const onNextBanner = () => {
        if(activeBanner === logementPictures.length - 1) {
            setActiveBanner(0);
        } else {
            setActiveBanner(activeBanner + 1);
        }
    }

    const onPreviousBanner = () => {
        if(activeBanner === 0) {
            setActiveBanner(logementPictures.length - 1);
        } else {
            setActiveBanner(activeBanner - 1);
        }
    }

    return (
        <div className='logement-profile'>
            <PageHeader />
            <main className='logement'>
                <div className="logement-banner">
                    <ArrowBanner 
                    onClick={onPreviousBanner} 
                    className={ logementPictures.length > 1 
                        ? "arrow-left fa-solid fa-chevron-left" 
                        : null } />
                    <ArrowBanner 
                    onClick={onNextBanner} 
                    className={ logementPictures.length > 1 
                        ? "arrow-right fa-solid fa-chevron-right" 
                        : null } />
                    {logementPictures.map((e, index) => (
                        <LogementBanner  
                        className={`img-banner ${
                            index === activeBanner ? "active-banner" : ""
                        }`}
                        key={index} imgSrc={e} />
                        )
                    )}
                    <span className='counter'>
                        {logementPictures.length > 1
                            ? `${activeBanner + 1}/${logementPictures.length}`
                            : null
                        }
                    </span>
                </div>
                <div className='logement-info'>
                    <div className='logement-title-and-tags'>
                        <LogementTitle key={logement.title} title={logement.title} location={logement.location} />
                        <div className='tags'>
                            {logement.tags.map((tag, index) => (
                                <Tag key={index} label={tag} />
                            ))}
                        </div>
                    </div>
                    <div className='host-and-rate'>
                        <LogementHost key={logement.host.name} name={logement.host.name} picture={logement.host.picture} />
                        <div className='rates'>
                            {rates.map((rate, index) => (
                                <Rate key={index} color={parseInt(logement.rating) >= rate ? "colored" : ""}  />
                            ))}
                        </div>
                    </div>
                </div>
                <ul className='description-and-equipments'>
                    <Info key="description" label="Description" description={logement.description} className="description-info" openByDefault={false} />
                    <Info key="equipement" label="Équipements" className="equipment-info" description={logement.equipments.map((equipement, index) => (
                        <span key={index} >{equipement}</span>
                    ))} openByDefault={false} />
                </ul>
            </main>
            <PageFooter />
        </div>
    );
}

export default Logement;