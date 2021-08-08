/*
* Component Discription: This the hamburger menu for mobile view. depends on the size of the screen
* props: {
    none
}
*/

import React, { useState } from 'react'
import RightNav from '../rightNav/rightNav.component';
import { HamBurger } from './hamburger.style'

const HamburgerIcon = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <HamBurger open={open} onClick={() => { setOpen(!open) }}>
                <div />
                <div />
                <div />
            </HamBurger>
            <RightNav open={open}/>
        </>
    )
}

export default HamburgerIcon
