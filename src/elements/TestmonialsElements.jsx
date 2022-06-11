import styled from "styled-components";

export const Cont = styled.div`
    
`

export const TestiContainer = styled.div`
  width: 60%;
  min-height: 320px;
  background-color: var(--white-color);
  display: flex;
  flex-direction: row;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);

  transition: all 0.3s ease-in-out;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  @media screen and (min-width: 2000px) {
    min-height: 450px;

    img {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (max-width: 850px) {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`
export const TestiFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TestiContent = styled.div`
  flex: 1;
  height: 100%;
  padding: 0 2rem;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  @media screen and (max-width: 600px) {
    margin-top: 2rem;
    padding: 0;
  }
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
    margin-top: 2rem;
`

export const TestiLoc = styled.h5`
    font-weight: 400;
    color: #726e6e;
    margin-top: 5px;
`


export const TestiBtns = styled.div`
  flex-direction: row;
  margin-top: 1rem;

  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--white-color);

    margin: 1rem;
    transition: all 0.3s ease-in-out;

    svg {
      width: 20px;
      height: 20px;
      color: var(--secondary-color);
    }

    &:hover {
      background-color: var(--secondary-color);

      svg {
        color: var(--white-color);
      }
    }

    @media screen and (min-width: 2000px) {
      width: 100px;
      height: 100px;

      svg {
        width: 45px;
        height: 45px;
      }
    }
  }
`

