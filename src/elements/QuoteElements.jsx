import styled from 'styled-components';

export const QuoteContainer = styled.div`
   padding: 10px 0 20px 0;
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
export const NoWrap = styled.a`
    
`
export const TelNum = styled.div`
    margin: 5px 0;
    overflow: hidden;
    font-size: 100px;
    line-height: 105px;
`

export const Form = styled.form`
    width: 1100px;
    height: 350px;
    margin: 0 auto;

    @media screen and (max-width: 768px){
     width: 900px;
    height: 200px;
 }

 @media screen and (max-width: 620px){
     width: 1100px;
    height: 350px;
 }
`

export const FormSections = styled.div`
    width: 100%;
    height: 150px;
`
export const FormSection = styled.div`
    position: relative;
    float: left;
    width: 33.3333%;
    height: 100%;
    padding: 0 10px;
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





