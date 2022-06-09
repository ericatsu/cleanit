import React from 'react';
import about01 from '../assets/images/about01.png';
import about02 from '../assets/images/about02.png';
import about03 from '../assets/images/about03.png';
import about04 from '../assets/images/about04.png';
import { Profiles, ProfileItem, HeadText, BoldText, PText } from '../elements/AboutElements'

//Array for what will be on about page
const abouts = [
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about01},
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about02},
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about03},
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about04}
]

const About = () => {
  return (
    <>
    <HeadText>About Us</HeadText>
    <Profiles>
      {
        abouts.map((about, index) => (
          <ProfileItem
          whileInView={{ opacity: 1}}
          whileHover={{ scale: 1.1 }}
          transition= {{ duration: 0.5, type: 'tween'}}
          key={about.title + index}
          >
           <img src={about.imgUrl} alt={about.title} />
           <BoldText  style={{ marginTop: 20 }}>{about.title}</BoldText>
           <PText  style={{ marginTop: 10 }}>{about.description}</PText>
          </ProfileItem>
        ))
      }
    </Profiles>
    </>
  )
}

export default About