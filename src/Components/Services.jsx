import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper,
        ServicesCard, ServicesIcon, ServicesH2,
    ServicesP } from '../elements/ServicesElement'
import webdev from '../assets/images/webdev.svg'
import appdev from '../assets/images/appdev.svg'
import other from '../assets/images/other.svg'

const Services = () => {
    return (
        <ServicesContainer id="Services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={webdev}/>
                    <ServicesH2>House Cleaning</ServicesH2>
                    <ServicesP>Develop a website for your businesses and organizations.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={appdev} />
                    <ServicesH2>Public Cleansing</ServicesH2>
                    <ServicesP>We specialize in mobile app design and development.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={other} />
                    <ServicesH2>Others</ServicesH2>
                    <ServicesP>We offer other services as well. Lorem ipsum dolor ?</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={webdev}/>
                    <ServicesH2>House Cleaning</ServicesH2>
                    <ServicesP>Develop a website for your businesses and organizations.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={appdev} />
                    <ServicesH2>Public Cleansing</ServicesH2>
                    <ServicesP>We specialize in mobile app design and development to create.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={other} />
                    <ServicesH2>Others</ServicesH2>
                    <ServicesP>We offer other services as well. Lorem ipsum dolort huet jsit?</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
