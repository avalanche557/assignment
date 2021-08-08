/*
* Component Discription: This compoent as right side menu for the hamberger menu
* props: {
    open: boolean value to show hamburger menu or not
}
*/
import React, { FC } from 'react'
import { Ul } from './rightNav.style'
import { NAV_BAR_MENU } from '../../constants/global.constant'

interface menuType {
    href: string;
    title: string;
}

interface Props {
    open?: boolean;
}

const RightNav: FC<Props> = (props): JSX.Element => {
    return (
        <Ul open={props.open}>
            {NAV_BAR_MENU.map((item: menuType, key: number) => {
                return (
                    <li className="menuItemContainer" key={key}>
                        <a href={item.href} className="menuItem">{item.title}</a>
                    </li>
                )
            })}
        </Ul>
    )
}

export default RightNav
