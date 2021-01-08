import React from 'react';
import Icon1 from '../../images/svg-5.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-2.svg';
import Icon4 from '../../images/svg-4.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Web Designing</ServicesH2>
                        <ServicesP>
                        The world of web design has transformed from a minuscule industry that crafted scary pages with content
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Web-Application</ServicesH2>
                        <ServicesP>
                        Developing static and dynamic responsive web-app which can be used both mobile and computers
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Mobile Application</ServicesH2>
                        <ServicesP>
                        Developing mobile application which can be used on Android Operating System and Apple iOs operating system
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon4} />
                        <ServicesH2>Cloud-Services</ServicesH2>
                        <ServicesP>
                        Enhancing knowledge on different types of cloud-services like AWS and Google Cloud 
                        </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
