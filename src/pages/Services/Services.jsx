import React from 'react';
import Info from './info';
import './Services.css';
import {Users} from '../../data'

const Services = () => {
    return (
        
        <div className='users_details' style={{color: 'black'}}>
            {Users.map((e, index)=>(
            <div className='user-logo'>
                <div><e.svg className="logo_svg" style={{backgroundColor: '#30A7DF', color: 'white', borderRadius: '50px'}}/></div>
                <Info key={index} text1={e.text1} text2={e.text2}/>
            </div>
        ))
        }
        </div>
    );
}

export default Services;
