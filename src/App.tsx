import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Videos from './components/Videos';
import Course from './components/Course';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Videos />
      <Course />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;