import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Powerful, Flexible
                <span className="text-blue-600 block">Project Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert outsourced project management and cost control services for Oil & Gas, Mining, and Industrial sectors. Stay lean, agile, and profitable.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                'On-time, on-budget project delivery',
                'World-class project managers without payroll costs',
                'Proven expertise in complex industrial projects'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 animate-fade-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span className="font-semibold">Get Free Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold">
                View Our Services
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-600/20 rounded-3xl rotate-3 transform"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Project Timeline</div>
                  <div className="text-sm font-semibold text-green-600">On Track</div>
                </div>
                <div className="space-y-4">
                  {[
                    { phase: 'Planning & Design', progress: 100 },
                    { phase: 'Construction', progress: 65 },
                    { phase: 'Quality Control', progress: 30 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-700">{item.phase}</span>
                        <span className="text-gray-500">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;