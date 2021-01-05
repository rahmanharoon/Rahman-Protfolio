import React, {useState} from 'react';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const SigninPage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen = {isOpen} toggle = {toggle} />
            <Navbar toggle = {toggle} />
            <Contact />
        </>
    )
}

export default SigninPage
