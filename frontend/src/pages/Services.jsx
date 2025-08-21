import React from 'react';
import { Settings, Building2, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: 'Project Management Services',
      description: 'Our certified experts deliver comprehensive project management through strategic upfront planning, real-time monitoring, and proactive risk mitigation. We ensure projects stay on schedule, within budget, and exceed quality expectations.',
      features: [
        'Program Management',
        'Planning & Scheduling',
        'Project Management Oversight (PMO)',
        'Risk Management'
      ]
    },
    {
      icon: Building2,
      title: 'Construction Management Services',
      description: 'Our specialized construction management teams bring deep industry expertise with Construction Superintendents, Estimators, Schedulers, and Inspectors who understand the complexities of industrial projects.',
      features: [
        'Construction Superintendents',
        'Cost Estimators & Schedulers',
        'Quality Inspectors',
        'Contract & Claims Avoidance'
      ]
    },
    {
      icon: Shield,
      title: 'Forensic Cost Control Services',
      description: 'Advanced auditing and investigative capabilities protect your projects from cost overruns, inaccuracies, waste, and fraudulent activities through comprehensive prevention, detection, and resolution strategies.',
      features: [
        'Cost Auditing & Investigation',
        'Fraud Prevention & Detection',
        'Claims & Dispute Resolution',
        'Lender Advisory Services'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized services designed to keep your critical projects on-time, on-budget, and in-profit across Oil & Gas, Mining, and Industrial sectors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Complete Service Coverage
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Program Management',
              'Planning and Scheduling', 
              'Construction Management',
              'Project Management Oversight (PMO)',
              'Lender Advisory',
              'Risk Management',
              'Construction Claims & Dispute Resolution',
              'Forensic Cost Control',
              'Contract Administration'
            ].map((service, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Optimize Your Project Management?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let our experts help you achieve better project outcomes with reduced costs and improved efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/team"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-300 font-semibold"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;