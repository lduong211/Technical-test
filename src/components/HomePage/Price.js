import React from 'react';
import '../../assets/css/Content.css';
import PriceItems from './PriceItems'

function Price() {

    return (
        <div>
            <div className="bg-green">
                <div className="content">
                    <PriceItems 
                        title={'Free Test'} 
                        description={'Organize across all apps by hand'} 
                        price={'0'} 
                        currency={'$'} 
                        type={'normal'}
                    />
                    <PriceItems 
                        title={'Low Price'} 
                        description={'Monthly Fixed Amount'} 
                        price={'200.000'} 
                        currency={'$'} 
                        type={'normal'}
                    />
                    <PriceItems 
                        title={'Easy Using Methods'} 
                        description={'Various Manuals'} 
                        price={'200.000'} 
                        currency={'$'}
                        type={'good'} 
                    />
                    <PriceItems 
                        title={'Verified IT Service'} 
                        description={'On sale in 4 countries'} 
                        price={'300.000'} 
                        currency={'VND'} 
                        type={'onSale'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Price;
