import React, { Component } from 'react';
import "./Home.css";
import swg from './images/swg.png';
import lc from './images/lc.png';
import a1 from './images/a1.png';

export class Home extends Component {

    render() {
        return (
            <div className="herosection">
                <div className="hero-subsec">
                    <div class="navbar">
                        <div class="img1">
                            <img src={swg} alt="swiggy logo" id="swg" />
                        </div>
                        <div class="but-nav">
                            <div><button id="b1">Login</button></div>
                            <div><button id="b2">Sign Up</button></div>
                        </div>
                    </div>

                    <div class="t1">
                        <h1 className="heading-hsec2"><span className="animation-heading"></span></h1>
                        <h3 id="t1-detail">
                            Order food from favourite restaurants near you.
                        </h3>
                    </div>
                    <div class="search-main">
                        <div class="search">
                            <div>
                                <input
                                    type="text"
                                    class="search-1"
                                    placeholder="Enter your delivery location"
                                />
                            </div>
                            <div class="searchtxt">
                                <div class="searchtxt1">
                                    <img src={lc} alt="locate png" id="lc-png" />
                                </div>

                                <div class="searchtxt1">
                                    <p id="lc-txt">Locate Me</p>
                                </div>
                            </div>
                        </div>
                        <div class="search-button">
                            <button id="src-but">FIND FOOD</button>
                        </div>
                    </div>
                    <div class="sub-info">
                        <p>POPULAR CITIES IN INDIA</p>
                    </div>
                    <div class="cities-name">
                        <p id="city">Ahmedabad&nbsp; </p>
                        <p id="city-light">Bangalore&nbsp;</p>
                        <p id="city">Chennai&nbsp;</p>
                        <p id="city-light">Delhi&nbsp;</p>
                        <p id="city">Gurgaon&nbsp;</p>
                        <p id="city-light">Hyderabad&nbsp;</p>
                        <p id="city">Kolkata&nbsp;</p>
                        <p id="city-light">Mumbai&nbsp;</p>
                        <p id="city">Pune&nbsp;</p>
                        <p id="city-light">& more.&nbsp;</p>
                    </div>
                </div>

            </div> 
        )
    }
}

