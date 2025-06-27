import React, { useEffect, useState } from 'react';
import './Styles/GuideDetails.css'; // Import your CSS styles for this component
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const GuideDetails = () => {
  const [guide, setGuide] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedGuide = localStorage.getItem('selectedGuide');
    if (storedGuide) {
      setGuide(JSON.parse(storedGuide));
    }
  }, []);

  if (!guide) {
    return <p style={{ color: 'red' }}>No guide selected.</p>;
  }

  return (
    <div>
    <Header />
    <div className="guide-details-container">
    
      <div className="guide-card">
        <div className={`level-tag ${guide.level.toLowerCase()}`}>{guide.level}</div>
        <h2>{guide.title}</h2>
        <p className="guide-summary">{guide.summary}</p>

        <div className="tag-list">
          {guide.tags.map((tag, i) => (
            <span key={i} className="guide-tag">{tag}</span>
          ))}
        </div>

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Guides
        </button>

        <a href={guide.link} className="guide-link" target="_blank" rel="noopener noreferrer">
          Watch Video
        </a>

        <h3>Instructions</h3>
        <ol className="guide-list">
          {guide.instructions?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>

        <h3>Recommended Materials</h3>
        <ul className="guide-list">
          {guide.recommendedTools?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>What to Look Out For</h3>
        <ul className="guide-list">
          {guide.whatToLookFor?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default GuideDetails;
