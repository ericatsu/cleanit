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

    /* @media screen and (min-width: 768px) {
        width: 750px;
    }  */
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
    height: 600px;
    display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: #010606;

 @media screen and (max-width: 768px){
     height: 1100px;
 }

 @media screen and (max-width: 480px){
     height: 1600px;
 }
`
export const BookColumn = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    padding: 0 50px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
 }

 @media screen and (max-width: 768px){
     grid-template-columns: 1fr;
     padding: 0 20px;
 }
`

export const Title = styled.div`
    color: #3598ff;
    font-size: 2rem;
    line-height: 28px;
    margin: 15px 0 15px 0;

    @media screen and (max-width: 480px){
      font-size: 1.3rem;
  }
`

// export const ListRow = styled.div`
//     /* font-size: 20px;
//     line-height: 24px;
//     max-width: 960px;
//     margin: 0 auto 30px;
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     grid-gap: 30px; */
//     max-width: 1200px;
//     margin: 0 auto;
//     display: grid;
//     grid-gap: 30px;

//   @media (min-width: 600px) { 
//       grid-template-columns: repeat(3, 1fr); 
// }

// `

export const ListCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 7px;
  max-height: 340px;
  padding: 30px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgb(0,0,0,0.2);

 &:hover{
     transform: scale(1.02);
     transition: all 0.2s ease-in-out;
     cursor: pointer;
 }
`

export const BookImg = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const BookTitle = styled.h2`
  font-size: 1rem;
  
`
