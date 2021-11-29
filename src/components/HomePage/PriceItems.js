import React from 'react';
import '../../assets/css/PriceItems.css';


class PriceItems extends React.Component {

    componentDidMount() {
        if(this.props.type === 'good')
            this._reactInternals.child.stateNode.style.borderColor = '#E6367E';
        else if(this.props.type === 'onSale') {
            this._reactInternals.child.stateNode.style.backgroundColor  = '#E6367E';
            this._reactInternals.child.stateNode.style.color  = 'white';
        }

    }

    render() {
        return (
            <div className="price-items">
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <div className="price">
                    <h1>{this.props.price}</h1>
                    <div className="price-type">
                        <h4>{this.props.currency}</h4>
                        <h5>Per Month</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default PriceItems;
