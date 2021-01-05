import React, {useState} from 'react';
import Contact from '../components/Contact';
import ContactNavbar from '../components/ContactNavbar';
import Sidebar from '../components/Sidebar';

const SigninPage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle = {toggle} />
            <ContactNavbar toggle = {toggle} />
            <Contact />
        </>
    )
}

export default SigninPage
