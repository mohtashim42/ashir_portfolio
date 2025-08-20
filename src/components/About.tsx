import React from 'react';
import { Award, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '3+', label: 'Years Experience' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Target, value: '100+', label: 'Projects Completed' },
    { icon: Zap, value: '95%', label: 'Success Rate' },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Digital Marketing Expert & Creative Professional
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a passionate digital marketing specialist with expertise in e-commerce management, 
                content creation, and graphic design. I help businesses grow their online presence 
                through strategic campaigns and compelling visual storytelling.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With a keen eye for design and data-driven approach to marketing, I create solutions 
                that not only look great but deliver measurable results. My goal is to transform 
                your brand's digital footprint and drive meaningful engagement.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700 font-medium">Strategic Digital Marketing Campaigns</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700 font-medium">E-commerce Platform Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700 font-medium">Content Creation & Copywriting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-slate-700 font-medium">Brand Identity & Graphic Design</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <h4 className="text-xl font-bold mb-4">My Mission</h4>
                <p className="text-blue-100 leading-relaxed">
                  To empower businesses with innovative digital marketing strategies and creative 
                  solutions that drive growth, enhance brand visibility, and create lasting 
                  connections with their target audience.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-6 mb-4 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white mx-auto" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;