import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1487491424367-7571f9afbb30?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTc1NTc2NzQxMHww&ixlib=rb-4.1.0&q=85)'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Hero Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Powerful, Flexible
              <span className="block text-blue-400">Project Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Expert outsourced project management and cost control for Oil & Gas, Mining, and Industrial sectors
            </p>

            {/* Key Benefits */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-200">
              {[
                'On-time delivery',
                'Cost control expertise', 
                'Proven track record'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                to="/contact"
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 text-lg font-semibold backdrop-blur-sm"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { name: 'Project Management', path: '/services' },
              { name: 'Cost Control', path: '/services' },
              { name: 'Our Team', path: '/team' },
              { name: 'Contact Us', path: '/contact' },
              { name: 'Free Quote', path: '/contact' },
              { name: 'Learn More', path: '/services' }
            ].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm font-medium border border-white/20 hover:border-white/40"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-gradient-to-t from-black/80 to-transparent py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-300">
              <p className="text-sm">
                Serving Oil & Gas, Mining & Industrial sectors across Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;