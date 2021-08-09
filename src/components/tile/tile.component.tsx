/*
* Component Discription: individual tile component
* props: {
    backgroundImage: background image for tile;
    header;
    subHeader;
    image; 
    tileSize: 1= large; 2 medium; 3= small
    subHeaderIsUrl;
    counterPrefix;
}
*/
import React, { FC } from 'react'
import { TileStyle } from './tile.style'
import CountUp from 'react-countup';

interface TileProps {
    backgroundImage: any;
    header: string;
    subHeader: string;
    image: any;
    tileSize: number;
    subHeaderIsUrl: boolean;
    counterPrefix: string;
}

const Tile: FC<TileProps> = (props): JSX.Element => {
    if (props.tileSize === 1) {
        return (
            <TileStyle backgroundImage={props.backgroundImage} tileSize={props.tileSize}>
                {props.header !== null ?
                    <div className="innerHeaderLarge">{props.header}</div>
                    :
                    null
                }
                {props.subHeader !== "" ?
                    <div className="innerSubHeaderLarge">
                        {props.subHeaderIsUrl === true ?
                            <a href="#" className="link">{props.subHeader}</a>
                            :
                            <span>{props.subHeader}</span>
                        }
                    </div>
                    :
                    null
                }
                {props.image !== null ?
                    <div className='innerIconContainerLarge' >
                        <img src={props.image} className='innerIconLarge' alt="" />
                    </div>

                    :
                    null
                }
            </TileStyle>
        )
    } else {
        return (

            <TileStyle backgroundImage={props.backgroundImage} tileSize={props.tileSize}>
                {(props.image !== null) ?
                    <div className='innerIconContainer' >
                        <img src={props.image} className='innerIcon' alt="" />
                    </div>

                    :
                    null

                }
                {props.header !== "" ?
                    <div className="innerHeader">
                        {typeof props.header === 'number' ?
                            <CountUp
                                start={0}
                                end={props.header}
                                duration={2}
                                separator=","
                                suffix={props.counterPrefix}
                            />
                            :
                            <span>{props.header}</span>
                        }
                    </div>
                    :
                    <div className="blankSpace"></div>
                }
                {props.subHeader !== "" ?
                    <div className="innerSubHeader">
                        {typeof props.subHeader === 'number' ?
                            <CountUp
                                start={0}
                                end={props.subHeader}
                                duration={2}
                                separator=","
                                suffix={props.counterPrefix}
                            />
                            :
                            <span >
                                {props.subHeaderIsUrl === true ?
                                    <a href="#" className="link">{props.subHeader}</a>
                                    :
                                    <span>{props.subHeader}</span>
                                }
                            </span>
                        }
                    </div>
                    :
                    null
                }
            </TileStyle>
        )
    }
}

export default Tile
