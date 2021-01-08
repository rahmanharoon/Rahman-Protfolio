import React, {useState} from 'react';
import Contact from '../components/Contact';
import ContactNavbar from '../components/ContactNavbar';
import ContactSidebar from '../components/ContactSidebar';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';
import DiscoverSection from '../components/DiscoverSection';
import { homeObjTwo } from '../components/DiscoverSection/Data';

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
            <InfoSection {...homeObjOne} />
            <DiscoverSection {...homeObjTwo} />
            <Services />
            <Footer />
        </>
    )
}

export default SigninPage
