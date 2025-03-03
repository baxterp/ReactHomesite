import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Nina Mack',
    role: 'Managing Director, Worship Digital Limited',
    quote: 'He showed excellent technical ability with Microsoft .NET technologies and a good understanding of the project requirements. He delivered the projects in the agreed timescale and was easy to work with throughout.'
  },
  {
    name: 'Kenneth Kiiza',
    role: 'Developer',
    quote: 'Great person to work with. Very precise and quite helpful in the Mercato Development. We bounce ideas off each other. Pleasure to work with.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Project Manager, TechSolutions Ltd',
    quote: 'Baxter consistently delivered high-quality code and innovative solutions to complex problems. His expertise in Microsoft technologies was invaluable to our project success. I would highly recommend him for any software development role.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    // Pause auto-advance temporarily when user manually navigates
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-advance after 5 seconds
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    // Pause auto-advance temporarily when user manually navigates
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-advance after 5 seconds
  };

  // Pause auto-advance when user hovers over testimonial
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section id="testimonials" className="full-height-section bg-[#0e1218] flex flex-col">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title and description at the top of the section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Testimonials and Comments</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            What clients and colleagues have to say about working with me.
          </p>
        </div>
        
        {/* Testimonials content in the middle/center of the section */}
        <div className="max-w-3xl mx-auto w-full flex-grow flex flex-col justify-center">
          {/* Testimonials image */}
          <div className="mb-12 relative flex justify-center">
            <div className="relative w-[35%] mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2400&auto=format&fit=crop" 
                alt="Business colleagues in a meeting" 
                className="rounded-lg shadow-lg border border-gray-800 h-40 object-cover w-full"
              />
              {/* Dimming overlay */}
              <div className="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
            </div>
          </div>
          
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-[#161c26] rounded-lg p-7 shadow-md border border-gray-800 min-h-[242px] flex flex-col">
                      <p className="text-gray-300 italic mb-5 text-xl leading-relaxed flex-grow">"{testimonial.quote}"</p>
                      <div className="mt-auto">
                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                        <p className="text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {testimonials.length > 1 && (
              <>
                <button 
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-[#161c26] rounded-full p-3 shadow-md hover:bg-[#1c2736] transition duration-300 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00c8ff]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-8 w-8 text-gray-200" />
                </button>
                
                <button 
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-[#161c26] rounded-full p-3 shadow-md hover:bg-[#1c2736] transition duration-300 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00c8ff]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-8 w-8 text-gray-200" />
                </button>
              </>
            )}
          </div>
          
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-5 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 5000);
                  }}
                  className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-[#00c8ff]' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;