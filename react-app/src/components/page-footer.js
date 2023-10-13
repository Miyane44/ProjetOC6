import React from 'react';

import logoFooter from '../../src/assets/logo-footer.svg';

import '../styles/components/page-footer.scss';

function PageFooter(props) {
    return (
        <footer className={`page-footer ${props.className}`}>
          <img src={logoFooter} className="footer-logo" alt="logo" />
          <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default PageFooter;