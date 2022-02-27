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
    margin-right: -15px;
    margin-left: -15px;

    ::before{
     display: table;
     content: " ";
    }

    ::after{
      clear: both;
    }
`
export const BookColumn = styled.div`
    margin-right: -15px;
    margin-left: -15px;
`

export const Title = styled.div`
    color: #3598ff;
    font-size: 26px;
    line-height: 28px;
    margin: 40px 0 15px 0;
`

export const ListRow = styled.div`
    /* font-size: 20px;
    line-height: 24px;
    max-width: 960px;
    margin: 0 auto 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 30px; */
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 30px;

  @media (min-width: 600px) { 
      grid-template-columns: repeat(3, 1fr); 
}

`

export const ListColumn = styled.div`
  background-color: dodgerblue;
  color: white;
  padding: 1rem;
   height: 200px;
   padding-right: 15px;
    padding-left: 15px;
    /* position: relative; */
    /* min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    float: left;

    @media screen and (min-width: 768px){
        left: 16.66666667%;
        width: 75%;
        float: left;
    } */
`

export const BookImg = styled.img`
    height: 150px;
    width: 100%;
    object-fit: cover;
`

export const BookTitle = styled.h1`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.2);
`
