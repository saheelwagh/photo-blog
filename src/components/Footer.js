import React from 'react';

import config from '../../config';

export default function Footer({ onClose, isVisible }) {
  return (
    <footer id="footer" className={`panel ${isVisible ? 'active' : ''}`}>
      <div className="inner split">
        <div>
          <section>
            <h2>More about the blog</h2>
            <p>
              Shanti Wagh is an amateur nature photographer based in Goa, India. She loves spotting birds and promptly identifying them with the help of her friend and guide: Aradhana Rao Rangahachar, discovering indigeneous flowers growing naturally around her home and documenting these through her camera. Her other hobbies include tending to her backyard garden and cooking delicious food.
              <p style={{color:'orange'}}>All images clicked through Canon PowerShot SX60 HS</p>
            </p>
            <p>
              Website Developed by <a href="https://www.swagh.xyz">S.Wagh</a>
            </p>
          </section>
         
        </div>
        <div>
          
        </div>
      </div>
      <div
        className="closer"
        onClick={e => {
          e.preventDefault();
          onClose();
        }}
      />
    </footer>
  );
}
