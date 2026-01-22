
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Education from './components/Education';
import SocialProof from './components/SocialProof';
import Location from './components/Location';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ice-white selection:bg-gold selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Education />
        <SocialProof />
        <Location />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
