
import React from 'react';
import './membercard.css';

const MemberCard = ({ name, title, description, image, bgColor }) => {
  return (
    <div className="member-card" style={{ backgroundColor: bgColor }}>
      <img src={`${process.env.PUBLIC_URL}/`+ image} alt={name} className="member-image" />
      <div className="member-info">
        <h2 className="member-name">{name}</h2>
        <h4 className="member-title">{title}</h4>
        <p className="member-description">{description}</p>
      </div>
    </div>
  );
};

export default MemberCard;
