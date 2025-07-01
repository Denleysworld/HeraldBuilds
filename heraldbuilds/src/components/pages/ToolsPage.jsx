import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ToolCard from './ToolCard';
import ComponentCard from './ComponentCard';
import HardwareGridItem from './HardwareGridItem';
import SafetyTip from './SafetyTip';

// Import images
import heroImage from './images/backgrounds/sdl-sanjaya-4gbbKX63V5I-unsplash (1).webp';
import screwdriverImage from './images/tools/phillips.webp';
// import thermalPasteImage from './images/tools/paste.webp';
// import antiStaticImage from './images/tools/strap.webp';
// import zipTiesImage from './images/tools/ties.webp';
// import compressedAirImage from './images/tools/air.webp';
// import flashlightImage from './images/tools/light.webp';
import sataImage from './images/tools/sata.webp';
// import psuImage from './images/tools/psu.webp';
// import caseImage from './images/tools/case2.webp';
import caseFansImage from './images/tools/case.webp';
// import mountingImage from './images/tools/phillips.webp';
// import storageImage from './images/tools/sata.webp';
// import coolingImage from './images/tools/paste.webp';

// Import CSS
import './tools-styles.css';

const ToolsPage = () => {
  // Data for tools grid
  const tools = [
    {
      image: screwdriverImage,
      title: 'Phillips Head Screwdriver',
      description: 'The most essential tool for PC building. Used for mounting motherboards, drives, and other components.',
      tips: [
        'Use a magnetic tip for easier handling',
        'Size #2 works for most PC screws'
      ]
    },
    

    // Add other tools similarly...
  ];

  // Data for components section
  const components = [
    {
      image: sataImage,
      title: 'SATA Connections',
      description: 'Essential for connecting storage drives.',
      tips: [
        'Secure both ends firmly',
        'Route cables neatly',
        'Check motherboard compatibility'
      ]
    },
    // Add other components...
  ];

  // Data for hardware grid
  const hardwareItems = [
    {
      image: caseFansImage,
      title: 'Case Fans',
      specs: [
        { label: 'Sizes:', value: '120mm, 140mm' },
        { label: 'Types:', value: 'Airflow, Static Pressure' },
        { label: 'Connectors:', value: '3-pin, 4-pin PWM' }
      ]
    },
    // Add other hardware items...
  ];

  // Data for safety tips
  const safetyTips = [
    {
      icon: 'fas fa-bolt',
      title: 'Ground Yourself',
      description: 'Always work on a non-conductive surface and ground yourself before handling components.'
    },
    // Add other tips...
  ];

  return (
    <div className="tools-page">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="tools-hero"
        style={{ 
          background: `linear-gradient(rgba(14, 19, 32, 0.8), rgba(14, 19, 32, 0.9)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <h1>Essential PC Building Tools</h1>
          <p>Everything you need to build your PC safely and efficiently</p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="tools-grid container">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </section>

      {/* Components Section */}
      <section className="components-section container">
        <h2>Essential PC Components</h2>
        <p>Common components and accessories for PC building</p>
        <div className="components-grid">
          {components.map((component, index) => (
            <ComponentCard key={index} {...component} />
          ))}
        </div>
      </section>

      {/* Hardware Grid */}
      <section className="hardware-grid container">
        <h2>Hardware Components</h2>
        <p>Essential hardware components for your PC build</p>
        <div className="grid-container">
          {hardwareItems.map((item, index) => (
            <HardwareGridItem key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Safety Section */}
      <section className="tools-guide container">
        <h2>Safety First!</h2>
        <div className="safety-tips">
          {safetyTips.map((tip, index) => (
            <SafetyTip key={index} {...tip} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ToolsPage;