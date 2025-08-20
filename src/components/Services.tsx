import React from 'react';
import { 
  Megaphone, 
  ShoppingCart, 
  PenTool, 
  Palette, 
  BarChart3, 
  Search,
  Mail,
  Video
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: 'Digital Marketing Strategy',
      description: 'Comprehensive digital marketing campaigns tailored to your business goals and target audience.',
      features: ['Campaign Planning', 'Market Research', 'Competitor Analysis', 'ROI Optimization']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Management',
      description: 'Complete e-commerce solutions from platform setup to optimization and management.',
      features: ['Platform Setup', 'Product Management', 'Inventory Control', 'Sales Analytics']
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'Engaging content that tells your brand story and connects with your audience.',
      features: ['Blog Writing', 'Social Media Content', 'Video Scripts', 'Email Campaigns']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Visual designs that capture attention and communicate your brand message effectively.',
      features: ['Brand Identity', 'Marketing Materials', 'Social Media Graphics', 'Web Design']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to measure performance and optimize your marketing efforts.',
      features: ['Performance Tracking', 'Custom Reports', 'KPI Monitoring', 'Growth Analysis']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Personalized email campaigns that nurture leads and drive conversions.',
      features: ['Campaign Design', 'Automation Setup', 'List Management', 'A/B Testing']
    },
    {
      icon: Video,
      title: 'Video Marketing',
      description: 'Compelling video content that engages audiences and drives brand awareness.',
      features: ['Video Production', 'Motion Graphics', 'YouTube Optimization', 'Video Ads']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            My <span className="text-blue-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to grow your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:border-blue-300"
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300 transform group-hover:scale-110">
                <service.icon className="text-white w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl transform translate-x-8 -translate-y-8"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl transform -translate-x-4 translate-y-4"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help transform your business with strategic digital marketing and creative solutions.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;