/*
* Component Discription: Style for the footer component
* props: {
    none
}
*/

import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../constants/global.constant';

type props = {
};

export const Footerdiv = styled.div<props>`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: 55px;
    background-color: ${COLOR.BLACK};
    justify-content: space-between;

    .RightIcon{
        height: 35px;
        padding: 10px;
        object-fit: cover;
    }

    .MiddleIcon{
        diplay: flex;
        justify-content: flex-start;
        color: ${COLOR.WHITE};
        font-size: ${FONT_SIZE.HEADER_SIX};
        padding-top: 1.5%;
        text-align: center;
    }

    .LeftIcon {
        height: 40px;
        padding: 5px;
    }
`