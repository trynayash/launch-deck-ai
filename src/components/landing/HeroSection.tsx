
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary-50 to-transparent dark:from-primary-950/20 dark:to-transparent" />
      <div className="container-width section-padding relative pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/20 px-3 py-1 text-sm font-medium text-primary-700 dark:text-primary-300 mb-4 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2"></span>
              Now in public beta
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-in-up">
              Validate Your Business Ideas with <span className="gradient-text">AI</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 animate-slide-in-up" style={{ animationDelay: '150ms' }}>
              Get comprehensive market analysis, feature recommendations, and competitive insights in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-up" style={{ animationDelay: '300ms' }}>
              <Button size="lg" asChild className="rounded-full">
                <Link to="/analyze">
                  Analyze Your Idea <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full">
                <a href="#features">
                  See How It Works
                </a>
              </Button>
            </div>
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-2 text-sm text-gray-600 dark:text-gray-400 animate-slide-in-up" style={{ animationDelay: '450ms' }}>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                <span>Free idea analysis</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                <span>Enterprise-grade AI</span>
              </div>
            </div>
          </div>
          <div className="relative lg:h-[580px] flex items-center justify-center animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-hard p-6 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    <div className="h-12 flex items-center justify-between">
                      <div className="w-36 h-8 bg-gray-100 dark:bg-gray-700 rounded-md"></div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-3/4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                      <div className="h-4 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                    </div>
                    <div className="p-4 bg-primary-50 dark:bg-gray-700 rounded-lg">
                      <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-600 rounded mb-2"></div>
                      <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded"></div>
                      <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-600 rounded mt-2"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                      <div className="h-32 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
                    </div>
                    <div className="flex justify-end">
                      <div className="w-32 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
