/*
* Component Discription: This the footer component.
* props: {
    none
}
*/
import React from 'react'
import { FooterLeftIcon, FooterRightIcon } from '../../utils/image.util'
import { Footerdiv } from './footer.style'

const Footer = () => {
    return (
        <Footerdiv>
            <img src={FooterLeftIcon()} className="RightIcon" alt="" />
            <div className="MiddleIcon"> 2019 CODEMASTERS, LICENSED BY FORMULA ONE WORLD CHAMPIONSHIP LTD AND ITS AFFILIATES</div>
            <img src={FooterRightIcon()} className="LeftIcon" alt=""/>
        </Footerdiv>
    )
}

export default Footer
