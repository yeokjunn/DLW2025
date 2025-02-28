import React from 'react';
import { AlertTriangle, Search, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isAuthenticated?: boolean;
  onSignOut?: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onSignOut }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 px-4 mb-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              DeepTrust
            </Link>
            <nav className="ml-8">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/about" className="text-blue-200 hover:text-white">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {isAuthenticated && (
            <button
              onClick={onSignOut}
              className="flex items-center text-blue-200 hover:text-white"
            >
              <LogOut className="w-5 h-5 mr-1" />
              Sign Out
            </button>
          )}
        </div>
        
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Understand Bias and Verify Facts in News Articles
          </h2>
          <p className="text-blue-100 mb-6">
            Our advanced NLP tool analyzes news articles to identify potential biases and verify factual accuracy, 
            helping you make more informed decisions about the information you consume.
          </p>
          <div className="flex items-center justify-center">
            <Search size={20} className="text-blue-300 mr-2" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;