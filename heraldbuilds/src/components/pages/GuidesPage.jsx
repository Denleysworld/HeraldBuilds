import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Styles/GuidesPage.css'; 


const GuidesPage = () => {
  const [guides, setGuides] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayLimits, setDisplayLimits] = useState({
    beginner: 3,
    intermediate: 3,
    advanced: 3
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch('guides.json')
      .then((res) => res.json())
      .then((data) => setGuides(data))
      .catch((err) => console.error('Failed to fetch guides:', err));
  }, []);

  const handleShowMore = (level) => {
    setDisplayLimits((prev) => ({
      ...prev,
      [level]: prev[level] + 3,
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setDisplayLimits({ beginner: 3, intermediate: 3, advanced: 3 });
  };

  const renderGuideCard = (guide) => (
    <div className="guide-card" key={guide.title}>
      <div className={`level-tag ${guide.level.toLowerCase()}`}>{guide.level}</div>
      <h3>{guide.title}</h3>
      <p className="guide-summary">{guide.summary}</p>
      <div className="tag-list">
        {guide.tags.map((tag, i) => (
          <span key={i} className="guide-tag">{tag}</span>
        ))}
      </div>
      <button className="open-guide-btn" onClick={() => openGuideDetail(guide)}>More Info</button>
    </div>
  );

  const openGuideDetail = (guide) => {
    localStorage.setItem('selectedGuide', JSON.stringify(guide));
    navigate('/guide-details');
  };

  const levels = ['beginner', 'intermediate', 'advanced'];

  const filteredGuides = guides.filter((guide) =>
    guide.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categorizedGuides = levels.reduce((acc, level) => {
    acc[level] = filteredGuides.filter(
      (guide) => guide.level.toLowerCase() === level
    );
    return acc;
  }, {});

  return (
    <div className="guides-container">
    <Header />
    <main className="guides-main">
      <section className="guides-header">
        <h1 className="title">PC Building Guides</h1>
        <p className="subtitle">Explore our guides to build your ultimate PC</p>
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search guides..."
        />
      </section>

      {levels.map((level) => (
        <section key={level} className="guide-section">
          <h2>{level.charAt(0).toUpperCase() + level.slice(1)} Guides</h2>
          <div className="guide-grid">
            {categorizedGuides[level]?.slice(0, displayLimits[level]).map(renderGuideCard)}
          </div>
          {categorizedGuides[level]?.length > displayLimits[level] && (
            <button
              className="show-more-btn"
              onClick={() => handleShowMore(level)}
            >
              Show More
            </button>
          )}
        </section>
      ))}
    </main>
    <Footer/>
    </div>
  );
};


export default GuidesPage;
