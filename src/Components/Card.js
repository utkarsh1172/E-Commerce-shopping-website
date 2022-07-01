import React from 'react'
import tshirt from './images/tshirt.jpg';
import './css/slider.css'
import oppo from './images/oppo.jpg'
import mobile from './images/mobile.jpg'
import redmi from './images/redmi.jpg'
import tshirt2 from './images/tshirt2.jpg';
import tshirt3 from './images/tshirt3.jpg';

export default function Card(props) {
  return (
    <>
    <h2 className="hea">{props.heading}</h2>
    <div className="cards">
        <div className="card">
            <img src={tshirt} alt="" />
            <h3 className="productname">T-Shirt</h3>
            <h3 className="price">Price : 200</h3>
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quisquam!</small>
        </div>
        <div className="card">
            <img src={mobile} alt="" />
            <h3 className="productname">T-Shirt</h3>
            <h3 className="price">Price : 200</h3>
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quisquam!</small>
        </div>
        <div className="card">
            <img src={oppo} alt="" />
            <h3 className="productname">T-Shirt</h3>
            <h3 className="price">Price : 200</h3>
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quisquam!</small>
        </div>
        <div className="card">
            <img src={redmi} alt="" />
            <h3 className="productname">T-Shirt</h3>
            <h3 className="price">Price : 200</h3>
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quisquam!</small>
        </div>
        <div className="card">
            <img src={tshirt2} alt="" />
            <h3 className="productname">T-Shirt</h3>
            <h3 className="price">Price : 200</h3>
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quisquam!</small>
        </div>
        <div className="card">
            <img src={tshirt3} alt="" />
            <h3 className="productname">T-Shirt</h3>
            <h3 className="price">Price : 200</h3>
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quisquam!</small>
        </div>
        <div className="card">
            <img src={tshirt} alt="" />
            <h3 className="productname">T-Shirt</h3>
            <h3 className="price">Price : 200</h3>
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quisquam!</small>
        </div>
        <div className="card">
            <img src={tshirt} alt="" />
            <h3 className="productname">T-Shirt</h3>
            <h3 className="price">Price : 200</h3>
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quisquam!</small>
        </div>
        <div className="card">
            <img src={tshirt} alt="" />
            <h3 className="productname">T-Shirt</h3>
            <h3 className="price">Price : 200</h3>
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quisquam!</small>
        </div>
        <div className="card">
            <img src={tshirt} alt="" />
            <h3 className="productname">T-Shirt</h3>
            <h3 className="price">Price : 200</h3>
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quisquam!</small>
        </div>
        <div className="card">
            <img src={tshirt} alt="" />
            <h3 className="productname">T-Shirt</h3>
            <h3 className="price">Price : 200</h3>
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quisquam!</small>
        </div>
        <div className="card">
            <img src={tshirt} alt="" />
            <h3 className="productname">T-Shirt</h3>
            <h3 className="price">Price : 200</h3>
            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, quisquam!</small>
        </div>
    </div>
    </>
  )
}
