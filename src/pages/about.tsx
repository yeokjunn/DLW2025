import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 flex-grow py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About DeepTrust</h1>
          
          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              DeepTrust is dedicated to promoting media literacy and critical thinking in the digital age. 
              Our AI-powered tool helps readers identify potential biases and verify factual accuracy in news articles, 
              enabling them to make more informed decisions about the information they consume.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In an era of information overload and increasing polarization, we believe that understanding 
              the biases and factual basis of news content is crucial for maintaining a well-informed society.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
            <div className="space-y-6">
              <p className="text-gray-600">
                Our advanced natural language processing algorithms analyze news articles across multiple dimensions:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-700">Bias Detection</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Political and ideological bias</li>
                    <li>Emotional manipulation</li>
                    <li>Demographic bias</li>
                    <li>Balance in reporting</li>
                    <li>Sensationalism</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-700">Factual Analysis</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Source credibility</li>
                    <li>Citation verification</li>
                    <li>Statement accuracy</li>
                    <li>Context analysis</li>
                    <li>Evidence evaluation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Real-time Analysis</h3>
                <p className="text-gray-600">
                  Get instant insights about article bias and factual accuracy as you read.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Detailed Reports</h3>
                <p className="text-gray-600">
                  Access comprehensive analysis with specific examples and explanations.
                </p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">User History</h3>
                <p className="text-gray-600">
                  Track your analysis history and compare different articles over time.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              Have questions or feedback? We'd love to hear from you. Reach out to us at:
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:contact@deeptrust.ai" className="text-blue-600 hover:text-blue-800">
                  contact@deeptrust.ai
                </a>
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Twitter:</span>{' '}
                <a href="https://twitter.com/deeptrust" className="text-blue-600 hover:text-blue-800">
                  @deeptrust
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About; 