import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Styles/GuideDetails.css';

function GuideDetails() {
  const [guide, setGuide] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const stored = localStorage.getItem("selectedGuide");
    if (stored) setGuide(JSON.parse(stored));
  }, []);

  if (!guide) {
    return (
      <>
        <Header />
        <div className="guide-detail-page">
          <p style={{ color: "red" }}>No guide selected.</p>
          <button className="back-to-guides-btn" onClick={() => navigate("/guides")}>
            ← Back to Guides
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="guide-detail-page">
        <button className="back-to-guides-btn" onClick={() => navigate("/guides")}>
          ← Back to Guides
        </button>
        <div className="guide-card">
          <div className={`level-tag ${guide.level?.toLowerCase()}`}>{guide.level}</div>
          <h2>{guide.title}</h2>
          <p className="guide-summary">{guide.summary}</p>
          <div className="tag-list">
            {(guide.tags || []).map((tag, i) => (
              <span className="guide-tag" key={i}>{tag}</span>
            ))}
          </div>
          {guide.link && (
            <a href={guide.link} className="guide-link" target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
          )}

          <h3>Instructions</h3>
          <div>
            {(guide.instructions || []).map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>

          <h3>Recommended Materials</h3>
          <ul>
            {(guide.recommendedTools || []).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>What to Look Out For</h3>
          <ul>
            {(guide.whatToLookFor || []).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GuideDetails;
