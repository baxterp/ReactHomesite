import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // If it's the home link, scroll to top
    if (!sectionId) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    // Find the section element
    const section = document.getElementById(sectionId);
    
    if (section) {
      // Get the navbar height to offset the scroll position
      const navbarHeight = document.querySelector('nav').offsetHeight;
      
      // Calculate the position to scroll to
      const sectionPosition = section.offsetTop;
      const offsetPosition = sectionPosition - navbarHeight;
      
      // Scroll to the section
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0e1218] shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2" onClick={(e) => scrollToSection(e, null)}>
            <span className="text-xl font-mono text-[#00c8ff]">Baxter<span className="text-white">Pearson.</span>_</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="nav-item text-gray-300 hover:text-[#00c8ff] font-medium" onClick={(e) => scrollToSection(e, null)}>
              Home
            </a>
            <a href="#services" className="nav-item text-gray-300 hover:text-[#00c8ff] font-medium" onClick={(e) => scrollToSection(e, 'services')}>
              My Expertise
            </a>
            <a href="#published-work" className="nav-item text-gray-300 hover:text-[#00c8ff] font-medium" onClick={(e) => scrollToSection(e, 'published-work')}>
              Published Work
            </a>
            <a href="#testimonials" className="nav-item text-gray-300 hover:text-[#00c8ff] font-medium" onClick={(e) => scrollToSection(e, 'testimonials')}>
              Testimonials
            </a>
            <a href="#location" className="nav-item text-gray-300 hover:text-[#00c8ff] font-medium" onClick={(e) => scrollToSection(e, 'location')}>
              Location
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-2">
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
              <div className="w-8 h-0.5 bg-white"></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-[#00c8ff] font-medium"
                onClick={(e) => scrollToSection(e, null)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-gray-300 hover:text-[#00c8ff] font-medium"
                onClick={(e) => scrollToSection(e, 'services')}
              >
                My Expertise
              </a>
              <a 
                href="#published-work" 
                className="text-gray-300 hover:text-[#00c8ff] font-medium"
                onClick={(e) => scrollToSection(e, 'published-work')}
              >
                Published Work
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-300 hover:text-[#00c8ff] font-medium"
                onClick={(e) => scrollToSection(e, 'testimonials')}
              >
                Testimonials
              </a>
              <a 
                href="#location" 
                className="text-gray-300 hover:text-[#00c8ff] font-medium"
                onClick={(e) => scrollToSection(e, 'location')}
              >
                Location
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;