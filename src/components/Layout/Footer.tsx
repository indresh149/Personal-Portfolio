import { Heart, Github, Linkedin, Twitter ,Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300 flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/indresh149" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/indreshgoswami/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://x.com/IndreshGoswami5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>

            <a 
              href="https://www.instagram.com/indreshgoswami5/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Instagram  size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Indresh Goswami. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;