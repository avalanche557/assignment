/*
* Component Discription: Style for hambrger menu.
* props: {
    none
}
*/
import styled from 'styled-components';
import { COLOR } from '../../constants/global.constant';


type props = {
    open?: boolean;
};

export const HamBurger = styled.div<props>`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 20;
    display: none;

    @media (max-width: 760px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${(props: props) => props.open ? COLOR.GREY : COLOR.WHITE};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear ;

        &:nth-child(1) {
            transform: ${(props: props) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${(props: props) => props.open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${(props: props) => props.open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${(props: props) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

   
`