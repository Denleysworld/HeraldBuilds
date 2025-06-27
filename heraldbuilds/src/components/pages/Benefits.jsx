import React from 'react';
import './Styles/Benefits.css'; 
import './Styles/base.css'; 


const Benefits = () => {
  return (
    <section className="benefits container">
      <h2>Why Herald Builds?</h2>
      <div className="benefit-cards">
        <div className="card">
          <p>Beginner Friendly Guides</p>
        </div>
        <div className="card">
          <p>Optimized Build Recommendations</p>
        </div>
        <div className="card">
          <p>Quick Troubleshooting Help</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;