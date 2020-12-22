import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
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
                        <ServicesH2>Resources Datas</ServicesH2>
                        <ServicesP>Fill Itt AND mAke itt</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual moneyyss</ServicesH2>
                        <ServicesP>Fill Itt AND mAke itt</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Cloud services</ServicesH2>
                        <ServicesP>Fill Itt AND mAke itt, make it betterrrr bruhhhhhh</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon4} />
                        <ServicesH2>Mobile app</ServicesH2>
                        <ServicesP>Fill Itt AND mAke itt, make it betterrrr bruhhhhhh</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
