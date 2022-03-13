import React from 'react';
import {Container1 ,Container, Image, AboutH1, Slogan, AboutRow, AboutColumnRight, AboutH2, AboutP, AboutColumnLeft,  AboutCompanyRow, AboutCompanyColumn, AboutCard, AboutSection, AboutImage, AboutNaming, AboutPosition, AboutTitle, AboutColumn, CardText} from '../elements/LearnMoreElements'

function LearnMore() {
  return (
    <Container1>
      <Container>
        <Image src="" alt="Image" />
        <AboutH1>CleanIt Service Limited</AboutH1>
        <Slogan>
            CUSTOMER SATISFACTION IS THE FOUNDATION OF ANY SUCCESSFUL BUSINESS
        </Slogan>
        <AboutRow>
            <AboutColumn>
             <AboutH2>ABOUT US</AboutH2>
             <AboutP>CleanIt Service is a guarented to become the one best cleaning industry in country. We priotize to meet our clients highest standards. Due to our dedicated team of trained specialists, we value each and every client. We never give up on any stain and we train only the best personnel.</AboutP>
             {/* <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP> */}
             <AboutH2>WHAT WE OFFER</AboutH2>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutH2>WHAT WE OFFER</AboutH2>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
            </AboutColumn>
            <AboutColumn>
             <AboutH2>ABOUT US</AboutH2>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutH2>WHAT WE OFFER</AboutH2>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutH2>WHAT WE OFFER</AboutH2>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
             <AboutP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</AboutP>
            </AboutColumn>
        </AboutRow>
        </Container>
        <AboutSection>
          <AboutTitle>Executives</AboutTitle>
        <AboutCompanyRow>
        <AboutCompanyColumn>
           <AboutCard>
            <AboutImage src='' alt='image'/>
            <CardText>
            <AboutNaming>DAn</AboutNaming>
            <AboutPosition>lkuh</AboutPosition>
            </CardText>
           </AboutCard>
        </AboutCompanyColumn>
        <AboutCompanyColumn>
           <AboutCard>
            <AboutImage src='' alt='image'/>
            <CardText>
            <AboutNaming>ER</AboutNaming>
            <AboutPosition>asde</AboutPosition>
            </CardText>
           </AboutCard>
        </AboutCompanyColumn>
        <AboutCompanyColumn>
           <AboutCard>
            <AboutImage src='' alt='image'/>
            <CardText>
            <AboutNaming>bgh</AboutNaming>
            <AboutPosition>kuh</AboutPosition>
            </CardText>
           </AboutCard>
        </AboutCompanyColumn>
        <AboutCompanyColumn>
           <AboutCard>
          <AboutImage src='' alt='image'/>
          <CardText>
            <AboutNaming>bgh</AboutNaming>
            <AboutPosition>vdg</AboutPosition>
            </CardText>
           </AboutCard>
        </AboutCompanyColumn>
        </AboutCompanyRow>
      </AboutSection>
    </Container1>
  );
}

export default LearnMore;
