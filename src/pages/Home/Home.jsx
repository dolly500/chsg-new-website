import React from 'react';
import Header from '../../Components/Header'
import Logos from '../../Components/Logos';
import Aboutpage from '../AboutPage/aboutpage'
import Service from '../Services/Services.jsx'
import OurServices from '../ourServices';
import ServiceSection from '../ServiceSection'
import Quotation from '../Quotation';
import Section from '../Section.jsx'
import SectionPage from '../SectionPage.jsx'
import Horizontal from '../Horizontal.jsx'
import Footer from '../Footer';

const Home = () => {
    return (
        <div>
           <>
            <Header />
            <Logos />
            <Aboutpage />
            <OurServices />
            <Service />
            <ServiceSection />
            <Quotation />
            <Section />
            <Horizontal />
            <SectionPage />
            <Footer />
           </>
        </div>
    );
}

export default Home;
