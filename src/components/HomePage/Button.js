import React from 'react';
import '../../assets/css/Button.css';


function Button(props) {

    return (
        <div className="duplicate-items">
            <p>{props.title}</p>
            <div className="button">
                {props.btn}
            </div>
        </div>
    )

}

export default Button;
