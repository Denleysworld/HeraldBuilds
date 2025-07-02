import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Styles/GuideDetails.css';

function GuideDetails() {
  const [guide, setGuide] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('selectedGuide');
    if (stored) setGuide(JSON.parse(stored));
  }, []);

  const stripNum = t => t.replace(/^\d+\.\s*/, '');

  if (!guide) {
    return (
      <div className="guides-container">
        <Header />
        <main className="guide-detail-page">
          <p>Guide not found.</p>
          <button
            className="back-to-guides-btn"
            onClick={() => navigate('/')}
          >
            Back to Guides
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="guides-container">
      <Header />
      <main className="guide-detail-page">
        <div className="guide-detail-content">
       

          <div className="guide-header-row">
            <span className={`level-tag ${guide.level?.toLowerCase()}`}>{guide.level}</span>
          </div>

          <h1>{guide.title}</h1>
          <p className="subtitle">{guide.summary}</p>

          {guide.tags && (
            <div className="tag-list detail">
              {guide.tags.map((tag, i) => (
                <span key={i} className="guide-tag">{tag}</span>
              ))}
            </div>
          )}
        
          {guide.link && (
            <p className="video-link">
              <a
                href={guide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="guide-link"
              >
                Watch Video
              </a>
            </p>
          )}

          <button
            className="back-to-guides-btn dark"
            onClick={() => navigate('/guides')}
          >
            ← Back to Guides
          </button>

          <div className="instructions-wrapper">
            <h2>Instructions</h2>
            <ol>
              {guide.instructions.map((s, i) => (
                <li key={i}>{stripNum(s)}</li>
              ))}
            </ol>

            {guide.recommendedTools?.length > 0 && (
              <>
                <h3>Recommended&nbsp;Tools</h3>
                <ul>
                  {guide.recommendedTools.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </>
            )}

            {guide.whatToLookFor?.length > 0 && (
              <>
                <h3>What&nbsp;to&nbsp;Look&nbsp;For</h3>
                <ul>
                  {guide.whatToLookFor.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GuideDetails;
