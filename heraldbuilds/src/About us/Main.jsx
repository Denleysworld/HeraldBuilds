import '../styles/About_styles.css';
import HeroSection from './Hero';
import OurStory from './OurStory';
import OurMission from './OurMission';
import OurValues from './OurValues';
import OurTeam from './OurTeam';
import Header from './Header';
import Footer from './Footer';
import './styles/about-styles.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="about-container">
        <HeroSection />
        <OurStory />
        <OurMission />
        <OurValues />
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
};

export default About;
