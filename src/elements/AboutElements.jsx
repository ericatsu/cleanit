import styled from "styled-components";
import { motion } from 'framer-motion';

export const HeadText = styled.h2`
   font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  color: #7d0588;
  text-transform: capitalize;

  @media screen and (min-width: 2000px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
`

export const Profiles = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 1rem;
`

export const ProfileItem = styled(motion.div)`
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