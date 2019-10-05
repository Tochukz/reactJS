import React from 'react';
import { Link } from 'react-router-dom';

const CompanyNavigation = () => <nav style={{width: '1080px', margin: '10px auto'}}>
  <Link to="/"> Home |</Link>
  <Link to="about"> About |</Link>
  <Link to="events"> Events |</Link>
  <Link to="products"> Products | </Link>
  <Link to="contact"> Contact Us</Link>
</nav>

export default CompanyNavigation;