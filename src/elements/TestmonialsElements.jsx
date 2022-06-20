import styled from "styled-components";

export const Testimonial = styled.section`
  
`

export const TestiContainer = styled.div`
  /* max-width: 1000px; */
  position: relative;
  margin: auto;
  background: #0c0c0c;
`

export const TestiHead = styled.div`
  
`

export const TestiBg = styled.div`
  
`

export const ImgBg = styled.img`
  width:100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const TestiContent = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: fade;
  animation-duration: 1.5s;
  opacity: 0.4 to 1;
  text-align: center;
`

export const TestiFeedback = styled.p`
    font-size: 1.25rem;
    line-height: 2rem;
    font-family: 400;

    @media screen and (min-width: 2000px) {
      font-size: 2rem;
      line-height: 3.5rem;
    }
`

export const TestiName = styled.h4`
    font-weight: 600;
    color: #5959e6;
    margin-top: 8rem;
    position: absolute;
    margin: 8rem 16rem 0rem 16rem;
`

export const TestiLoc = styled.h5`
    font-weight: 400;
    color: #726e6e;
    margin-top: 5px;
`

export const TestiPrev = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;

  &:hover{
    background-color: rgba(0,0,0,0.8);
  }
`

export const TestiNext = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 3px 0 0 3px;
  user-select: none;
  right: 0;

  &:hover{
    background-color: rgba(0,0,0,0.8);
  }
`