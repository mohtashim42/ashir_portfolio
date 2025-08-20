import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Download, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Sticky Social Links */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50">
        <a
          href="https://www.linkedin.com/in/ashir-naeem/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-slate-900/90 backdrop-blur-sm text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transform hover:scale-110 transition-all duration-300 shadow-lg border border-slate-700/50"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-slate-900/90 backdrop-blur-sm text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transform hover:scale-110 transition-all duration-300 shadow-lg border border-slate-700/50"
        >
          <Github size={20} />
        </a>
        <a
          href="mailto:ashirnaeem999@gmail.com"
          className="p-3 rounded-full bg-slate-900/90 backdrop-blur-sm text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transform hover:scale-110 transition-all duration-300 shadow-lg border border-slate-700/50"
        >
          <Mail size={20} />
        </a>
        <a
          href="/Ashir Naeem _ CV.pdf"
          download
          className="p-3 rounded-full bg-slate-900/90 backdrop-blur-sm text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transform hover:scale-110 transition-all duration-300 shadow-lg border border-slate-700/50"
        >
          <Download size={20} />
        </a>
      </div>

      {/* Main Navigation */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-white">
                Ashir
              </span>
              <span className="text-blue-500">.</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-white/90 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Get In Touch
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md shadow-xl border-t border-slate-800">
              <div className="p-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-white/90 font-medium hover:text-blue-400 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex justify-center gap-4 pt-4 border-t border-slate-800">
                  <a
                    href="https://www.linkedin.com/in/ashir-naeem/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="/Ashir Naeem _ CV.pdf"
                    download
                    className="p-3 rounded-full bg-white/10 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300"
                  >
                    <Download size={20} />
                  </a>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                  Get In Touch
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};export default Header;