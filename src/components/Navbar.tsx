
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-serif font-semibold flex items-center gap-2"
        >
          <span className="text-pink-dark">●</span> Portfolio
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-pink-dark transition-colors">Home</Link>
          <Link to="/about" className="hover:text-pink-dark transition-colors">About</Link>
          <Link to="/projects" className="hover:text-pink-dark transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-pink-dark transition-colors">Contact</Link>
          <a 
            href="#contact" 
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Say Hello!
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-6">
          <nav className="flex flex-col gap-6 text-lg">
            <Link 
              to="/" 
              className="py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className="py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="#contact" 
              className="button-primary mt-4 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Say Hello!
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
