import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  Briefcase, 
  FileText, 
  Link as LinkIcon, 
  Headphones,
  Github
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Projects', path: '/projects', icon: <Briefcase size={18} /> },
    { name: 'Resume', path: '/resume', icon: <FileText size={18} /> },
    { name: 'Connect', path: '/connect', icon: <LinkIcon size={18} /> },
    { name: 'Guidance', path: '/guidance', icon: <Headphones size={18} /> },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <NavLink to="/" className="flex items-center">
              <span className="font-bold text-2xl text-primary-500">Portfolio</span>
            </NavLink>
          </div>
          
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-white hover:bg-dark-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `flex items-center space-x-1 text-base font-medium transition-colors ${
                    isActive 
                      ? 'text-primary-500' 
                      : 'text-gray-200 hover:text-white'
                  }`
                }
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-dark-800 hover:bg-dark-700 transition-colors"
            >
              <Github size={18} className="mr-2" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'fixed' : 'hidden'} top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50`}>
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-dark-800 divide-y-2 divide-gray-700">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-2xl text-primary-500">Portfolio</span>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-dark-700 rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-white hover:bg-dark-600 focus:outline-none"
                  onClick={closeMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => 
                      `flex items-center space-x-3 p-3 rounded-md text-base font-medium transition-colors ${
                        isActive 
                          ? 'bg-dark-700 text-primary-500' 
                          : 'text-gray-200 hover:bg-dark-700 hover:text-white'
                      }`
                    }
                    onClick={closeMenu}
                  >
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-dark-900 text-white">
                      {link.icon}
                    </div>
                    <div className="text-base font-medium text-white">{link.name}</div>
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
          <div className="py-4 px-5 space-y-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              <Github size={18} className="mr-2" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;