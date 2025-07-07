import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ToolCard from "./ToolCard";
import ComponentCard from "./ComponentCard";
import HardwareGridItem from "./HardwareGridItem";
import SafetyTip from "./SafetyTip";

// Import images
import heroImage from "./images/backgrounds/sdl-sanjaya-hero-bg.webp";
import screwdriverImage from "./images/tools/screwdriver.jpg";
import thermalPasteImage from "./images/tools/paste.webp";
import antiStaticImage from "./images/tools/strap.webp";
import zipTiesImage from "./images/tools/ties.webp";
import compressedAirImage from "./images/tools/air.webp";
import flashlightImage from "./images/tools/light.webp";
import sataImage from "./images/tools/sata.webp";
import psuImage from "./images/tools/psu.webp";
import caseImage from "./images/tools/case2.webp";
import caseFansImage from "./images/tools/case.webp";
import mountingImage from "./images/tools/motherboard-mounts.webp";
import drivesImage from "./images/tools/drives.webp";
import coolerImage from "./images/tools/cooler.webp";

// Import CSS
import "./tools-styles.css";

const ToolsPage = () => {
  useEffect(() => {
    document.title = "PC Building Tools";
  }, []);

  // Data for tools grid
  const tools = [
    {
      image: screwdriverImage,
      title: "Phillips Head Screwdriver",
      description:
        "The most essential tool for PC building. Used for mounting motherboards, drives, and other components.",
      tips: [
        "Use a magnetic tip for easier handling",
        "Size #2 works for most PC screws",
      ],
    },
    {
      image: thermalPasteImage,
      title: "Thermal Paste",
      description:
        "Ensures proper heat dissipation from the CPU or GPU to the cooler.",
      tips: ["Apply a pea-sized amount", "Spread evenly for best results"],
    },
    {
      image: antiStaticImage,
      title: "Anti-Static Wrist Strap",
      description:
        "Prevents static electricity from damaging sensitive components.",
      tips: [
        "Wear it on your wrist and connect it to a grounded surface",
        "Use it whenever handling components",
      ],
    },
    {
      image: zipTiesImage,
      title: "Cable Zip Ties",
      description: "Keeps cables organized and untangled.",
      tips: [
        "Use to secure loose cables",
        "Cut excess length to avoid interference",
      ],
    },
    {
      image: compressedAirImage,
      title: "Compressed Air Canister",
      description: "Cleans dust and debris from components and case.",
      tips: [
        "Use short bursts to avoid moisture buildup",
        "Hold can upright to prevent propellant discharge",
      ],
    },
    {
      image: flashlightImage,
      title: "Flashlight or Headlamp",
      description: "Illuminates dark areas inside the PC case.",
      tips: ["Use a bright, focused beam", "LED flashlights are recommended"],
    },

    // Add other tools similarly...
  ];

  // Data for components section
  const components = [
    {
      image: sataImage,
      title: "SATA Connections",
      description: "Essential for connecting storage drives.",
      tips: [
        "Secure both ends firmly",
        "Route cables neatly",
        "Check motherboard compatibility",
      ],
    },
    {
      image: psuImage,
      title: "Power Supply Unit (PSU)",
      description: "Supplies power to all components.",
      tips: [
        "Choose a PSU with enough wattage for your build",
        "Modular PSUs help with cable management",
      ],
    },
    {
      image: caseImage,
      title: "PC Case",
      description: "Houses all the components.",
      tips: ["Ensure it has good airflow", "Check GPU clearance"],
    },
    // Add other components...
  ];

  // Data for hardware grid
  const hardwareItems = [
    {
      image: caseFansImage,
      title: "Case Fans",
      specs: [
        { label: "Sizes:", value: "120mm, 140mm" },
        { label: "Types:", value: "Airflow, Static Pressure" },
        { label: "Connectors:", value: "3-pin, 4-pin PWM" },
      ],
    },
    {
      image: mountingImage, // motherboard-mounts.webp
      title: "Motherboard Mounting",
      specs: [
        { label: "Standoffs:", value: "Included with case" },
        { label: "Screws:", value: "Use provided screws" },
      ],
    },
    {
      image: drivesImage, // drives.webp
      title: "Storage Drives",
      specs: [
        { label: "HDD/SSD:", value: '2.5" or 3.5"' },
        { label: "NVMe:", value: "M.2 slot required" },
      ],
    },
    {
      image: coolerImage, // cooler.webp
      title: "CPU Cooler",
      specs: [
        { label: "Type:", value: "Air or Liquid" },
        { label: "Socket Compatibility:", value: "Check CPU socket type" },
      ],
    },
    // Add other hardware items...
  ];

  // Data for safety tips
  const safetyTips = [
    {
      icon: "fas fa-bolt",
      title: "Ground Yourself",
      description:
        "Always work on a non-conductive surface and ground yourself before handling components.",
    },
    {
      icon: "fas fa-exclamation-triangle",
      title: "Be Aware of Capacitors",
      description:
        "Some components like power supplies and motherboards can hold a charge. Be cautious when handling.",
    },
    {
      icon: "fas fa-eye",
      title: "Check Your Work",
      description:
        "Double-check all connections and screws before powering on your PC.",
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
          backgroundSize: "cover",
          backgroundPosition: "center",
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
