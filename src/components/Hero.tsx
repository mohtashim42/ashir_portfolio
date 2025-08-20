import React from 'react';
import { ArrowDown, Download, Mail, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
       <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239DB2BF%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-float-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56 animate-fade-in-up">
              {/* Gradient Border Container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 p-1 animate-gradient-rotate">
                {/* Image Container */}
                <div className="rounded-full bg-slate-900 p-2 h-full w-full">
                  <img
                    src="/profile.jpg"
                    alt="Ashir Naeem"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Ashir Naeem
              </span>
            </h1>
            {/* Animated Role Title */}
            <div className="text-xl md:text-2xl text-slate-300 mb-4 flex flex-col items-center gap-2">
              <span className="font-semibold">Digital Marketing Specialist & Creative Designer</span>
              {/* Animated Typing Effect */}
              <div className="overflow-hidden whitespace-nowrap inline-block">
                <span className="inline-block animate-typing border-r-4 border-blue-500 animate-blink pr-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-medium">
                  Transforming Ideas into Digital Success
                </span>
              </div>
            </div>
            
            {/* Motivational Caption */}
            <div className="flex flex-col gap-3 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              <p className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
                "Driven by passion, guided by innovation, delivering excellence."
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                Transforming brands through strategic digital marketing, innovative e-commerce solutions, 
                compelling content creation, and stunning graphic design.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-300">
            <a
              href="/Ashir Naeem _ CV.pdf"
              download
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
            <a
              href="mailto:ashirnaeem999@gmail.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in-up animation-delay-500">
            <a
              href="mailto:ashirnaeem999@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 transform hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashir-naeem/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900 transform hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/60" size={24} />
        </div>
      </div>
    </section>
  )
};

export default Hero;