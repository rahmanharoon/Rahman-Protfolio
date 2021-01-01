import React, {useState} from 'react';
import Video from '../../vedios/home_vedio.mp4';
import { Button } from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg> 
                <VideoBg autoPlay loop muted src={Video} type = 'video/mp4' />
            </HeroBg>    
            <HeroContent>
                <HeroH1>HeLoO...I am Rahman Haroon</HeroH1>
                <HeroP>I'm a Full-stack developer from India</HeroP>  
                <HeroBtnWrapper>
                    <Button 
                        to="about" 
                        onMouseEnter = {onHover} 
                        onMouseLeave = {onHover} 
                        primary = "true"
                        dark = "true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                    Lets GoOo..!
                    { 
                    hover ? 
                    <ArrowForward /> 
                    : 
                    <ArrowRight /> 
                    }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
