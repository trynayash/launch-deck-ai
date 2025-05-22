
import React from 'react';
import { 
  TrendingUp, 
  CodeSquare, 
  Activity, 
  Users, 
  Terminal,
  Presentation
} from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="h-12 w-12 text-primary-600" />,
    title: 'Market Potential Analysis',
    description: 'Get detailed TAM/SAM/SOM breakdowns, growth trends, and market size projections to understand your opportunity.',
    color: 'bg-primary-50 dark:bg-primary-900/20'
  },
  {
    icon: <CodeSquare className="h-12 w-12 text-secondary-600" />,
    title: 'Feature Recommendations',
    description: 'Receive prioritized MVP features and a strategic product roadmap to guide your development.',
    color: 'bg-secondary-50 dark:bg-secondary-900/20'
  },
  {
    icon: <Users className="h-12 w-12 text-primary-600" />,
    title: 'Competitive Landscape Map',
    description: 'Identify direct and indirect competitors with a detailed positioning map to find your unique advantage.',
    color: 'bg-primary-50 dark:bg-primary-900/20'
  },
  {
    icon: <Terminal className="h-12 w-12 text-secondary-600" />,
    title: 'Tech Stack Recommendations',
    description: 'Get tailored technology recommendations with clear justification for your specific business needs.',
    color: 'bg-secondary-50 dark:bg-secondary-900/20'
  },
  {
    icon: <Presentation className="h-12 w-12 text-primary-600" />,
    title: 'Auto-Generated Pitch Deck',
    description: 'Create a professional 10-slide pitch deck with key metrics and visualizations ready to share with investors.',
    color: 'bg-primary-50 dark:bg-primary-900/20'
  },
  {
    icon: <Activity className="h-12 w-12 text-secondary-600" />,
    title: 'Ongoing Validation',
    description: 'Track market changes and update your analysis as your business evolves and grows over time.',
    color: 'bg-secondary-50 dark:bg-secondary-900/20'
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-white dark:bg-gray-950 section-padding">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Validation Suite
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get all the insights you need to validate and refine your business idea in one powerful platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-soft hover:shadow-medium transition-shadow bg-white dark:bg-gray-900"
            >
              <div className={`inline-flex rounded-xl p-3 ${feature.color} mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
