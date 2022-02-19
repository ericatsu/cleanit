import React from 'react';
import { MemberContainer, Image, MemberH1, Slogan, MemberRow,  MemberH2, MemberP, FormContainer, Request, InputContainer, ButtonContainer, Input, TextArea, Button, CautionContainer, Caution, MemberColumn, MemberDescription } from '../elements/MemberElements';
import mark from "../assets/images/mark.png"

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
             <MemberDescription>
             <Request>Why Become A Member</Request>
             <MemberH2>Reduce Prices</MemberH2>
             <MemberP>CleanIt Service is a guarented to become the one best cleaning industry in country. We priotize to meet our clients highest standards. Due to our dedicated team of trained specialists, we value each and every client. We never give up on any stain and we train only the best personnel.</MemberP>
             {/* <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP> */}
             <MemberH2>Save Time</MemberH2>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
             <MemberH2>Re-Cleaning Guarantee</MemberH2>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
             <MemberP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima molestias autem, illo quo labore.</MemberP>
             </MemberDescription>
            </MemberColumn>
            <MemberColumn>
             <FormContainer>
               <Request>Be A Member Today</Request>
               <InputContainer>
               <Input type="text" placeholder="Full Name" />
               <Input type="text" placeholder="Email" />
               <Input type="text" placeholder="Phone" />
               <Input type="text" placeholder="Location" />
               <TextArea type="text" placeholder="Comment / Service" spellcheck="false"/>
               <ButtonContainer>
               <Button placeholder="Become A Member" >Become A Member </Button>
               </ButtonContainer>
               <CautionContainer>
                <Caution src={mark}/>  
                {/* Increase image size */}
                Your information is never sold or shared.
                <br/>
              It is used for the sole purpose of contacting you.
             </CautionContainer>
               </InputContainer>
            </FormContainer>
            </MemberColumn>
            <div className="textcolumn"></div>
        </MemberRow>
  
      </MemberContainer>
   );
}

export default Member;
