import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuideDetails from "./components/pages/GuideDetails";
import GuidesPage from "./components/pages/GuidesPage";
import TroubleshootingPage from "./components/pages/TroubleshootingPage";
import FAQ from "./components/pages/FAQ";
import Home from "./components/pages/Home";
import ToolsPage from "./components/pages/ToolsPage";
import Main from "./About us/Main";
import ScrollToTop from "./components/pages/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/guide-details" element={<GuideDetails />} />
        <Route path="/troubleshooting" element={<TroubleshootingPage />} />
        <Route path="/about" element={<Main />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
};

export default App;
