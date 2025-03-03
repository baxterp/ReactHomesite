import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="full-height-section bg-[#161c26]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
          </p>
        </div>
        
        <div className="w-full">
          <div className="bg-[#0e1218] rounded-lg shadow-md p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#00c8ff] mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-400">
                    <a href="mailto:baxterrpearson@gmail.com" className="hover:text-[#00c8ff] transition duration-300">
                      baxterrpearson@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#00c8ff] mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-gray-400">+447800533584</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#00c8ff] mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-400">CV3, Coventry, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;