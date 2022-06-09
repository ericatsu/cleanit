import React, { useState, useEffect} from 'react'
import { BoldText, PText, ServiceProfiles, ServiceProfilesItem, ServicesContainer, ServicesH1 } from '../elements/ServicesElement'
import about01 from '../assets/images/about01.png';
import about02 from '../assets/images/about02.png';
import about03 from '../assets/images/about03.png';
import about04 from '../assets/images/about04.png';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

const services = [
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about01},
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about02},
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about03},
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about04},
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about01},
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about02},
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about03},
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about04},
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about01},
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about02}
]

const Services = () => {
    return (
        <>
    
            <ServicesH1>Our Services</ServicesH1>
            <ServiceProfiles>
                {
                    services.map((service, index) =>(
                    <ServiceProfilesItem
                    whileInView={{ opacity: 1}}
                    whileHover={{ scale: 1.1 }}
                    transition= {{ duration: 0.5, type: 'tween'}}
                    key={service.title + index}
                    >
                        {/* Put call and quote icons on image when hover */}
                    <img src={service.imgUrl} alt={service.title} />
                   <BoldText style={{ marginTop: 20 }}>{service.title}</BoldText>
                   <PText  style={{ marginTop: 10 }}>{service.description}</PText>
                 </ServiceProfilesItem>
                    ))
                }
            </ServiceProfiles>
            
        
    </>
    )
}

export default Services;
