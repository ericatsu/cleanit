import styled from "styled-components";

export const Container1 = styled.div`
    margin-top: 60px;
    background-color: rgb(255, 255, 255);
    text-align: center;
    display: block;
    padding: 40px 0;
    margin: 15px;

    &:after, :before{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
`

export const Container = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    

    @media (min-width: 992px){
    width: 970px;
    }

    @media (min-width: 768px){
    width: 750px;
    }
`

export const Image = styled.img`
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    margin: 0 auto;
`

export const AboutH1 = styled.h1`
    text-align: center;
    display: block;
    margin: 15px 0 5px 0;
    color: #75adee;
    text-transform: none;
    font-weight: 400;
    font-size: 50px;
`

export const Slogan = styled.h1`
    font-size: 22px;
    line-height: 25px;
    margin-bottom: 20px;
    text-transform: uppercase;
`

export const AboutRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
`

export const AboutColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    padding-right: 50px;
    background-color: blue;
    float: left;
    padding-right: 50px;
`

export const AboutColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    padding-right: 50px;
    background-color: blue;
    float: left;
    padding-left: 50px;
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

export const AboutCompany = styled.div`
    
`