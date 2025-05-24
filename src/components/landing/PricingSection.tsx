import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Crown, Rocket } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    description: 'For testing your first idea',
    price: '0',
    frequency: '/month',
    icon: <Sparkles className="w-6 h-6 text-white" />,
    gradient: 'from-gray-600 to-gray-700',
    features: [
      '1 idea analysis per month',
      'Market potential analysis',
      'Basic feature recommendations',
      'Basic competitive landscape',
      'PDF export',
    ],
    buttonText: 'Start for Free',
    buttonVariant: 'outline',
    delay: '0ms'
  },
  {
    name: 'Pro',
    description: 'For serious entrepreneurs',
    price: '19',
    frequency: '/month',
    icon: <Crown className="w-6 h-6 text-white" />,
    gradient: 'from-purple-600 to-blue-600',
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
    delay: '200ms'
  },
  {
    name: 'Business',
    description: 'For teams and agencies',
    price: '49',
    frequency: '/month',
    icon: <Rocket className="w-6 h-6 text-white" />,
    gradient: 'from-cyan-600 to-teal-600',
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
    delay: '400ms'
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900 section-padding overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container-width relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-medium text-white mb-6">
            <Crown className="w-4 h-4 mr-2 text-yellow-400" />
            Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Choose Your
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that's right for your business needs. All plans include our core analysis features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-xl rounded-2xl border transition-all duration-500 hover:scale-105 animate-slide-in-up ${
                plan.mostPopular 
                  ? 'border-purple-500/50 md:scale-105 shadow-2xl shadow-purple-500/25' 
                  : 'border-white/10 hover:border-white/20'
              }`}
              style={{ animationDelay: plan.delay }}
            >
              {/* Most popular badge */}
              {plan.mostPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white border border-white/20">
                    <Crown className="w-3 h-3 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative z-10 p-8">
                {/* Plan icon */}
                <div className={`inline-flex rounded-xl p-3 bg-gradient-to-r ${plan.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {plan.icon}
                </div>

                {/* Plan details */}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 text-lg">{plan.frequency}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-3 w-3 text-green-400" />
                      </div>
                      <span className="text-gray-300 group-hover:text-gray-200 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  variant={plan.buttonVariant as "default" | "outline"} 
                  className={`w-full py-3 font-semibold transition-all duration-300 ${
                    plan.mostPopular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0'
                      : 'bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20'
                  }`}
                  asChild
                >
                  <Link to="/signup">{plan.buttonText}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-16 text-center animate-fade-in animation-delay-1000">
          <p className="text-gray-400 mb-4">
            All plans include access to our core AI analysis engine. Upgrade or downgrade at any time.
          </p>
          <p className="text-sm text-gray-500">
            Need a custom plan for your enterprise? 
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors ml-1 underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
