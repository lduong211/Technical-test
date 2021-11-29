import React from 'react';
import '../../assets/css/Content.css';
import img1 from '../../assets/images/image1.SVG';
import Button from './Button'

function Assets() {

    return (
        <div>
            <div className="bg-white">
                <h1>IT CLOUD SEA’S IT SERVICE</h1>
                <div className="content">
                    <img src={img1} alt=""/>
                    <div>
                        <h3>ASSETS</h3>
                        <Button title={'Inventory Management'} btn={'G-Book'}/>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Assets;
