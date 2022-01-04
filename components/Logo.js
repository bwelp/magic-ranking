import React from 'react';

import './Logo.css';
import logo from '../img/MTGLogoweiss.jpg';

function Logo() {
    return (
        <span>
            <img src={logo} alt="Magic the Gathering" id="logo"></img>
        </span>
    )
}

export default Logo;

