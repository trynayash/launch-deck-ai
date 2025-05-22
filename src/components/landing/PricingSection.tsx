
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    description: 'For testing your first idea',
    price: '0',
    frequency: '/month',
    features: [
      '1 idea analysis per month',
      'Market potential analysis',
      'Basic feature recommendations',
      'Basic competitive landscape',
      'PDF export',
    ],
    buttonText: 'Start for Free',
    buttonVariant: 'outline',
  },
  {
    name: 'Pro',
    description: 'For serious entrepreneurs',
    price: '19',
    frequency: '/month',
    features: [
      '25 ideas per month',
      'All analysis sections',
      'Advanced market insights',
      'Detailed competitive analysis',
      'Tech stack recommendations',
      'Pitch deck generation',
      'PDF & PPT exports',
    ],
    buttonText: 'Upgrade to Pro',
    buttonVariant: 'default',
    mostPopular: true,
  },
  {
    name: 'Business',
    description: 'For teams and agencies',
    price: '49',
    frequency: '/month',
    features: [
      'Unlimited ideas',
      'Team collaboration',
      'API access',
      'Custom AI fine-tuning',
      'Priority support',
      'Advanced analytics',
      'All export formats',
      'White-labeling options',
    ],
    buttonText: 'Get Business',
    buttonVariant: 'outline',
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-gray-50 dark:bg-gray-900 section-padding">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose the plan that's right for your business needs. All plans include our core analysis features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-soft ${
                plan.mostPopular 
                  ? 'border-2 border-primary-500 relative md:scale-105' 
                  : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-primary-500 text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{plan.description}</p>
                <div className="mt-6 mb-8">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">{plan.frequency}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.buttonVariant as "default" | "outline"} 
                  className="w-full" 
                  asChild
                >
                  <Link to="/signup">{plan.buttonText}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All plans include access to our core AI analysis engine. Upgrade or downgrade at any time.
            <br />
            Need a custom plan for your enterprise? <a href="#" className="text-primary-600 hover:underline">Contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
