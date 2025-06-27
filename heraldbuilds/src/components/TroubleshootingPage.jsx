import React from "react";
import TroubleshootingSection from "../components/TroubleshootingSection";
import "./styles.css";

export default function TroubleshootingPage() {
  return (
    <div>
      <h1>PC Troubleshooting Guide</h1>
      <p className="subtitle">
        Find solutions to common PC problems or browse categories to get your
        system running smoothly again.
      </p>

      <TroubleshootingSection file="boot-issues.json" title="Boot Issues" />
      <TroubleshootingSection
        file="performance-issues.json"
        title="Performance Issues"
      />
      <TroubleshootingSection
        file="hardware-problems.json"
        title="Hardware Problems"
      />
      <TroubleshootingSection
        file="connectivity-issues.json"
        title="Connectivity Issues"
      />
      <TroubleshootingSection file="audio-video.json" title="Audio and Video" />
    </div>
  );
}
