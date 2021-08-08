
/*
* Component Discription: style for right menu
* props: {
    backgroundImage: any;
    tileSize: decide the size of the tile;
}
*/
import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../constants/global.constant';

type props = {
    backgroundImage: any;
    tileSize: number;
};

export const TileStyle = styled.div<props>`
    background-image: ${(props: props) => props.backgroundImage ? `url(${props.backgroundImage})` : ''};
    height: 100%;
    width: ${(props: props) => props.tileSize === 3 ? '50%': '100%'};
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;


    .innerHeader {
        color: ${COLOR.WHITE};
        font-size: ${(props: props) => props.tileSize === 2 ? FONT_SIZE.HEADER_ONE : FONT_SIZE.HEADER_FOUR};
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .innerSubHeader {
        color: ${COLOR.WHITE};
        font-size: ${(props: props) => props.tileSize === 2 ? FONT_SIZE.HEADER_THREE : FONT_SIZE.HEADER_FIVE};
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .innerIcon {
        width: 35%;
    }
    .innerIconContainer{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .innerHeaderLarge {
        color: ${COLOR.WHITE};
        font-size: ${(FONT_SIZE.HEADER_THREE)};
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .innerSubHeaderLarge {
        color: ${COLOR.WHITE};
        font-size: ${(FONT_SIZE.HEADER_ONE)};
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .innerIconLarge {
        width: 80%;
    }
    .innerIconContainerLarge{
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .blankSpace{
        height: 70%
    }

    .link{
        color: ${COLOR.WHITE};
        text-decoration: underline;
    }
`