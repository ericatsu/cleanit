import styled from "styled-components";

export const MemberContainer = styled.div`
    margin-top: 60px;
    background-color: rgb(255, 255, 255);
    text-align: center;
    display: block;
    /* padding: 40px 0; */
    /* margin: 30px; */
    flex-direction: column;

    
    /* &:after, :before{
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    } */

`

export const Image = styled.img`
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    margin: 0 auto;
`

export const MemberH1 = styled.h1`
    text-align: center;
    display: block;
    margin: 15px 0 5px 0;
    color: #75adee;
    text-transform: none;
    font-weight: 400;
    font-size: 50px;

    @media screen and (max-width: 400px){
        font-size: 40px;
    }
`

export const Slogan = styled.h1`
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 20px;
    text-transform: uppercase;
`

export const MemberRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;

  @media (min-width: 768px) {
    width: 100%;
}
`

export const MemberColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    grid-gap: 1rem;
    float: left;
`

export const MemberDescription = styled.div`
    padding: 25px;
`
// export const MemberColumnLeft = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex-basis: 100%;
//     flex: 1;
//     padding-right: 50px;
//     background-color: blue;
//     float: left;
//     padding-left: 50px;

//     @media screen and (min-width: 768px){
//     width: 50%;
//     float: left;
//     position: relative;
//     min-height: 1px;
//     padding-right: 15px;
//     }
// `

export const MemberH2 = styled.h2`
    text-transform: none;
    font-size: 26px;
    margin: 15px 0 10px 0;
    color: #75adee;
`

export const MemberP = styled.p`
    padding: 0;
    margin-top: 1em;
    margin-bottom: 1em;
    line-height: 1.5;
    margin: 3px 0 10px 0;
    font-size: 16px;
    color: #03274d;

    &::before{
     content: "+";
     position: relative;
     top: 0;
     left: 0;
    }
`

export const FormContainer = styled.div`
   height: 100%;
   flex-direction: column;
   padding: 25px;

   @media screen and (max-width: 400px){
     height: 80%;
 }
  `

export const Request = styled.h2`
  margin: 15px 0 10px 0;
  text-align: center;
  max-width: 100%;
  height: auto;
  font-size: 1.5rem;

  @media screen and (max-width: 480px){
      font-size: 1rem;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: auto;
  width: 100%;
  max-width: 100%;
  position: relative;
`
export const Input = styled.input`
    color: #7e96ae;
    border: #000000 1px solid;
    outline: none!important;
    background: transparent;
    width: 35vw;
    height: 35px;
    margin: 10px auto;
    border-radius: 3px;
    padding-left: 5px;
`
export const TextArea = styled.textarea`
    resize: none;
    height: 90px;
    padding-top: 10px;
    width: 35vw;
    margin: 10px auto;
    color: #7e96ae;
    border: #000000 1px solid;
    border-radius: 3px;
    outline: none!important;
    background: transparent;
`

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  height: 75px;
  width: 35vw;
  display: inline-block;
  border-radius: 15px;
  color: #fff;
  text-align: center;
  font-weight: 300;
  font-size: 30px;
  padding: 5px;
  margin: 10px auto;;
  cursor: pointer;
  border: none;
   background: linear-gradient(to bottom,#419efe 50%,#328fef 51%);
`;

export const CautionContainer = styled.div`
    padding: 0px 0 5px 0;
    font-style: italic;
    font-size: 15px;
    line-height: 17px;
    width: 39vw;
    margin-left: 60px;

    @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 16px;
    }
`

export const Caution = styled.img`
    float: left;
    margin: 5px 8px 0 0;
    position: relative;
    width: 22px;
    height: 22px;

    @media screen and (max-width: 991px){
        margin-top: 4px;
    }
`