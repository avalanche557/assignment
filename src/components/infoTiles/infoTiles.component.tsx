/*
* Component Discription: This compoent is used to make info tiles Continer in the body. Can pass props to decide the arrangment of the tiles.
* props: {
    noOfInnerTiles: number of tiles to be shown in a group;
    arrangment: check global constant file for the arrangment of the tiles;
    header: array of string or number (size of array === no of tiles) pass empty string for no header;
    subHeader: array of string or number (size of array === no of tiles) pass empty string for no sub header;
    backgroundImage: array of function for the background image (size of array === no of tiles) pass null for no background;
    image: array of function for the center image (size of array === no of tiles) pass null for no image;
    subHeaderIsUrl: array of boolean value to check if the subheader is a url oer not (size of array === no of tiles);
    counterPrefix?: array of string for prefix to the header (size of array === no of tiles) pass null for no background;
}
*/

import React, { FC } from 'react';
import Tile from '../tile/tile.component';
import { TileStyle } from './infoTiles.style';
import { INNER_TILES_ARRRANGMENT } from '../../constants/global.constant';



interface Props {
    noOfInnerTiles: number;
    arrangment: string;
    header: any[];
    subHeader: any[];
    backgroundImage: string[];
    image: any[];
    subHeaderIsUrl: boolean[];
    counterPrefix?: string[]
}


const InfoTiles: FC<Props> = (props): JSX.Element => {
    if (props.arrangment === INNER_TILES_ARRRANGMENT.BOTTOM_TWO) {
        return (
            <TileStyle>
                <div className="componentContainer">
                    <div className='upper'>
                        <Tile tileSize={2} backgroundImage={props.backgroundImage[0]} header={props.header[0]} subHeader={props.subHeader[0]} image={props.image[0]} subHeaderIsUrl={props.subHeaderIsUrl[0]} counterPrefix={props.counterPrefix ? props.counterPrefix[0] : ""}  />
                    </div>
                    <div className="lower">
                        <Tile tileSize={3} backgroundImage={props.backgroundImage[1]} header={props.header[1]} subHeader={props.subHeader[1]} image={props.image[1]}  subHeaderIsUrl={props.subHeaderIsUrl[1]} counterPrefix={props.counterPrefix ? props.counterPrefix[1] : ""}/>
                        <Tile tileSize={3} backgroundImage={props.backgroundImage[2]} header={props.header[2]} subHeader={props.subHeader[1]} image={props.image[2]}  subHeaderIsUrl={props.subHeaderIsUrl[2]} counterPrefix={props.counterPrefix ? props.counterPrefix[2] : ""}/>
                    </div>
                </div>
            </TileStyle>
        )
    }
    if(props.arrangment === INNER_TILES_ARRRANGMENT.UPPER_TWO) {
        return(
            <TileStyle>
                <div className="componentContainer">
                <div className="lower">
                        <Tile tileSize={3} backgroundImage={props.backgroundImage[0]} header={props.header[0]} subHeader={props.subHeader[0]} image={props.image[0]}  subHeaderIsUrl={props.subHeaderIsUrl[0]} counterPrefix={props.counterPrefix ? props.counterPrefix[0] : ""}/>
                        <Tile tileSize={3} backgroundImage={props.backgroundImage[1]} header={props.header[1]} subHeader={props.subHeader[1]} image={props.image[1]} subHeaderIsUrl={props.subHeaderIsUrl[1]} counterPrefix={props.counterPrefix ? props.counterPrefix[1] : ""} />
                    </div>
                    <div className='upper'>
                        <Tile tileSize={2} backgroundImage={props.backgroundImage[2]} header={props.header[2]} subHeader={props.subHeader[2]} image={props.image[2]} subHeaderIsUrl={props.subHeaderIsUrl[2]}  counterPrefix={props.counterPrefix ? props.counterPrefix[2] : ""}/>
                    </div>
                    
                </div>
            </TileStyle>
        )

    }
    if(props.arrangment === INNER_TILES_ARRRANGMENT.ONLY_ONE) {
        return(
            <TileStyle>
                <div className="componentContainer">
                <Tile tileSize={1} backgroundImage={props.backgroundImage[0]} header={props.header[0]} subHeader={props.subHeader[0]} image={props.image[0]} subHeaderIsUrl={props.subHeaderIsUrl[0]} counterPrefix={props.counterPrefix ? props.counterPrefix[1] : ""} />
                {/* <div className="lower">
                        <Tile tileSize={3} backgroundImage={props.backgroundImage[0]} header={props.header[0]} subHeader={props.subHeader[0]} image={props.image[0]} />
                        <Tile tileSize={3} backgroundImage={props.backgroundImage[1]} header={props.header[1]} subHeader={props.subHeader[1]} image={props.image[1]} />
                    </div>
                    <div className='upper'>
                        <Tile tileSize={2} backgroundImage={props.backgroundImage[2]} header={props.header[2]} subHeader={props.subHeader[2]} image={props.image[2]} />
                    </div>
                     */}
                </div>
            </TileStyle>
        )

    }
    return (<div />)
}

export default InfoTiles