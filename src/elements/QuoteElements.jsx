import styled from 'styled-components';

export const QuoteContainer = styled.div`
   
   color: #fff;
   background: linear-gradient(108deg, rgb(128, 203, 228) 0%,
       rgb(252, 253, 253) 100%);
   padding-right: 15px;
   padding-left: 15px;
   text-align: center;

   /* @media screen and (max-width: 767px){
        padding: 40px 0;
    } */
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
    background-color: #641364;
    margin-right: 10px;
    margin-left: 10px;
`

export const FormSections = styled.div`
    width: 100%;
    height: 150px;

   &::before{
        content: " ";
        clear: both;
        display: table;
    }
`
export const FormSection = styled.div`
    position: relative;
    float: left;
    width: 33.3333%;
    height: 100%;
    padding: 0 10px;

     @media screen and (min-width: 992px) {
        width: ${props => (props.span ? props.span / 3 * 100 : "33.33")}%;
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


