/*
* Component Discription: style for tile info component.
* props: {
    none
}
*/
import styled from 'styled-components';

type props = {};

export const TileStyle = styled.div<props>`
    display: flex;
    justify-content: center;
    height: 300px;

    .componentContainer {
        height: 100%;
        width: 100%;

    }
    .upper{
        height: 50%;
    }
    .lower{
        height: 50%;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
    }
`