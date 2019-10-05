import React from 'react';
import { Route } from 'react-router-dom';

import PageTemplate from '../../components/page-template';
import AboutMenu from '../../components/about-menu';
import Company from './company';
import History from './history';
import Services from './services';
import Location from './location';

const About = ({match}) => <PageTemplate>
    <section className="about">
      {/*The first route will always display the AboutMenu. Additionally, any other Routes that match will render their componentsas well */}
      <Route component={AboutMenu} />
      <Route exact path="/about" component={Company} />
      <Route path="/about/history" component={History} />
      <Route path="/about/services" component={Services} />
      <Route path="/about/location" component={Location} />
    </section>
</PageTemplate>

export default About;
