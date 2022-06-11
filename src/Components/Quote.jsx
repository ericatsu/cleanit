import React from 'react';
import  contactImg  from '../assets/images/contactImg.png';
import { BtnSection, Caution , Form, FormField, FormInput, FormSection,  FormTextArea, Heading, HighLight, NoWrap, QuoteBtn, QuoteBtnLink, QuoteContainer, Slogan, TelNum } from '../elements/QuoteElements';
import {CgDanger} from 'react-icons/cg'


function Quote() {
  return (
  <QuoteContainer>
    <Heading>How May we help You</Heading>
      <Slogan>
        <NoWrap href="tel:050-044-8184">Call Now </NoWrap>
           to check availability and to request a free estimate
      </Slogan>
      <TelNum>
        <NoWrap href="tel:050-044-8184">050-044-8184</NoWrap>
      </TelNum>
      <img src={contactImg} alt='Call or Fill Up a form'></img>
      <Slogan>
        Use the <HighLight>quick</HighLight> form below to leave your details and 
        we will call you back in a few <HighLight>minutes</HighLight>.
      </Slogan>

  <Form action='#'>
    <FormSection>
       <FormField>
        <FormInput type="text" name="name" placeholder="Name"/>
      </FormField>
      <FormField>
        <FormInput type="email" name="name" placeholder="Email"/>
      </FormField>
    </FormSection>

    <FormSection>
      <FormField>
        <FormInput type="tel" name="name" placeholder="Phone"/>
      </FormField>
      <FormField>
        <FormInput type="text" name="name" placeholder="Address"/>
      </FormField>
    </FormSection>

    <FormSection>
      <FormField>
        <FormTextArea type="text" name="name" placeholder="Comment / Service"/>
      </FormField>
    </FormSection>
  
  <BtnSection>
  <QuoteBtn>
        <QuoteBtnLink to='/'>Send</QuoteBtnLink>
  </QuoteBtn>
  </BtnSection>
</Form>

   <Caution > 
    <CgDanger/>
     Your information is never sold or shared. It is used for the sole purpose of contacting you     
   </Caution>
  </QuoteContainer>
  );
}

export default Quote;
