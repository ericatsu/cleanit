import React from 'react';
import {Container1 ,Container, Image, AboutH1, Slogan, AboutRow, AboutColumnRight, AboutH2, AboutP, AboutColumnLeft, AboutCompany} from '../elements/LearnMoreElements'

function LearnMore() {
  return (
    <Container1>
      <Container>
        <Image src="" alt="" className="image" />
        <AboutH1>CleanIt Service Limited</AboutH1>
        <Slogan>
            CUSTOMER SATISFACTION IS THE FOUNDATION OF ANY SUCCESSFUL BUSINESS
        </Slogan>
       </Container>
        <AboutRow>
            <AboutColumnRight>
             <AboutH2>ABOUT US</AboutH2>
             <AboutP>CleanIt Service is a guarented to become the one best cleaning industry in country. We priotize to meet our clients highest standards. Due to our dedicated team of trained specialists, we value each and every client. We never give up on any stain and we train only the best personnel.</AboutP>
             {/* <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP> */}
             <AboutH2>WHAT WE OFFER</AboutH2>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutH2>WHAT WE OFFER</AboutH2>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
            </AboutColumnRight>
            <AboutColumnLeft>
             <AboutH2>ABOUT US</AboutH2>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutH2>WHAT WE OFFER</AboutH2>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutH2>WHAT WE OFFER</AboutH2>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
            </AboutColumnLeft>
        </AboutRow>
        <AboutCompany>

        </AboutCompany>
    </Container1>
  );
}

export default LearnMore;
