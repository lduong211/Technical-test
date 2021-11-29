import React from 'react';
import '../../assets/css/Content.css';
import img2 from '../../assets/images/image2.SVG';
import Button from './Button'

function Accounting() {

    return (
        <div>
            <div className="bg-gray">
                <div className="content">
                    <div>
                        <h3>ACCOUNTING</h3>
                        <Button title={'Accounting'} btn={'G-Book'}/>
                    </div>
                    <img src={img2} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Accounting;
