import React from 'react';
import Vedio from "../../vedios/home_vedio.mp4";
import { HeroContainer, HeroBg, VedioBg } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg> 
                <VedioBg autoPlay loop muted src={Vedio} type = 'vedio/mp4' />
            </HeroBg>    
        </HeroContainer>

    )
}

export default HeroSection
