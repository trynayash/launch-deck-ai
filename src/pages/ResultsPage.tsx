
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Download, Share2, BarChart2, Layers, Users, Code, FilePresentation } from 'lucide-react';
import Layout from '@/components/layout/Layout';

// Mock data for the analysis results
const mockAnalysisData = {
  idea: "A marketplace for sustainable home products",
  sections: {
    market: {
      title: "Market Potential Analysis",
      icon: <BarChart2 className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Market Size & Growth</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The sustainable home products market is currently valued at $24.3 billion globally and is expected to grow at a CAGR of 9.8% over the next 5 years, reaching $38.9 billion by 2028.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">TAM/SAM/SOM Analysis</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-3">
              <div>
                <span className="font-medium">Total Addressable Market (TAM):</span> $24.3 billion globally
              </div>
              <div>
                <span className="font-medium">Serviceable Available Market (SAM):</span> $8.7 billion (North America + Europe)
              </div>
              <div>
                <span className="font-medium">Serviceable Obtainable Market (SOM):</span> $174 million (2% market capture)
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Growth Trends</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Rising consumer awareness about environmental sustainability (15% YoY increase)</li>
              <li>Increasing government regulations on non-sustainable products</li>
              <li>Growing preference for eco-friendly home goods among millennials and Gen Z</li>
              <li>Expanding online retail presence for sustainable products (22% YoY growth)</li>
            </ul>
          </div>
        </div>
      )
    },
    features: {
      title: "Feature Recommendations",
      icon: <Layers className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">MVP Features</h3>
            <div className="space-y-3">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <h4 className="font-medium text-green-800 dark:text-green-300 mb-1">High Priority</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Curated marketplace with verified sustainable products</li>
                  <li>Sustainability scoring system for all products</li>
                  <li>User accounts with saved preferences and favorites</li>
                  <li>Secure checkout and payment processing</li>
                  <li>Basic seller profiles and product listings</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-medium text-yellow-800 dark:text-yellow-300 mb-1">Medium Priority</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Product recommendation engine based on preferences</li>
                  <li>Environmental impact calculator</li>
                  <li>Customer reviews and ratings system</li>
                  <li>Seller analytics dashboard</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Future Roadmap</h3>
            <div className="relative pl-8 pb-8 space-y-8">
              {/* Timeline line */}
              <div className="absolute left-3 top-2 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
              
              {/* Q2 2024 */}
              <div className="relative">
                <div className="absolute left-[-30px] top-0 w-6 h-6 rounded-full bg-primary-500"></div>
                <h4 className="font-bold">Q2 2024</h4>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Mobile app launch</li>
                  <li>Carbon footprint tracking for purchases</li>
                  <li>Advanced product filtering and search</li>
                </ul>
              </div>
              
              {/* Q4 2024 */}
              <div className="relative">
                <div className="absolute left-[-30px] top-0 w-6 h-6 rounded-full bg-primary-500"></div>
                <h4 className="font-bold">Q4 2024</h4>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Subscription model for regular sustainable essentials</li>
                  <li>Community features and sustainability challenges</li>
                  <li>International expansion to key markets</li>
                </ul>
              </div>
              
              {/* Q2 2025 */}
              <div className="relative">
                <div className="absolute left-[-30px] top-0 w-6 h-6 rounded-full bg-primary-500"></div>
                <h4 className="font-bold">Q2 2025</h4>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>B2B platform for sustainable office supplies</li>
                  <li>AR/VR product visualization</li>
                  <li>Sustainability certification program for sellers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    competitors: {
      title: "Competitive Landscape",
      icon: <Users className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Direct Competitors</h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold">EarthWise Market</h4>
                <div className="mt-2 space-y-1">
                  <div><span className="font-medium">Strengths:</span> Strong brand recognition, 120K+ monthly visitors</div>
                  <div><span className="font-medium">Weaknesses:</span> Limited product range, high commission fees</div>
                  <div><span className="font-medium">Market Share:</span> ~12% of online sustainable home goods</div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold">GreenHome</h4>
                <div className="mt-2 space-y-1">
                  <div><span className="font-medium">Strengths:</span> Strong sustainability verification, loyal customer base</div>
                  <div><span className="font-medium">Weaknesses:</span> Poor user experience, slow delivery times</div>
                  <div><span className="font-medium">Market Share:</span> ~8% of online sustainable home goods</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Indirect Competitors</h3>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold">Amazon (Eco-friendly section)</h4>
                <div className="mt-2 space-y-1">
                  <div><span className="font-medium">Threat Level:</span> High</div>
                  <div><span className="font-medium">Differentiator:</span> Amazon lacks verification of sustainability claims</div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold">Specialty Sustainable Retailers</h4>
                <div className="mt-2 space-y-1">
                  <div><span className="font-medium">Threat Level:</span> Medium</div>
                  <div><span className="font-medium">Differentiator:</span> These retailers focus on specific product categories rather than full-home solutions</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Positioning Map</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
              <div className="text-center text-gray-500 dark:text-gray-400">
                [Market positioning visualization would be displayed here]
              </div>
            </div>
          </div>
        </div>
      )
    },
    techStack: {
      title: "Tech Stack Recommendations",
      icon: <Code className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Frontend Technologies</h3>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between">
                  <h4 className="font-bold">Next.js</h4>
                  <span className="text-green-600 dark:text-green-400 font-medium">Recommended</span>
                </div>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  React framework with server-side rendering capabilities, ideal for SEO and performance optimization in e-commerce.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold">Tailwind CSS + Headless UI</h4>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Utility-first CSS framework paired with accessible UI components for rapid, consistent frontend development.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Backend Technologies</h3>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between">
                  <h4 className="font-bold">Node.js with Express</h4>
                  <span className="text-green-600 dark:text-green-400 font-medium">Recommended</span>
                </div>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Scalable JavaScript runtime with a robust web framework, allowing for unified language across the stack.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold">PostgreSQL</h4>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Powerful relational database well-suited for complex e-commerce data relationships and transactions.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Third-Party Services</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">Payment Processing:</span> Stripe for global payment support</li>
              <li><span className="font-medium">Search:</span> Algolia for advanced product search capabilities</li>
              <li><span className="font-medium">Authentication:</span> Auth0 or Firebase Authentication</li>
              <li><span className="font-medium">Media Storage:</span> AWS S3 for product images and assets</li>
              <li><span className="font-medium">Analytics:</span> Segment with connections to multiple analytics platforms</li>
            </ul>
          </div>
        </div>
      )
    },
    pitchDeck: {
      title: "Pitch Deck",
      icon: <FilePresentation className="h-5 w-5" />,
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Pitch Deck Preview</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[...Array(10)].map((_, index) => (
                <div 
                  key={index} 
                  className="aspect-[16/9] bg-white dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600 flex items-center justify-center"
                >
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Slide {index + 1}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button>
                <Download className="mr-2 h-4 w-4" /> Download Pitch Deck
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-2">Deck Content</h3>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold">Slide 1: Title</h4>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  "EcoHome Market: The Sustainable Marketplace for Home Products"
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold">Slide 2: Problem</h4>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Consumers want sustainable home products but struggle to find verified options in one place.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold">Slide 3: Solution</h4>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  A curated marketplace with verified sustainable products and transparent environmental impact information.
                </p>
              </div>
              
              <div className="text-center text-gray-500 dark:text-gray-400 py-2">
                [+ 7 more slides]
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
};

const ResultsPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('market');
  
  // In a real implementation, we would fetch the analysis data based on the ID
  const analysisData = mockAnalysisData;
  
  return (
    <Layout>
      <div className="container-width">
        <div className="py-16 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Analysis Results
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {analysisData.idea}
              </p>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Export PDF
              </Button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-medium border border-gray-200 dark:border-gray-800 p-6">
            <Tabs 
              defaultValue="market" 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
                {Object.entries(analysisData.sections).map(([key, section]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="flex items-center justify-center gap-2"
                  >
                    {section.icon}
                    <span className="hidden md:inline">{section.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(analysisData.sections).map(([key, section]) => (
                <TabsContent key={key} value={key} className="pt-2">
                  <h2 className="text-2xl font-bold mb-6 md:hidden flex items-center gap-2">
                    {section.icon}
                    {section.title}
                  </h2>
                  {section.content}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResultsPage;
