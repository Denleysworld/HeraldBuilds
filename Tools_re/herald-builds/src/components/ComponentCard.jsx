import React from 'react';

const ComponentCard = ({ image, title, description, tips }) => (
  <div className="component-card">
    <div className="tool-image">
      <img src={image} alt={title} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="component-tips">
      <h4>Tips:</h4>
      <ul>
        {tips.map((tip, i) => (
          <li key={i}>{tip}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default ComponentCard;
