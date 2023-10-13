import React from 'react';

import PageHeader from '../components/page-header';
import Banner from '../components/banner';
import PageFooter from '../components/page-footer';
import Gallery from '../components/gallery';
import bannerImage from '../assets/home-banner.png';

import '../styles/pages/home.scss';

function Home() {
    return (
            <div className="home">
                <PageHeader />
                <main>
                    <Banner
                    imgSrc={bannerImage}
                    bannerTitle="Chez vous, partout et ailleurs" 
                    />
                    <Gallery />
                </main>
                <PageFooter />
            </div>
    );
}

export default Home;