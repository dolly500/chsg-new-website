import React from 'react';
import './Section.css';
import LogoImg from '../img/Group 6263.png'
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {FaFacebookSquare} from "react-icons/fa"
import {IoCallOutline} from "react-icons/io5"
import {AiFillMail} from "react-icons/ai"

const Section = () => {
    return (
        <div className="section-main">
            <div className='section-main-one'>
                <div className='logo_img'><img src={LogoImg} alt='' /></div>
                <div className='logo_img_text'>
                    <div>We build the tech solution for your</div>
                        <div>business at a speed of light and </div>
                        <div>at an affordable price</div>
                </div>
            </div>
            <div className='section-main-two'>
                <div className='section-mainer'>
                    <div style={{fontSize: '17px', fontWeight: 'bolder', color: 'black'}}>Company</div>
                    <div>About Us</div>
                    <div>Services</div>
                    <div>Portfolio</div>
                </div>
            </div>
            <div className='section-four'>
            <div className='section-mainer'>
                    <div style={{fontSize: '17px', fontWeight: 'bolder', color: 'black'}}>Follow Us</div>
                    <div><AiOutlineTwitter style={{color: '#30A7DF'}}/> <AiFillInstagram style={{color: '#30A7DF'}}/> chsginc</div>
                    <div><FaFacebookSquare style={{color: '#30A7DF'}}/> chsgincusa</div>
                </div>
            </div>
            <div className='section-main-three'>
                <div style={{fontSize: '17px', fontWeight: 'bolder', marginTop: '1.5rem', color: 'black'}}>Reach Us</div>
                <div><IoCallOutline style={{color: '#30A7DF'}}/> +14342272468</div>
                <div><IoCallOutline style={{color: '#30A7DF'}}/> +2349022470700</div>
                <div><AiFillMail style={{color: '#30A7DF'}}/> chsgius@gmail.com</div>
            </div>
        </div>
    );
}

export default Section;
