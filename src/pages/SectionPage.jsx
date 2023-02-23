import React from 'react';
import './SectionPage.css'

const SectionPage = () => {
    return (
        <div className='section-pager'>
            <div className='head-1'>
                <div><h3>Head office</h3></div>
                <div className='text-3'>
                    <div>1661 Windsor Chase Court</div>
                    <div>Lawrenceville, GA, 30043</div>
                </div>
            </div>
            <div className='head-1'>
                <div><h3>West Africa Office,</h3></div>
                <div className='text-3'>
                    <div>Crystal Hills Software Group (CHSG),</div>
                    <div></div>
                </div>
            </div>
            <div className='head-1'>
                <div><h3>2nd West Africa Office</h3></div>
                <div className='text-3'>
                    <div>10 Quarry Road,</div>
                    <div>Abeokuta, Ogun State.</div>
                </div>
            </div>
        </div>
    );
}

export default SectionPage;
