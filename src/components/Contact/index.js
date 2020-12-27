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
                  <Icon to="/">Rahman Haroon</Icon>
                  <FormContent>
                      <Form action="#">
                          <FormH1>
                              Connect With Me..!
                          </FormH1>
                          <FormLabel htmlFor='for'>
                              Name
                          </FormLabel>
                          <FormInput type='name' required />
                          <FormLabel htmlFor='for'>
                              Email
                          </FormLabel>
                          <FormInput type='number' required />
                          <FormLabel htmlFor='for'>
                              Mobile Number
                          </FormLabel>
                          <FormInput type='text' required />
                          <FormLabel htmlFor='for'>
                              Message
                          </FormLabel>
                          <FormButton type='submit'>
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