import React from 'react';
import AboutBanner from '../../components/Banners/Banners';
import Collapse from '../../components/Collapse/Collapse';
import aboutData from '../../assets/data/about.json';
import './About.scss';

export default function About() {
  return (
    <div className="about-page">
      <AboutBanner />
      <div className="about-content">
        {aboutData.map((rule, id) => (
          <Collapse
            key={id}
            aboutTitle={rule.aboutTitle}
            aboutText={rule.aboutText}
            aboutStyle="about-style"
          />
        ))}
      </div>
    </div>
  );
}
