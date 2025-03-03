import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PublishedWork from './components/PublishedWork';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0e1218] pb-16">
      <Navbar />
      <Hero />
      <Services />
      <PublishedWork />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
}

export default App;