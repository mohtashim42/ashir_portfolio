import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Digital Marketing Specialist',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Lead digital marketing campaigns, manage e-commerce platforms, and create compelling content for various brands. Increased client ROI by 150% through strategic campaign optimization.',
      achievements: [
        'Managed $500K+ annual advertising budget',
        'Increased conversion rates by 40% across all campaigns',
        'Led a team of 5 marketing professionals',
        'Implemented successful SEO strategies resulting in 200% organic traffic growth'
      ]
    },
    {
      title: 'E-commerce Marketing Manager',
      company: 'Digital Commerce Hub',
      location: 'Gujranwala, Pakistan',
      period: '2021 - 2022',
      description: 'Specialized in e-commerce platform management, product listing optimization, and conversion rate optimization for multiple online stores.',
      achievements: [
        'Optimized 200+ product listings for better visibility',
        'Implemented automated email marketing campaigns',
        'Reduced cart abandonment rate by 35%',
        'Created brand guidelines for 10+ e-commerce brands'
      ]
    },
    {
      title: 'Content Creator & Graphic Designer',
      company: 'Creative Agency Pro',
      location: 'Gujranwala, Pakistan',
      period: '2020 - 2021',
      description: 'Created engaging visual content, managed social media accounts, and designed marketing materials for various clients across different industries.',
      achievements: [
        'Designed 500+ social media graphics',
        'Created video content with 2M+ total views',
        'Developed brand identities for 15+ startups',
        'Increased social media engagement by 300%'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-200/20 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            My journey in digital marketing and creative design
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                    
                    <div className="flex items-center gap-4 text-slate-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Building size={16} />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-800 mb-3">Key Achievements:</h4>
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;