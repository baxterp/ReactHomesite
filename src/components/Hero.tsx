import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded state after a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="full-height-section bg-[#0e1218] relative overflow-hidden flex items-center justify-center">
      {/* 3D Elements - Stylized representation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full z-0">
        <div className="absolute w-64 h-64 bg-gradient-to-br from-orange-500/20 to-orange-700/20 rounded-lg transform rotate-12 translate-x-20 translate-y-10"></div>
        <div className="absolute w-48 h-48 bg-gradient-to-br from-blue-500/10 to-blue-700/10 rounded-lg transform -rotate-12 -translate-x-32 translate-y-20"></div>
        <div className="absolute w-32 h-32 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-full top-1/4 right-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tighter overflow-hidden">
            <span className="hero-name-wrapper inline-block">
              {/* First name with animation */}
              <span className={`hero-name-first inline-block ${isLoaded ? 'animate-reveal' : ''}`}>
                Baxter
              </span>
              {/* Last name with animation */}
              <span className={`hero-name-last inline-block ${isLoaded ? 'animate-reveal-delay' : ''}`}>
                Pearson
              </span>
            </span>
          </h1>
          <p className={`mt-4 text-xl tracking-widest text-gray-400 max-w-2xl mb-10 uppercase transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Fullstack Microsoft Software and Web Developer
          </p>
          
          {/* Social Media Icons */}
          <div className={`flex justify-center space-x-6 mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="https://www.linkedin.com/in/brpsoft" target="_blank" className="text-white hover:text-[#00c8ff] transition duration-300">
              <Linkedin size={36} />
            </a>
            <a href="https://github.com/baxterp" target="_blank" className="text-white hover:text-[#00c8ff] transition duration-300">
              <Github size={36} />
            </a>
          </div>
          
          {/* Contact Information */}
          <div className={`flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="tel:+447800533584" className="flex items-center text-white hover:text-[#00c8ff] transition duration-300">
              <Phone className="mr-2" size={20} />
              <span>+447800533584</span>
            </a>
            <a href="mailto:baxterrpearson@gmail.com" className="flex items-center text-white hover:text-[#00c8ff] transition duration-300">
              <Mail className="mr-2" size={20} />
              <span>baxterrpearson@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;