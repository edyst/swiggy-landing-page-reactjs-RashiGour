import React, { Component } from 'react';
import './Store.css';
import gp from './images/gp.png';
import ap from './images/ap.png';
import m1 from './images/m1.png';
import m2 from './images/m2.png';

export class Store extends Component {

    render() {
        return (
            <div className="restaurants">
                <div className="rsec1">
                    <h1 className="rsec-h1">Restaurants in</h1>
                    <h1 className="rsec-h1">your pocket</h1>
                    <p className="rsec-p">Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
                    <div className="rsec-img2">
                        <img className="rsec-images2" src={gp} alt="gplay" style={{ marginRight: "20px" }} />
                        <img className="rsec-images2" src={ap} alt="ios" />
                    </div>
                </div>
                <div className="rsec2">
                    <img className="img-rsec1" src={m1} />
                    <img className="img-rsec2" src={m2} />
                </div>
            </div>
        )
    }
}
