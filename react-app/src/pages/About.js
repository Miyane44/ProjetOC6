import React from 'react';

import bannerImage from '../assets/about-banner.png'
import Banner from '../components/banner';
import PageFooter from '../components/page-footer';
import PageHeader from '../components/page-header';
import Infos from '../components/infos';

import '../styles/pages/about.scss';

function About() {
    return (
        <div className='about'>
          <PageHeader />
          <main className='about-main'>
            <Banner
                imgSrc={bannerImage}
            />
            <Infos />
          </main>
          <PageFooter />
        </div>
    );
}


export default About;