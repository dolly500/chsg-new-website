import React from 'react';
import {services} from '../data'
import './ServiceSection.css'
import ServiceInfo from './ServiceInfo.jsx'

const ServiceSection = () => {
    return (
       <>
        <div className="user-section" style={{textAlign: 'center', marginTop: '2rem', backgroundColor: '#1E212D'}}>
            <div style={{color: '#30A7DF', fontSize: '2rem', fontWeight: 'bolder'}}>PORTFOLIOS</div>
            <div style={{color: 'white', fontSize: '1.1rem'}}>We combine expertise to build  solutions that generate customer loyalty for our client.</div>
        
            <div className="service__image">
        {services.map((e)=>(
            <div className='service-image-logo'>
                <ServiceInfo image={e.image} text1={e.text1} link={e.link} text2={e.text2}/>
            </div>
        ))
        } 
            </div>
        
        </div>
       </>
        
    );
}

export default ServiceSection;
