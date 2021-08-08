/*
* Component Discription: This is Header component.Wrapper for normal Nav Bar and Nav Bar Menu.
* props: {
    none
}
*/
import React from 'react';
import { Nav, Border } from './header.style';
import { NavLogo } from '../../utils/image.util'

import HamburgerIcon from '../hamburger/hamburger.component';


const NavBar = () => {
    return (
        <div>
            <Nav>
                <div className="logoContainer">
                    <img src={NavLogo()} className="logo" alt="" />
                </div>
                <HamburgerIcon />
            </Nav>
            <Border/>
        </div>


    )
}


export default NavBar;