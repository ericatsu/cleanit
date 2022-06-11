import styled from 'styled-components';

export const QuoteContainer = styled.div`
   color: #fff;
   background: linear-gradient(108deg, rgb(128, 203, 228) 0%,
       rgb(252, 253, 253) 100%);
   padding-right: 15px;
   padding-left: 15px;
   text-align: center;
`

export const Heading = styled.h1`
    font-size: 48px;
    line-height: 105px;

    @media screen and (max-width: 480px) {
            font-size: 32px;
            line-height: 85px;
    }
`

export const Slogan = styled.div`
    font-size: 30px;
    line-height: 35px;
    margin-top: 15px;

    @media screen and (max-width: 480px) {
            font-size: 14px;
            line-height: 20px;
    }
`
export const HighLight = styled.span`
    color: #910791;
`
export const NoWrap = styled.a`
    
`
export const TelNum = styled.div`
    margin: 5px 0;
    overflow: hidden;
    font-size: 95px;
    line-height: 105px;

    @media screen and (max-width: 480px) {
            font-size: 30px;
            line-height: 30px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 5px;
    padding-top: 20px;

    @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
    } 
`

export const FormSection = styled.div`
    height: 100%;
    padding: 0 15px;
    width: 33.33%;

    @media screen and (max-width: 800px) {
     width: 100%;
    }
`
export const FormImg = styled.img`
    width: 100%;
    height: 100%;
`
export const FormField = styled.div`
    width: 100%;
    margin-bottom: 10px;
`
export const FormInput = styled.input`
    width: 100%;
    height: 52px;
    font-size: 16px;
    padding: 6px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
`
export const FormTextArea = styled.textarea`
    width: 100%;
    height: 115px;
    font-size: 16px;
    padding: 6px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
`

export const QuoteBtn = styled.div`
    align-items: center;
`

export const QuoteBtnLink = styled.button`
       
`

export const Caution = styled.div`
    font-style: italic;
    text-align: center;
    top: 4px;
`


