import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    height: 80px;
    background: ${({ scrollNav }) => (scrollNav ? '#3598FF' : 'transparent')};
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100vw;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavBarContainter = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    /* margin-left: 10px; */
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 786px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`

export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-right: -50px;
   

   @media screen and (max-width: 769px) {
       display: none;
   }
`
export const NavItem = styled.li`
   height: 80px;
`
export const NavLinks = styled(LinkS)`
   color: #fff;
   display: flex;
   align-items: center;
   text-align: none;
   text-decoration: none;
   padding: 0.5rem 1rem;
   height: 100%;
   cursor: pointer;

   &.active{
     border-bottom: 3px solid #01bf71;
   }
`
export const NavResume = styled(LinkR)`
   color: #fff;
   display: flex;
   align-items: center;
   text-align: none;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;

   &.active{
     border-bottom: 3px solid #01bf71;
   }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  margin-right: -20px;

  

  @media screen and (max-width: 768px){
      display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 6px;
  background: #7fe2f3;
  white-space: nowrap;
  padding: 15px 32px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #010606;
  }
`