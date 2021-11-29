import React from 'react';
import '../../assets/css/Content.css';
import img3 from '../../assets/images/image3.SVG';
import Button from './Button'

function HRAndAdmin() {

    return (
        <div>
            <div className="bg-white">
                <div className="content">
                    <img src={img3} alt=""/>
                    <div>
                        <h3>HR & ADMIN</h3>
                        <div className="multi-btn">
                            <Button title={'Webmail'} btn={'E-office'}/>
                            <Button title={'E- Apporval'} btn={'E-office'}/>
                            <Button title={'E- Document'} btn={'E-office'}/>
                        </div>
                        <div className="multi-btn">
                            <Button title={'E- Check in.out'} btn={'E-office'}/>
                            <Button title={'Co-work/Project'} btn={'E-office'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HRAndAdmin;
