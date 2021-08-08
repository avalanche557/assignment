/*
* Component Discription: style for right menu
* props: {
    open: boolean value to show hamburger menu or not
}
*/
import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../constants/global.constant';

type props = {
    open?: boolean;
  };

export const Ul = styled.ul<props>`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 0px;

    @media (max-width: 760px) {
        flex-flow: column nowrap;
        background-color: ${COLOR.RED};
        position: fixed;
        transform: ${(props: props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 200px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
    }

    .menuItem{
        color: ${COLOR.WHITE};
        font-size: ${FONT_SIZE.HEADER_THREE};
        color: ${COLOR.WHITE};
        font-weight: 600;
        
    }

    .menuItemContainer {
        hight: 55px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 15px;
        padding-right: 15px;

    }

    .menuItemContainer:hover {
        color: ${COLOR.GREY};
        background-color: black;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 15px;
        padding-right: 15px;
        transition: 0.5s;
    }



`