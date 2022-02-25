import styled from "styled-components";


export const BookBody = styled.div`
    display: flex;
    margin-top: 60px;
    padding: 40px 0;
    justify-content: center;
    align-items: center;
    background-color: white;
`

export const BookContainer = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    ::before{
     display: table;
     content: " ";
    }

    @media screen and (min-width: 992px) {
        width: 970px;
    } 

    @media screen and (min-width: 768px) {
        width: 750px;
    } 
`
export const BookSvg = styled.svg`
    display: block;
    overflow: visible;
    margin: 0 auto!important;
    padding: 0!important;
`

export const BookHeading = styled.h1`
    font-weight: 400;
    padding: 0;
    margin: 15px 0 5px 0;
    text-transform: uppercase;

    @media screen and (max-width: 1199px){
        font-size: 55px;
        line-height: 60px;
    }
`

export const BookDef = styled.div`
   font-size: 22px;
   line-height: 25px;
   margin-bottom: 20px;
   text-transform: uppercase;
`

export const CallDiv = styled.div`
   
`

export const BookTel = styled.a`
    
`

export const TelTalk = styled.div`
    
`

export const BookRow = styled.div`

`
