import React, { useState, useEffect} from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper,ServicesCard, ServicesIcon, ServicesH2,ServicesP, ServicesPortfolio } from '../elements/ServicesElement'
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
  { title: 'Mission & Vission', description: 'The Company mission', imgUrl: about04}
]

const Services = () => {
  const [services, setServices] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(services);
      } else {
        setFilterWork(services.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

    return (
        <>
        <ServicesContainer id="Services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesFilter>
                {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <ServiceFilterItem
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </ServiceFilterItem>
           ))}
        </ServicesFilter>
            
                <ServicesPortfolio
                  animate={animateCard}
                  transition={{ duration: 0.5, delayChildren: 0.5 }}
                >
            {filterWork.map((service, index) => (
            <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={service.imgUrl} alt={service.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={service.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={service.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{service.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{service.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{service.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </ServicesPortfolio>
        </ServicesContainer>
    </>
    )
}

export default Services;
