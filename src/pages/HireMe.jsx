import React from 'react'
import { Container, Form, FormButton, FormContent, 
  FormH1, FormInput, FormLabel, FormWrap, Icon, FormMessage } from '../elements/HireMeElements'
import emailjs from 'emailjs-com'

const HireMe = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_dthgr19', e.target, 'user_98Xrm6LA5oSfERYWjVvyR')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  }
    return (
        <>
        <Container onSubmit={sendEmail}>
         <FormWrap>
          <Icon to="/">lester</Icon>
          <FormContent>
            <Form action="#">
            <FormH1>Contact Me</FormH1>
            <FormLabel htmlFor='for'>Name</FormLabel>
            <FormInput type='text' name='name' required/>
            <FormLabel htmlFor='for'>Email</FormLabel>
            <FormInput type='email' name='email' required />
            <FormLabel htmlFor='for'>Subject</FormLabel>
            <FormInput type='text' name='subject' required />
            <FormLabel htmlFor='for'>Message</FormLabel>
            <FormMessage type='text' name='message' required />
            <FormButton type='submit'>Submit</FormButton>
            </Form>
          </FormContent>
         </FormWrap>
        </Container>   
        </>
    )
}

export default HireMe
