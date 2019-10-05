import React from 'react';
import { NavLink } from 'react-router-dom';

const selectedStyle = {color: 'red'};

/* The context object is passed to stateless functional components as the second argument, after props */
const SortMenu = ({ match }) => {
    return (
        <nav className="menu">
           <NavLink to="/" style={{ color: match.isExact && 'red'}}>
               Date
           </NavLink>
           <NavLink to="/sort/title" activeStyle={selectedStyle}>
               Title
           </NavLink>
           <NavLink to="/sort/rating" activeStyle={selectedStyle}>
               Rating
           </NavLink>
        </nav>
    )
};

export default SortMenu;