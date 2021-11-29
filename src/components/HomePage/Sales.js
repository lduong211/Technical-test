import React from 'react';
import '../../assets/css/Content.css';
import img4 from '../../assets/images/image4.SVG';
import Button from './Button'

function Sales() {

    return (
        <div>
            <div className="bg-gray">
                <div className="content">
                    <div>
                        <h3>ACCOUNTING</h3>
                        <Button title={'Create Homepage \nYoutube & Instagram'} btn={'Fieldmake'}/>
                    </div>
                    <img src={img4} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Sales;
