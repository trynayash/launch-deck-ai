
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Enter Your Idea',
    description: 'Simply input your business idea in a single sentence or short paragraph.',
    color: 'from-primary-500 to-primary-600'
  },
  {
    number: '02',
    title: 'AI Analysis Runs',
    description: 'Our AI engine processes your idea against market data, trends, and patterns.',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    number: '03',
    title: 'Review Insights',
    description: 'Get comprehensive analysis across five key business dimensions.',
    color: 'from-accent-500 to-accent-600'
  },
  {
    number: '04',
    title: 'Refine & Export',
    description: 'Download reports, share with your team, and iterate on your idea.',
    color: 'from-primary-600 to-secondary-600'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="bg-white dark:bg-gray-950 section-padding">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How StartupDeck Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Our AI-powered platform validates your business ideas in four simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Process steps */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-800"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-soft hover:shadow-medium transition-shadow h-full flex flex-col">
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color} text-white font-bold mb-4`}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
