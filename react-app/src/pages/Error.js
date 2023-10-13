import React from 'react';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';
import ErrorSection from '../components/error-section';

import '../styles/pages/error.scss';

function Error() {
    return (
        <div className='error'>
            <PageHeader />
            <main className='error-main'>
                <ErrorSection />
            </main>
            <PageFooter />
        </div>
    )
}

export default Error;