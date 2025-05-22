
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Layout from '@/components/layout/Layout';
import IdeaAnalyzerForm from '@/components/analyze/IdeaAnalyzerForm';

const AnalyzePage = () => {
  const navigate = useNavigate();
  
  const handleIdeaSubmit = (idea: string) => {
    // In a real implementation, this would call the API
    console.log('Analyzing idea:', idea);
    
    // For now, we'll simulate a successful analysis and redirect to a mock results page
    toast.success('Analysis completed!');
    
    // In a real implementation, this would navigate to the results page with the analysis ID
    navigate('/results/mock-analysis-id');
  };
  
  return (
    <Layout>
      <div className="container-width">
        <div className="max-w-4xl mx-auto py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Analyze Your Business Idea
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Get comprehensive AI-powered validation in just moments.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-medium p-6 md:p-10 border border-gray-200 dark:border-gray-800">
            <IdeaAnalyzerForm onSubmit={handleIdeaSubmit} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnalyzePage;
