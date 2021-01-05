import React from 'react'
import { 
        Container,
        FormContent, 
        FormInput, 
        FormLabel, 
        FormWrap,
        Icon,
        Form,
        FormH1,
        FormButton,
        Text
    } from './ContactElements'

const Contact = () => {
    return (
        <>
          <Container>
              <FormWrap>
                  {/* <Icon to="/">Rahman Haroon</Icon> */}
                  <FormContent>
                      <Form action="POST">
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
                          type='textarea' 
                          rows="5" 
                          required placeholder = "Type your message" 
                        />
                        <FormButton 
                          type='submit'>
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