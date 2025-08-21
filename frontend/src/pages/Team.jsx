import React from 'react';
import { Award, Users, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team = () => {
  const stats = [
    { icon: Users, label: 'Expert Consultants', value: '50+' },
    { icon: Target, label: 'Projects Completed', value: '200+' },
    { icon: Award, label: 'Industry Experience', value: '15+ Years' },
    { icon: TrendingUp, label: 'Cost Savings Achieved', value: '$50M+' }
  ];

  const values = [
    {
      title: 'Simplicity & Transparency',
      description: 'We believe in straightforward business dealings and transparent project management that puts control back in your hands.'
    },
    {
      title: 'Proactive Management', 
      description: 'Our advanced management tools identify programming concerns early enough to avoid impact on project cost and schedule.'
    },
    {
      title: 'Lean & Agile Approach',
      description: 'Stay competitive with our cost and time-saving techniques while maintaining the highest quality standards.'
    },
    {
      title: 'Trust & Expertise',
      description: 'We understand the trust required to outsource critical functions and work tirelessly to earn and maintain that trust.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A specialized consultancy bringing senior program management expertise to companies of all sizes executing projects in Oil & Gas, Mining, and Industrial sectors.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Outsourced Excellence Without the Overhead
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By outsourcing critical project management areas to Planning & Cost Control Solutions, you receive the benefits of world-class Project Managers without adding them to your payroll. Our service is designed for companies that want to stay lean and agile while pursuing high-value projects.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Working tirelessly behind the scenes, we keep your contracts on-time, on-budget, and in-profit, freeing your team to focus on what they do best. Our comprehensive approach ensures every aspect of your projects receives the attention of seasoned professionals.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <p className="text-blue-800 font-medium">
                "Our mission is to provide high-quality service based on real innovation and expertise, with cost and time-saving techniques to keep you competitive in a tight market."
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Our Expertise</h3>
            <div className="space-y-3">
              {[
                'Senior Program Management Consultants',
                'Construction Superintendents',
                'Cost Estimators & Schedulers',
                'Quality Control Inspectors',
                'Risk Management Specialists',
                'Claims & Dispute Resolution Experts',
                'Forensic Cost Control Analysts',
                'Contract Administration Professionals',
                'Lender Advisory Consultants'
              ].map((expertise, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{expertise}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industries We Serve</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Oil & Gas',
                description: 'Comprehensive project management for upstream, midstream, and downstream operations.'
              },
              {
                title: 'Mining',
                description: 'Specialized expertise in mining project development, operations, and closure.'
              },
              {
                title: 'Industrial',
                description: 'Complex industrial project management across manufacturing and processing facilities.'
              }
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{industry.title}</h4>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Work with Our Expert Team?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let's discuss how our experienced professionals can help optimize your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold"
              >
                Contact Our Team
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-300 font-semibold"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;