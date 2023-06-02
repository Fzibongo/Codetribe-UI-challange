import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service">
          <h3>Web design</h3>
          <p>design websites that are displayed in the internet.</p>
        </div>
        <div className="service">
          <h3>Web development</h3>
          <p>Work involved in developing a website for the internet or an intranet .</p>
        </div>
        <div className="service">
          <h3>Web management</h3>
          <p>the collection of processes used to insure your website is professional, up-to-date, and functioning as intended.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;