import React from 'react';
import './Section1.css';

const Section1 = () => {
  return (
    <div className="video-section">
      <video className="video-bg" autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/Section-0.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="text-overlay">
        <h1 className='animated-text'>User Interface Design Project</h1>
        <p>Exploring Mythological Characters of Indian History</p>
      </div>
    </div>
  );
};

export default Section1;
