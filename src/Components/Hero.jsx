import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg,
        HeroContent, HeroBtnWrapper,HeroH1,
        HeroP, ArrowForward, ArrowRight } from '../elements/HeroElements'
import Video from '../assets/video.mp4'
import { Button } from '../elements/ButtonElements'

const Hero = () => {
    const [hover, sethover] = useState(false)
    
    const onHover = () => {
        sethover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
             <VideoBg autoPlay loop muted  src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Focus on making anywhere tidy</HeroH1>
                <HeroP>
                   Provide robust, reliable and affordable cleaning service
                   with the best customer service in the country.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='FormPopUp' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true' dark='true' smooth={true}
                        duration={500} spy={true}
                        exact='true' offset={-80}
                    >
                        Book Now {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
