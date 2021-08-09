/*
* Component Discription: style for the Body component.
* props: {
    none
}
*/

import styled from 'styled-components';
import { MainBackgroundImage, SecondBackground } from '../../utils/image.util';



export const StyledBody = styled.div`
    display: flex;
    
    .BackgroundImage {
        flex: 1;
        display: flex;
        background-image: url(${MainBackgroundImage()}), url(${SecondBackground()});
        background-size: 100%, 3%;
        background-repeat: no-repeat, repeat;
        flex-flow: column nowrap;
        padding-bottom: 100px;
        z-index: -100;
    }

    .mainImage {
        width: 25%;
        object-fit: fill;
        margin-left: 70%;
        padding-top: 11%;
    }

    .tileContainer {
        display: flex;
        margin-top: 15%;
        justify-content: center;
        padding-left: 10%;
        padding-right: 10%;
    }

    @media (max-width: 1080px) {
        .mainImage {
            width: 25%;
            object-fit: fill;
            margin-left: 70%;
        }
        .tileContainer {
            margin-top: 15%;
        }
    }


    @media (max-width: 800px) {
        .mainImage {
            width: 25%;
            object-fit: fill;
            margin-right: 15%;
        }
        .tileContainer {
            margin-top: 15%;
        }
    }

    @media (max-width: 450px) {
        .mainImage {
            width: 25%;
            object-fit: fill;
            margin-left: 70%;
        }

        .tileContainer {
            margin-top: 15%;
        }
    }

    @media (max-width: 380px) {
        .mainImage {
            width: 25%;
            object-fit: fill;
            margin-left: 70%;
        }
        .tileContainer {
            margin-top: 15%;
        }
    }

    .gridStyle {
        height: 200px;
        width: 200px;
    }
`
