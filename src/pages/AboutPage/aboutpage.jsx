import React from 'react';
import ImgRow_2 from '../../img/image310.png';
import './aboutpage.css'

const AboutPage = () => {
    return (
        <div className="container-1">
            <div class="img_row">                
            <img src={ImgRow_2} alt='' className="img1"/>
            </div>
            <div className="img_row" style={{color: 'black'}}>
                <div className='img-row-2'>
                <div><h2 style={{color: '#5791FA'}}>WHO WE ARE</h2></div>
                <div><h3>We help business integrate</h3></div>
                <div><h3>Tech solutions to improve their</h3></div>
                <div><h3>efficiencies</h3></div>
                <div>CHSG is the choice for many of the world’s leading enterprises,</div>
                 <div>SMEs and technology challengers. We help businesses elevate</div> 
                 <div>their value through custom software development,</div>
                  <div>product design, QA and consultancy services.</div>
                    <div>Our mission is to help enterprises accelerate </div>
                <div>adoption of new technologies, untangle complex</div>
                 <div>issues that always emerge during digital </div>
                 <div>evolution, and orchestrate ongoing innovation.</div>
                 <button className="btn_2 img-row-2">CALL US NOW</button>
                </div>
                
            </div>
        </div>
    );
}

export default AboutPage;
