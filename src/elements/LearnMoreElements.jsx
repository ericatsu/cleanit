import styled from "styled-components";

export const Container1 = styled.div`
    margin-top: 60px;
    background-color: rgb(255, 255, 255);
    text-align: center;
    display: block;
    padding: 40px 0;
    margin: 15px;

    &::after, ::before{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
`

export const Container = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin: 64px;
    /* margin-right: auto;
    margin-left: auto; */
    

    @media screen and (min-width: 992px){
    width: 100%;
    }

    @media screen and (min-width: 768px){
    width: 100%;
    }
`

export const Image = styled.img`
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    margin: 0 auto;
`

export const AboutH1 = styled.h1`
    margin: 15px 0 5px 0;
    color: #75adee;
    text-transform: none;
    font-weight: 400;
    font-size: 50px;

    @media screen and (max-width: 600px) {
        font-size: 34px;
        line-height: 36px;
    }
`

export const Slogan = styled.h1`
    font-size: 22px;
    line-height: 25px;
    margin-bottom: 20px;
    text-transform: uppercase;
`

export const AboutRow = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  /* text-align: left; */

  ::after{
    content: "";
    display: table;
    clear: both;
  }
`

export const AboutColumn = styled.div`
    float: left;
    width: 45%;
    padding: 15px 30px;
    text-align: left;

    @media screen and (max-width: 600px) {
    width: 100%;
    padding: 0px;
    display: block;
    margin-bottom: 20px;
  }
`

export const AboutH2 = styled.h2`
    text-transform: none;
    font-size: 26px;
    margin: 15px 0 10px 0;
    /* line-height: 2; */
`
export const AboutP = styled.p`
    padding: 0;
    margin-top: 1em;
    margin-bottom: 1em;
    line-height: 1.5;
    margin: 3px 0 10px 0;
    font-size: 16px;
`

export const AboutSection = styled.div`
    margin-top: 20px;
`
export const AboutTitle = styled.h1`
    
`
export const AboutCompanyRow = styled.div`
    margin: 0 -5px;

    ::after{
    content: "";
    display: table;
    clear: both;
    }
`

export const AboutCompanyColumn = styled.div`
    float: left;
    width: 25%;
    padding: 0 10px;

    @media screen and (max-width: 600px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
`

export const AboutCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
`
export const AboutImage = styled.img`
    background-color: red;
`

export const AboutNaming = styled.h3`
    background-color: gold;
`

export const AboutPosition = styled.h4`
    background-color: green;
`