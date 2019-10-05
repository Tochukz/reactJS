import React from 'react';
import { NavLink } from 'react-router-dom';
//import { MdHome } from 'react-icons/md';
//import { TiHome } from "react-icons/ti";
import { FaHome } from 'react-icons/fa';

import '../styles/menu.scss';

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
} 

const MainMenu = () => <nav className="main-menu">
    <NavLink to="/">
      <FaHome />
    </NavLink>
    <NavLink to="/about" activeStyle={selectedStyle}>
        [About]
    </NavLink>
    <NavLink to="/events" activeStyle={selectedStyle}>
        [Events]
    </NavLink>
    <NavLink to="/products" activeStyle={selectedStyle}>
        [Products]
    </NavLink>
    <NavLink to="/contact" activeStyle={selectedStyle}>
        [Contact Us]
    </NavLink>
    <NavLink to="/user/Chucks/Male/Cape Town" activeStyle={selectedStyle}>
        [User]
    </NavLink>
</nav>

export default MainMenu;