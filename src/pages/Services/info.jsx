import React from 'react'
import './Services.css'

const info = (props) => {
  return (
    <div className='user-form'>
        <p style={{marginTop: '4rem', textAlign: 'center', fontWeight: 'bolder'}}> {props.text1}</p>
        <p style={{color: '#808080'}}> {props.text2}</p>
    </div>
  )
}

export default info