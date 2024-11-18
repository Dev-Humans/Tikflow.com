import React from 'react';

const ProductFeatures = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features & Functionality</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature Card 1 */}
          <div className="border rounded-lg p-6 shadow-md bg-gray-50 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 mb-4 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-full h-full text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Shopify-TikTok Product Integration</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Seamless Import</li>
              <li>Custom Product Views</li>
            </ul>
          </div>

          {/* Feature Card 2 */}
          <div className="border rounded-lg p-6 shadow-md bg-gray-50 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 mb-4 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-full h-full text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Driven Content Creation & Scheduling</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Content Generator</li>
              <li>Automated Posting</li>
              <li>Custom Content Calendar</li>
            </ul>
          </div>

          {/* Feature Card 3 */}
          <div className="border rounded-lg p-6 shadow-md bg-gray-50 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 mb-4 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-full h-full text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h11M9 21V3m6 14h5m-5-4h5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Real-Time Analytics Dashboard</h3>
            <ul className="space-y-2 text-gray-500">
              <li>User Engagement Tracking</li>
              <li>Competitor Benchmarking</li>
              <li>Product Insights</li>
            </ul>
          </div>

          {/* Feature Card 4 */}
          <div className="border rounded-lg p-6 shadow-md bg-gray-50 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 mb-4 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-full h-full text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Viral Trend Alerts</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Trend Monitoring</li>
              <li>Weekly Viral Strategy Report</li>
            </ul>
          </div>

          {/* Feature Card 5 */}
          <div className="border rounded-lg p-6 shadow-md bg-gray-50 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 mb-4 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-full h-full text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6h6v13m3 0H6m6-8h5m-5 4h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Competitive Insights & Multi-Store Management
            </h3>
            <ul className="space-y-2 text-gray-500">
              <li>Competitor Analysis</li>
              <li>Centralized Dashboard for Agencies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
