import React, { Component } from 'react';
import './About.css';


export class About extends Component {

    render() {
        return (
            <footer>
                <div class="containercp4">
                    <section>

                        <nav>
                            <ul>
                                <h3>Company</h3>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Swiggy Blog</a></li>
                                <li><a href="#">Bug Bounty</a></li>
                                <li><a href="#">Swiggy Super</a></li>
                                <li><a href="#">Swiggy Corporate</a></li>
                                <li><a href="#">Swiggy Instamart</a></li>
                            </ul>
                        </nav>
                    </section>

                    <section>

                        <nav>
                            <ul>
                                <h3>Contact</h3>
                                <li><a href=""> Help & Support</a></li>
                                <li><a href="">Partner with us</a></li>
                                <li><a href="">Ride with us</a></li>
                            </ul>
                        </nav>
                    </section>

                    <section>
                        <nav>
                            <ul>
                                <h3>Legal</h3>
                                <li><a href="">Terms & Conditions</a></li>
                                <li><a href="">Refund & Cancellation</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Cookie Policy</a></li>
                                <li><a href="">Offer Terms</a></li>
                                <li><a href="">Phishing & Fraud</a></li>
                            </ul>
                        </nav>
                    </section>

                    <section>
                        <nav>
                            <ul>
                                <li>
                                    <a href=""><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" alt="" /></a>
                                </li>
                                <li>
                                    <a href=""><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" alt="" /></a>
                                </li>
                            </ul>
                        </nav>
                    </section>

                </div><hr/>

            </footer>

        );
    }
}
