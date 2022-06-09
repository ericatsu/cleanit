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

export const ServiceProfiles = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 1rem;
`

export const ServiceProfilesItem = styled(motion.div)`
  width: 190px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 2rem;

  img {
    width: 100%;
    height: 170px;
    border-radius: 15px;
    object-fit: cover;
  }

  @media screen and (min-width: 2000px) {
    width: 370px;
    margin: 2rem 4rem;

    img {
      height: 320px;
    }
  }
`


export const BoldText = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  color: var(--black-color);
  text-align: left;

  @media screen and (min-width: 2000px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 0.9rem;
  }
`
export const PText = styled.p`
  font-size: 0.8rem;
  text-align: left;
  color: var(--gray-color);
  line-height: 1.5;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem;
  }
`

export const ServicesFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  margin: 4rem 0 2rem;
`

export const ServicesFilterItem = styled.div`
  padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    color: #000;
    font-weight: 800;

    cursor: pointer;
    transition: all 0.3s ease;
    margin: 0.5rem;

    &:hover {
      background-color: var(--secondary-color);
      color: #fff;
    }

    @media screen and (min-width: 2000px) {
      padding: 1rem 2rem;
      border-radius: 0.85rem;
    }
`

// export const ServicesPortfolio = styled(motion.div)`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
// `

// export const ServiceItem = styled.div`
//   width: 270px;
//     flex-direction: column;

//     margin: 2rem;
//     padding: 1rem;
//     border-radius: 0.5rem;
//     background-color: #fff;
//     color: #000;

//     cursor: pointer;
//     transition: all 0.3s ease;

//     &:hover {
//       box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
//     }

//     @media screen and (min-width: 2000px) {
//       width: 470px;
//       padding: 1.25rem;
//       border-radius: 0.75rem;
//     }

//     @media screen and (max-width: 300px) {
//       width: 100%;
//       margin: 1rem;
//     }
// `

// export const ServiceImgWrap = styled.div`
//   width: 100%;
//   height: 230px;

//   position: relative;

//   @media screen and (min-width: 2000px) {
//     height: 350px;
//   }
// `
// export const ServiceImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 0.5rem;
//   object-fit: cover;
// `
// export const ServiceHover = styled(motion.div)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   border-radius: 0.5rem;
//   opacity: 0;
//   transition: all 0.3s ease;
// `







export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #3598FF;
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 480px){
      font-size: 2rem;
  }
`
// export const ServicesH2 = styled.h2`
//   font-size: 1rem;
//   margin-bottom: 10px;
// `

// export const ServicesP = styled.p`
//   font-size: 1rem;
//   text-align: center;
// `

