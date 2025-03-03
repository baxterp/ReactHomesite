import React, { useState } from 'react';
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="full-height-section bg-[#161c26]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Testimonials and Comments</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            What clients and colleagues have to say about working with me.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-[#0e1218] rounded-lg p-10 shadow-md border border-gray-800 min-h-[300px] flex flex-col">
                      <p className="text-gray-300 italic mb-8 text-xl leading-relaxed flex-grow">"{testimonial.quote}"</p>
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
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-[#0e1218] rounded-full p-3 shadow-md hover:bg-[#161c26] transition duration-300 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00c8ff]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-8 w-8 text-gray-200" />
                </button>
                
                <button 
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-[#0e1218] rounded-full p-3 shadow-md hover:bg-[#161c26] transition duration-300 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00c8ff]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-8 w-8 text-gray-200" />
                </button>
              </>
            )}
          </div>
          
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
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