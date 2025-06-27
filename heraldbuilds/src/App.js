import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuideDetails from './components/GuideDetails';
import GuidesPage from './components/GuidesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GuidesPage />} />
        <Route path="/guide-details" element={<GuideDetails />} />

      </Routes>
    </Router>
  );
};

export default App;
