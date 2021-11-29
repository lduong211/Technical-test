import React from 'react';
import '../../assets/css/Content.css';
import img6 from '../../assets/images/image6.SVG';
import Button from './Button'

function Security() {

    return (
        <div>
            <div className="bg-gray">
                <div className="content">
                    <div>
                        <h3>SECURITY</h3>
                        <Button title={'SSL server'} btn={'SECTIGO'}/>
                    </div>
                    <img src={img6} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Security;
