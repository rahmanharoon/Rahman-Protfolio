import React, {useState} from 'react';
import Contact from '../components/Contact';
import ContactNavbar from '../components/ContactNavbar';
import ContactSidebar from '../components/ContactSidebar';

const SigninPage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ContactSidebar isOpen = {isOpen} toggle = {toggle} />
            <ContactNavbar toggle = {toggle} />
            <Contact />
        </>
    )
}

export default SigninPage
