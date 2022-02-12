import React from 'react';
import { MemberContainer, Image, MemberH1, Slogan, MemberRow, MemberColumn, MemberH2, MemberP } from '../elements/MemberElements'

function Member() {
  return (
   <MemberContainer>
        <Image src="" alt="" className="image" />
        <MemberH1>CleanIt Service Limited</MemberH1>
        <Slogan>
            CUSTOMER SATISFACTION IS THE FOUNDATION OF ANY SUCCESSFUL BUSINESS
        </Slogan>
        <MemberRow>
            <MemberColumn>
             <MemberH2>ABOUT US</MemberH2>
             <MemberP>CleanIt Service is a guarented to become the one best cleaning industry in country. We priotize to meet our clients highest standards. Due to our dedicated team of trained specialists, we value each and every client. We never give up on any stain and we train only the best personnel.</MemberP>
             {/* <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP> */}
             <MemberH2>WHAT WE OFFER</MemberH2>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
             <MemberH2>WHAT WE OFFER</MemberH2>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
            </MemberColumn>
            <div className="col-sm-6">
             <MemberH2>ABOUT US</MemberH2>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
             <MemberH2>WHAT WE OFFER</MemberH2>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
             <MemberH2>WHAT WE OFFER</MemberH2>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
            </div>
            <div className="textcolumn"></div>
        </MemberRow>
      </MemberContainer>
   );
}

export default Member;
