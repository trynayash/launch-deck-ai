
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="bg-white dark:bg-gray-950 section-padding">
      <div className="container-width">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl overflow-hidden shadow-hard">
          <div className="px-6 py-12 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Validate Your Next Big Idea?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of entrepreneurs using AI to test, refine, and perfect their business concepts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild className="bg-white text-primary-700 hover:bg-gray-100 rounded-full">
                <Link to="/analyze">
                  Analyze Your Idea Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white/10 rounded-full">
                <Link to="/signup">
                  Sign Up for Free
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
