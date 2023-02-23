import React from 'react'
import {logos}  from '../data';
import './Logo.css'
const Logos = () => {
  return (
    <div className='listings'>
        {
            logos.map((logo, index)=> (    
            <div key={index} style={{display: 'flex', width: '120px', justifyContent:'space-around'}}>
                    {console.log(logo.image, "the logo")}
                <img src={logo.image} alt='' />
            </div>
            
            ))
        }
    </div>
  )
}

export default Logos