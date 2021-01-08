import React from 'react';
import { 
        Container,
        FormContent, 
        FormInput, 
        FormLabel, 
        FormWrap,
        Form,
        FormH1,
        FormButton
    } from './ContactElements';
import emailjs from 'emailjs-com'
// import $ from 'jquery';

const Contact = () => {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_w3b3gkh', 'template_4z8e5va', e.target, 'user_ZbvqD7MNOhe74X1sRmfsz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <>
          <Container>
              <FormWrap>
                  {/* <Icon to="/">Rahman Haroon</Icon> */}
                  <FormContent>
                      <Form 
                            id="contact-form"
                            action="" 
                            onSubmit={sendEmail}>
                        <FormH1>
                              Get in touch
                        </FormH1>
                        <FormLabel 
                            htmlFor='name'>
                            Full  Name
                        </FormLabel>
                        <FormInput 
                            type='text' 
                            required  
                            name="name"
                            noValidate
                            placeholder = "Type Your full Name" 
                        />
                        <FormLabel 
                            htmlFor='for'>
                            Email
                        </FormLabel>
                        <FormInput  
                            required 
                            type="email" 
                            name="email"
                            noValidate 
                            placeholder = "Type Your E-Mail" 
                        />
                        <FormLabel 
                            htmlFor='for'>
                            Message
                        </FormLabel>
                        <FormInput 
                          type='text'
                          name='message'
                          noValidate 
                          required 
                          placeholder = "Type your message" 
                        />
                        <FormButton 
                          type='submit'
                          value='submit'>
                          SEND
                        </FormButton>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>  
        </>
    )
}

export default Contact