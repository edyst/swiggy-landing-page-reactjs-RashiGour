import React from 'react'
import './Download.css'
import imgbu1 from './images/downloadbu1.png'
import imgbu2 from './images/downloadbu2.png'
import simimg from './images/simimg.png'
import simimg2 from './images/simimg2.png'
export default function Download() {
    return (
        <div id="dodiv">
          <div className="plp">
           <h1 style={{paddingLeft:10,paddingTop:140,paddingRight:150,fontSize:40,color:"#282c3f"}}>Restaurants in your pocket</h1>
           <p style={{paddingLeft:10,paddingRight:50,fontSize:20,color:"#282c3f"}}>Order from your favorite restaurants &nbsp; track on the go, with the all-new Swiggy app.</p>
           <div style={{display:'flex',marginTop:20}}>
           <a><img className="dowi"  src={imgbu1} /></a>
           <a><img className="dowi"  src={imgbu2} /></a>
           </div>
          </div>  
          <div className="plp">
          <img className="imgd" src={simimg} />
          </div> 
          <div className="plp">
          <img style={{paddingTop:40}} className="imgd" src={simimg2} />
          </div> 
        </div>
    )
}