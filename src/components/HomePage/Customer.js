import React from 'react';
import '../../assets/css/Content.css';
import img5 from '../../assets/images/image5.SVG';
import Button from './Button'

function Customer() {

    return (
        <div>
            <div className="bg-white">
                <div className="content">
                    <img src={img5} alt=""/>
                    <div>
                        <h3>CUSTOMER</h3>
                        <Button title={'Customer Request Management'} btn={'OQUFIE'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer;
