import React from 'react'

const Services = () => {
    return (
        <>
            <Services id="services">
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
                </ServicesWrapper>
            </Services>
        </>
    )
}

export default Services
