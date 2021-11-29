import React from 'react';
import '../../assets/css/Header.css';
import logo from '../../assets/images/logo.SVG';
import { AiFillCaretDown } from "react-icons/ai";
import { RiHome6Line } from "react-icons/ri";

function Header() {

    const changeStyle = (e) => {
        const slider = document.querySelector('.underline');
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        console.log([e.target]);
        slider.style.left = e.target.offsetLeft - 50 + 'px';
    }

    return (
        <header>
            <div className="title">
                <div className="title-head">
                    <img src={logo} alt="logo" />
                    <div className="home-btn">
                        <RiHome6Line />
                        <p>Home</p>
                    </div>
                </div>
                <div className="title-container">
                    <p>Asia IT</p>
                    <p>Market Place</p>
                </div>
            </div>
            <div className="info">
                <div className="dropdown">
                    <p>EN <AiFillCaretDown /></p>
                    <p>Company <AiFillCaretDown /></p>
                    <p>Partner Market Place <AiFillCaretDown /></p>
                </div>
                <div className="navbar">
                    <a href="/">Auto Homepage</a>
                    <a href="/">Sales</a>
                    <a href="/">CRM</a>
                    <a href="/">Electronic Office</a>
                    <a href="/">Cloud ERP</a>
                    <a href="/">SSL</a>
                </div>
                <div className="target">
                    <div className="target-title"> 
                        <p className="active" onClick={changeStyle}>Now</p>
                        <p onClick={changeStyle}>Future</p>
                        <div className="underline"></div>
                    </div>
                    <div className="target-content"> 
                        <div className="different">
                            <h1>6</h1>
                            <p>different <br/> IT Software <br/> Network</p>
                        </div>
                        <div className="partners">
                            <h1>32</h1>
                            <p>partners</p>
                        </div>
                        <div className="countries">
                            <h1>4</h1>
                            <p>countries</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
