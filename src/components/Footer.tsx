import React from 'react';
import { Mail, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-36 h-36 bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Ashir<span className="text-blue-400">.</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Digital Marketing Specialist & Creative Designer helping businesses 
              grow through strategic marketing and compelling design.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:ashirnaeem999@gmail.com"
                className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashir-naeem/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Digital Marketing</li>
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">E-commerce Management</li>
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Content Creation</li>
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">Graphic Design</li>
              <li className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">SEO Optimization</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Get In Touch</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>ashirnaeem999@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={16} />
                <span>linkedin.com/in/ashir-naeem</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start a Project
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © 2025 Ashir Naeem. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;