import React from 'react';
import { NavLink } from 'react-router-dom';
const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}

const AboutMenu = ({match}) => <ul className="about-menu">
    <li>
        {/* The style property will be set to selectedStyle only when the route matches exactly i.e /about */}
        <NavLink to="/about" style={match.isExact && selectedStyle}>
            [Company] 
        </NavLink>
    </li>
    <li>
        <NavLink to="/about/history" activeStyle={selectedStyle}>
            [History]
        </NavLink>
    </li>
    <li>
        <NavLink to="/about/services" activeStyle={selectedStyle}>
            [Services]
        </NavLink>
    </li>
    <li>
        <NavLink to="/about/location" activeStyle={selectedStyle}>
            [Location]
        </NavLink>
    </li>
</ul>


export default AboutMenu;