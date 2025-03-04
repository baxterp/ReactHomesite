import { Github, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#0a0e14] text-white py-4 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-xl font-mono text-[#00c8ff]">Baxter<span className="text-white">Pearson.</span>_</span>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-4 md:mb-0">
            <a href="https://www.linkedin.com/in/brpsoft" target="_blank" className="text-white hover:text-[#00c8ff] transition duration-300">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/baxterp" target="_blank" className="text-white hover:text-[#00c8ff] transition duration-300">
              <Github size={18} />
            </a>
          </div>
          
          <p className="text-gray-400 text-sm">
            &copy; Baxter Pearson {new Date().getFullYear()} 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;