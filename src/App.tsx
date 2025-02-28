import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleInput from './components/ArticleInput';
import AnalysisResults from './components/AnalysisResults';
import Auth from './components/Auth';
import About from './pages/about';
import { Article, AnalysisResult } from './types';
import { analyzeArticle } from './utils/analysisUtils';
import { supabase } from './lib/supabase';

function App() {
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for existing session on load
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        setIsAuthenticated(true);
        setUserId(session.user.id);
      }
      
      setLoading(false);
    };

    checkSession();

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsAuthenticated(!!session);
        setUserId(session?.user.id || null);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleAnalyze = async (article: Article) => {
    if (!isAuthenticated || !userId) {
      alert('Please sign in to analyze articles');
      return;
    }

    setIsAnalyzing(true);
    
    try {
      // For demo purposes, we'll use the mock analysis
      // In a real app, you might call an external API here
      const analysisResults = analyzeArticle(article);
      console.log('Analysis results:', analysisResults);
      
      // Set the results directly without database storage
      setResults(analysisResults);
    } catch (error) {
      console.error('Error analyzing article:', error);
      alert('Error analyzing article. Please check the console for details.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setResults(null);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setUserId(null);
    setResults(null);
  };

  const MainContent = () => {
    if (loading) {
      return (
        <div className="flex-grow flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      );
    }

    if (!isAuthenticated) {
      return <Auth onAuthChange={(status) => setIsAuthenticated(status)} />;
    }

    if (isAnalyzing) {
      return (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg text-gray-700">Analyzing article for bias and misinformation...</p>
        </div>
      );
    }

    if (results) {
      return <AnalysisResults results={results} onReset={handleReset} />;
    }

    return (
      <>
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mb-3">1</div>
              <h3 className="font-semibold mb-2">Paste Your Article</h3>
              <p className="text-gray-600 text-sm">Enter the title and content of any news article you want to analyze.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mb-3">2</div>
              <h3 className="font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600 text-sm">Our algorithm scans for various types of bias and fact-checks key claims.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mb-3">3</div>
              <h3 className="font-semibold mb-2">Get Results</h3>
              <p className="text-gray-600 text-sm">Review detailed analysis of potential biases and factual accuracy.</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <ArticleInput onAnalyze={handleAnalyze} />
        </div>
      </>
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
        <main className="container mx-auto px-4 flex-grow">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;