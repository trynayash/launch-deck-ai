
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Lightbulb, Loader2 } from 'lucide-react';

// Idea suggestions for inspiration
const ideaSuggestions = [
  "A marketplace for sustainable home products",
  "An AI-powered personal financial advisor app",
  "A subscription service for plant-based meal kits",
  "A platform connecting remote workers with coworking spaces",
  "A virtual reality fitness training program"
];

const IdeaAnalyzerForm = ({ onSubmit }: { onSubmit: (idea: string) => void }) => {
  const [idea, setIdea] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  
  const maxLength = 200;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim().length < 10) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      onSubmit(idea);
      setIsLoading(false);
    }, 1000);
  };
  
  const handleIdeaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setIdea(value);
      setCharacterCount(value.length);
    }
  };
  
  const useSuggestion = (suggestion: string) => {
    setIdea(suggestion);
    setCharacterCount(suggestion.length);
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="idea-input" className="block text-lg font-medium">
            What's your business idea?
          </label>
          <div className="relative">
            <Input
              id="idea-input"
              placeholder="Describe your business idea in a sentence or two..."
              value={idea}
              onChange={handleIdeaChange}
              className="pr-12 py-6 text-lg"
              disabled={isLoading}
              autoFocus
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
              {characterCount}/{maxLength}
            </div>
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full py-6 text-lg"
          disabled={idea.trim().length < 10 || isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              Analyze My Idea
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
      
      <div className="mt-8">
        <div className="flex items-center mb-4">
          <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
          <h3 className="font-medium">Need inspiration? Try one of these:</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {ideaSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => useSuggestion(suggestion)}
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 
                        text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm transition-colors"
              disabled={isLoading}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdeaAnalyzerForm;
