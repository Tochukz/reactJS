import React from 'react';

import MainMenu from './main-menu';

import '../styles/pages.scss';

const PageTemplate = ({children}) => <div className="page">
  <MainMenu />
  {children}
</div>

export default PageTemplate;
