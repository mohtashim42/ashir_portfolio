import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'E-commerce Brand Transformation',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand overhaul and e-commerce platform optimization resulting in 200% sales increase.',
      technologies: ['Shopify', 'Google Ads', 'Email Marketing', 'Analytics'],
      metrics: { conversion: '+65%', traffic: '+150%', revenue: '+200%' }
    },
    {
      title: 'Social Media Campaign Success',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multi-platform social media strategy that increased brand awareness and engagement significantly.',
      technologies: ['Facebook Ads', 'Instagram', 'TikTok', 'Analytics'],
      metrics: { engagement: '+300%', reach: '+250%', followers: '+180%' }
    },
    {
      title: 'Content Marketing Strategy',
      category: 'Content',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive content strategy including blog posts, videos, and social media content.',
      technologies: ['SEO Writing', 'Video Editing', 'Canva', 'WordPress'],
      metrics: { organic: '+220%', engagement: '+180%', leads: '+90%' }
    },
    {
      title: 'Brand Identity Design',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity design including logo, typography, and brand guidelines.',
      technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Brand Strategy'],
      metrics: { recognition: '+400%', consistency: '+100%', satisfaction: '98%' }
    },
    {
      title: 'PPC Campaign Optimization',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Google Ads and Facebook Ads optimization resulting in significant cost reduction and improved ROI.',
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'Conversion Tracking'],
      metrics: { cpc: '-45%', roas: '+180%', conversions: '+120%' }
    },
    {
      title: 'Website Redesign & SEO',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete website redesign with SEO optimization for better user experience and search rankings.',
      technologies: ['WordPress', 'SEO', 'UX Design', 'Performance Optimization'],
      metrics: { traffic: '+280%', bounce: '-40%', rankings: 'Top 3' }
    }
  ];

  const categories = ['All', 'Marketing', 'E-commerce', 'Content', 'Design'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-indigo-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Showcasing successful projects and measurable results
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-300">
                    <Eye size={24} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="bg-slate-700/30 rounded-lg p-2">
                      <div className="text-blue-400 font-bold text-sm">{value}</div>
                      <div className="text-slate-400 text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;