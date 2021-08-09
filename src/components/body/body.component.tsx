/*
* Component Discription: This is the main body component whic contains the all the component.
* props: {
    none
}
*/


import React from 'react'
import { AbudhabiTrackIcon, CupIcon, DistanceIcon, FlagIcon, MainImage, TileOneSubThreeBgImage, tileOneSubTwoBgImage, TileSubBFour, TimeIcon, TrackBgIcon } from '../../utils/image.util'
import InfoTiles from '../infoTiles/infoTiles.component'
import { StyledBody } from './body.style';
import { tileOneSubOneBgImage } from '../../utils/image.util';
import { INNER_TILES_ARRRANGMENT } from '../../constants/global.constant';
import Grid from '@material-ui/core/Grid';
import ScrollAnimation from 'react-animate-on-scroll';



const Body = () => {
    return (
        <StyledBody>
            <div className="BackgroundImage">
                <img src={MainImage()} className="mainImage" alt="This is the main background" />
                <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>
                    <Grid container justifyContent="center" spacing={0} className="tileContainer">
                        <Grid item xs={6} sm={4} className="gridStyle">
                            <InfoTiles
                                noOfInnerTiles={3}
                                arrangment={INNER_TILES_ARRRANGMENT.BOTTOM_TWO}
                                backgroundImage={[tileOneSubOneBgImage(), tileOneSubTwoBgImage(), TileOneSubThreeBgImage()]}
                                header={[685562, 22660, 495862]}
                                counterPrefix={["", "", " mi"]}
                                subHeader={["Grand Prixs This Week", "RaceNet events completed", "Distace Covered"]}
                                subHeaderIsUrl={[false, false, false]}
                                image={[null, FlagIcon(), DistanceIcon()]}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <InfoTiles
                                noOfInnerTiles={1}
                                arrangment={INNER_TILES_ARRRANGMENT.ONLY_ONE}
                                backgroundImage={[TrackBgIcon()]}
                                header={["Fabourite Track"]}
                                subHeader={["Abu Dhabi"]}
                                subHeaderIsUrl={[false]}
                                image={[AbudhabiTrackIcon()]}
                            />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <InfoTiles
                                noOfInnerTiles={3}
                                arrangment={INNER_TILES_ARRRANGMENT.UPPER_TWO}
                                backgroundImage={[tileOneSubTwoBgImage(), TileOneSubThreeBgImage(), TileSubBFour()]}
                                header={[259877, "4 Days 8 Hours", ""]}
                                subHeader={["Winners", "Spend Racing", "Vist F1 2018's website"]}
                                subHeaderIsUrl={[false, false, true]}
                                image={[CupIcon(), TimeIcon(), null]}
                            />
                        </Grid>
                    </Grid>
                </ScrollAnimation>
            </div>
        </StyledBody >
    )
}

export default Body
