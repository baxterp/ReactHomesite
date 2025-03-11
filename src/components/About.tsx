const About = () => {
  return (
    <section id="about" className="full-height-section bg-[#161c26]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0e1218] rounded-lg shadow-md border border-gray-800 relative overflow-hidden">
            <div className="relative z-10 w-full p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I have been a commercial software developer since year 2000. I have experience with many software, and web platforms, encompassing the latest industry trends. 
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I pride myself on producing software to the highest standards. For examples of my Published Work and Expertise offered please see below.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-0">
                I will be happy to discuss any project requirements you may have, please feel free to contact me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;