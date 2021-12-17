import React,{Component} from 'react';
import './Social.css';
import swgb from './images/swgb.png';
import fb from './images/fb.png';
import pn from './images/pn.png';
import ig from './images/ig.png';
import tw from './images/tw.png';

export class Social extends Component {

    render(){
        return(
            <div class="part-6">
            <div class="foot-logo">
                <img src={swgb} alt="Swiggy logo " class="swg-png"/>
            </div>
            <div class="foot-copy">
                <p>&copy; 2021 Swiggy</p>
            </div>
            <div class="foot-social">
                <div class="fb">
                    <a href="https://www.facebook.com/swiggy.in" target="_blank"><img src={fb} alt="Facebook" class="foot-social-logo"/></a>
                </div>
                <div class="pn">
                    <a href="https://in.pinterest.com/swiggyindia/_created/" target="_blank"><img src={pn} alt="Pinterest" class="foot-social-logo"/></a>
                </div>
                <div class="ig">
                    <a href="https://www.instagram.com/swiggyindia/" target="_blank"><img src={ig} alt="Instagram" class="foot-social-logo"/></a>
                </div>
                <div class="tw">
                    <a href="https://twitter.com/swiggy_in" target="_blank"><img src={tw} alt="Twitter" class="foot-social-logo"/></a>
                </div>
            </div>
        </div> 
        )
    }
}
