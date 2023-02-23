import React from 'react'
import './ServiceSection.css'
import {Link} from 'react-router-dom';

const info = (props) => {
  return (
    <div className='service-user-form'>
        <p> <img src={props.image} alt='fdf' /> </p>
        <div className='service-users'>
        <p>{props.text1}</p>
        <Link>{props.link}</Link>
        <p>{props.text2}</p>
        </div>
    </div>
  )
}

export default info