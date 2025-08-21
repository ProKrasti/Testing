import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About = () => {
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Planning & Cost Control Solutions
          </h2>
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
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Outsourced Excellence Without the Overhead
            </h3>
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
            <h4 className="text-xl font-bold text-gray-900 mb-6">Our Service Coverage</h4>
            <div className="space-y-3">
              {[
                'Project Management Services',
                'Program Management',
                'Planning and Scheduling',
                'Construction Management',
                'Project Management Oversight (PMO)',
                'Lender Advisory',
                'Risk Management',
                'Construction Claims & Dispute Resolution',
                'Forensic Cost Control'
              ].map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;