import React from 'react'
import './Footer.css'
import footimg from './images/footimg.png'
import footimg2 from './images/footimg2.png'
import swiggylogo from './images/swiggylogo.png'
import City from './City.json';
import { FaFacebookF,FaInstagram,FaPinterestP,FaTwitter } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="jat">
          <div id="fodiv1">
              <div className="pty">
                  <h3>Company</h3>
                  <ul>
                    <a><li>About us</li></a>
                    <a><li>Team</li></a>
                    <a><li>Carrers</li></a>
                    <a><li>Swiggy Blog</li></a>
                    <a><li>Bug Bounty</li></a>
                    <a><li>Swiggy Super</li></a>
                    <a><li>Swiggy Corparate</li></a>
                    <a><li>Swiggy Instamart</li></a>
                  </ul>
              </div>
              <div className="pty">
              <h3>Contact</h3>
                  <ul>
                    <a><li>Help &amp; Support</li></a>
                    <a><li>Partner with us</li></a>
                    <a><li>Ride with us</li></a>
                  </ul>
              </div>
              <div className="pty">
              <h3>Legal</h3>
                  <ul>
                    <a><li>Terms &amp; Conditions</li></a>
                    <a><li>Refund &amp; Cancellation</li></a>
                    <a><li>Privacy Policy</li></a>
                    <a><li>Cookie Policy</li></a>
                    <a><li>Offer Terms</li></a>
                    <a><li>Phishing &amp; Fraud</li></a>
                  </ul>
              </div>
              <div style={{paddingTop:50}} className="pty">
              <a><img alt="" src={footimg} /></a>
              <a><img alt="" src={footimg2} /></a>
              </div>
              </div>
              <hr className="hrs"></hr>
              <div>
              <h3>WE DELIVER TO</h3>
              <div id="pop">
              <div className="pty">
                <ul>
              {City.city[0].map((item, i) => (
                <li>{item.name}</li>
               ))}
               </ul>
              </div>
              <div className="pty">
                <ul>
              {City.city[1].map((item, i) => (
                <li>{item.name}</li>
               ))}
               </ul>
              </div>
              <div className="pty">
                <ul>
              {City.city[2].map((item, i) => (
                <li>{item.name}</li>
               ))}
               </ul>
              </div>
              <div className="pty">
                <ul>
              {City.city[3].map((item, i) => (
                <li>{item.name}</li>
               ))}
               </ul>
              </div>
              </div>  
              </div>
              <hr className="hrs"></hr>
              <div id="pxy">
               <div style={{marginLeft:30,marginTop:15,marginBottom:15}}><a href=""><img class="" width="142" alt="" src={swiggylogo} /></a></div>
               <div style={{marginTop:10,marginBottom:20}}><h3 style={{color:'white',fontWeight:200}}>© 2021 Swiggy</h3></div>
                <div id="lasty" style={{display:"flex"}}>
                <div id="lasty1"><FaFacebookF style={{color:'white',fontSize:25}} /></div>
                <div style={{marginLeft:20,marginTop:30}}><FaInstagram style={{color:'white',fontSize:25}} /></div>
                <div style={{marginLeft:20,marginTop:30}}><FaPinterestP style={{color:'white',fontSize:25}}/></div>
                <div style={{marginLeft:20,marginTop:30}}><FaTwitter style={{color:'white',fontSize:25}}/></div>
                </div>
              </div>
        </div>
    )
}