import React,{Component} from 'react';
import './advn.css';
import b1 from './images/b1.png';
import b2 from './images/b2.png';
import b3 from './images/b3.png';
export class Advn extends Component {

    render(){
        return(
            <div class="part2">
        
        <div class="p2-1">
            <div class="p2-img1">
                <img src={b1} alt="" class="b-images"/>
            </div>
            <div class="p2-1-head">
                <h3 id="p2-head">No Minimum Order</h3>
            </div>
            <div class="p2-1-info p2-para">
                <p id="p2info">Order in for yourself or for the group, with no restrictions on order value</p>
            </div>
        </div>

        <div class="p2-2">
            <div class="p2-img2">
                <img src={b2} alt="" class="b-images b2-2-image"/>
            </div>
            <div class="p2-2-head">
                <h3 id="p2-head">Live Order Tracking</h3>
            </div>
            <div class="p2-2-info p2-para">
                <p id="p2info">Know where your order is at all times, from the restaurant to your doorstep</p>
            </div>
        </div>

        <div class="p2-3">
            <div class="p2-img3">
                <img src={b3} alt="" class="b-images"/>
            </div>
            <div class="p2-3-head">
                <h3 id="p2-head">Lightning-Fast Delivery</h3>
            </div>
            <div class="p2-3-info p2-para">
                <p id="p2info">Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
            </div>
        </div>
    </div>
        )
    }
}
