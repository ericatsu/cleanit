import styled from "styled-components";
import { motion } from "framer-motion";

export const ServicesContainer = styled.div`
 height: 450px;
 /* display: flex;
 flex-direction: column; */
 justify-content: center;
 align-items: center;
 background: #F9F9F9;
 width: 100%;
 text-align: center;

 @media screen and (max-width: 768px){
     height: 800px;
 }

 @media screen and (max-width: 620px){
     height: 1300px;
 }
`

export const ServicesFilter = styled.div`
   
`

export const ServicesFilterItem = styled.div`
 
`

export const ServicesPortfolio = styled(motion.div)`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #3598FF;
  margin-bottom: 64px;

  @media screen and (max-width: 480px){
      font-size: 2rem;
  }
`
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`

