import React from 'react';
import './Feature.css';
import img1 from './images/featureimg1.png'
import img2 from './images/featureimg2.png'
import img3 from './images/featureimg3.png'
export default function Feature() {
    return (
        <div id="fdiv1">
           <div className="mal">
           <img className="fimg" src={img1} />
           <h3 style={{color:'white',fontSize:19,fontWeight:600}}>No Minimum Order</h3>
          <p style={{color:'white',fontSize:14,paddingLeft:60,paddingRight:60}}>Order in for yourself or for the group, with no restrictions on order value</p>
           </div>
           <div className="mal">
           <img className="fimg" src={img2} /> 
           <h3 style={{color:'white',fontSize:19,fontWeight:600}}>Live Order Tracking</h3>
           <p style={{color:'white',fontSize:14,paddingLeft:60,paddingRight:60}}>Know where your order is at all times, from the restaurant to your doorstep</p>
           </div>
           <div className="mal">
           <img className="fimg" src={img3} />
           <h3 style={{color:'white',fontSize:19,fontWeight:600}}>Lightning-Fast Delivery</h3>
           <p style={{color:'white',fontSize:14,paddingLeft:60,paddingRight:60}}>Experience Swiggy's superfast delivery for food delivered fresh &amp; on time</p>
           </div>
        </div>
    )
}