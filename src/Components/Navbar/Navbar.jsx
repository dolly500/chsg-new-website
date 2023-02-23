import React from 'react';
import './Navbar.css';
import {useState} from 'react'
import Logo from '../../img/Group 6263.png';
import {Link} from 'react-scroll';
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
    return (
        <nav>
            <div className="container nav__container">
                <Link to="main__header" smooth={true} duration={1000} className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt=""/>
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    <li><Link to='main__header' smooth={true} duration={1000}>Home</Link></li>
                    <li><Link to='container-1' smooth={true} duration={1000}>About</Link></li>
                    <li><Link to='our-service' smooth={true} duration={1000}>Services</Link></li>
                    <li><Link to='user-section' smooth={true} duration={1000}>Portfolio</Link></li>
                    <li><Link to='section-main' smooth={true} duration={1000}>Contact</Link></li>
                   
                </ul>
                <button className="nav__links btn__quote">GET A QUOTE</button>
                <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
                    }
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
