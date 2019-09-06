import './components.css';
import React, { Component,  } from 'react';
import twitter from './img/twi.png';
import insta from './img/insta.png';
import dri from './img/dri.png';
import scroll from './img/scroll.png';
class Content extends Component {
    state = {  }
    render() { 
        return (
            <div className = "hye mt-5 pl-5">
            <h1>Have no time<br/> to prepare food?</h1>
            <div className = "mt-3">
                <p>Choose one of our plans, enter delivery time<br />
                and enjoy delicious food without leaving your home!</p>
            </div>
            <div>
                <button>Order Food</button>
            </div>
            <footer>
                <ul>
                    <li><span><img src = {twitter}/></span></li>
                    <li><span><img src = {insta}/></span></li>
                    <li><span><img src = {dri}/></span></li>
                    <li  href = "#food" className = "d-none d-sm-block"><a href = "#food"><img href = "#food" src = {scroll}/></a></li>
                </ul>
            </footer>

            </div>
        );
    }
}
 
export default Content;