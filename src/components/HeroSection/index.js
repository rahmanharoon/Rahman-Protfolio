import React from 'react'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg> 
                <VedioBg autoPlay loop muted src={vedio} type = 'vedio/mp4' />
            </HeroBg>    
        </HeroContainer>

    )
}

export default HeroSection
