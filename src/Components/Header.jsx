import React from 'react'
import '../pages/Home/Home.css'
import Image from '../img/Frame 22.png'

const Header = () => {
  return (
    <div className="main__header">
        <div className="container">
            <div className="main__header-left">
                <div><h3>We create a better</h3></div>
                <div><h2>Tech Solution for all </h2></div>
                <h2>kind of businesses</h2>
               <div> <h4>our process has been simplified 
                <div>to meet every of your business desires</div> 
                <div>and needs to integrate any IT solution </div>
                <div>that will improve your business effeciencies</div>
                 and output.</h4></div>
                <button className='btn-1'>Get a quote now</button>
            </div>
            <div className="main__header-left">
                <div className="main__header-pic">
                    <img src={Image} alt="MainImage" />
                </div>            
            </div>
        </div>
    </div>
  )
}

export default Header