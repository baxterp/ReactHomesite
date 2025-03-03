import React from 'react';
import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="full-height-section bg-[#0e1218]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Location</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Based in Coventry, UK
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#161c26] rounded-lg shadow-md p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Location Details</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#00c8ff] mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-white">Address</h4>
                  <p className="text-gray-400">CV3, Coventry, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] bg-[#161c26] rounded-lg shadow-md overflow-hidden border border-gray-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38792.12782591447!2d-1.5049728371582074!3d52.39729499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b151701d47c1%3A0x9dc2f08126d0a8ee!2sCoventry%20CV3%2C%20UK!5e0!3m2!1sen!2sus!4v1716835200000!5m2!1sen!2sus&map_id=8f879a0ea603ec0&night_mode=true" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="CV3, Coventry, UK Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;