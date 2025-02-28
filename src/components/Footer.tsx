import React from 'react';
import { AlertTriangle, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <AlertTriangle size={24} className="mr-2" />
            <span className="text-xl font-bold">DeepTrust</span>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/yourusername/deeptrust" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://twitter.com/deeptrust" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">About DeepTrust</h3>
            <p className="text-gray-400 text-sm">
              DeepTrust uses advanced natural language processing to help readers understand bias and 
              verify factual accuracy in news articles, promoting informed decision-making and media literacy.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="/guide" className="hover:text-blue-300 transition-colors">How It Works</a></li>
              <li><a href="/bias-types" className="hover:text-blue-300 transition-colors">Understanding Bias</a></li>
              <li><a href="/fact-checking" className="hover:text-blue-300 transition-colors">Fact-Checking Guide</a></li>
              <li><a href="/api" className="hover:text-blue-300 transition-colors">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="/terms" className="hover:text-blue-300 transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-blue-300 transition-colors">Privacy Policy</a></li>
              <li><a href="/disclaimer" className="hover:text-blue-300 transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} DeepTrust. All rights reserved.</p>
          <p className="mt-1">
            Our analysis is provided for informational purposes. Always verify information from multiple trusted sources.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;