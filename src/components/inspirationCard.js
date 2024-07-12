import React from 'react';
import './inspirationCard.css'; // Import the CSS file

export default function InspirationCard({ imageSrc, altText, mainText, title, secondaryText }) {
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={imageSrc} alt={altText} />
        <div className="card-body">
          <p className="card-text">{mainText}</p>
          <h5 className="card-title">{title}</h5>
          <p className="card-text-second">{secondaryText}</p>
        </div>
      </div>
    </div>
  );
}
