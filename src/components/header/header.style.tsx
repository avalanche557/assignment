/*
* Component Discription: style for header component.
* props: {
    none
}
*/
import styled from 'styled-components';
import { COLOR } from '../../constants/global.constant';

export const Nav = styled.nav`
    width: 100%;
    height: 55px;
    background-color: ${COLOR.RED};
    display: flex;
    justify-content: space-between;

    .logo {
        padding: 15px 0;
        height: 1.5rem;
        object-fit: cover;
    }
`

export const Border = styled.nav`
    height: 5px;
    background-color: ${COLOR.GREY};
    margin-left: 5%;
    margin-right: 5%;
`