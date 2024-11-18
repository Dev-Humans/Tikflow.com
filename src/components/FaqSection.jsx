import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="w-full max-w-3xl mx-auto">
          <div className="space-y-4">
            {/* Accordion Item 1 */}
            <div className="border rounded-lg bg-white">
              <button
                onClick={() => toggleAccordion(0)}
                className="w-full text-left px-6 py-4 font-semibold text-lg bg-gray-100 rounded-t-lg hover:bg-gray-200 focus:outline-none"
              >
                What is Tikflow?
              </button>
              {activeIndex === 0 && (
                <div className="px-6 py-4 text-gray-700 bg-gray-50">
                  Tikflow is an AI-powered platform that helps e-commerce sellers create viral content and automate their
                  TikTok marketing efforts, boosting sales and engagement.
                </div>
              )}
            </div>

            {/* Accordion Item 2 */}
            <div className="border rounded-lg bg-white">
              <button
                onClick={() => toggleAccordion(1)}
                className="w-full text-left px-6 py-4 font-semibold text-lg bg-gray-100 rounded-t-lg hover:bg-gray-200 focus:outline-none"
              >
                How does Tikflow integrate with my e-commerce store?
              </button>
              {activeIndex === 1 && (
                <div className="px-6 py-4 text-gray-700 bg-gray-50">
                  Tikflow offers seamless integration with popular e-commerce platforms like Shopify, Amazon, and eBay,
                  allowing you to import products and sync data effortlessly.
                </div>
              )}
            </div>

            {/* Accordion Item 3 */}
            <div className="border rounded-lg bg-white">
              <button
                onClick={() => toggleAccordion(2)}
                className="w-full text-left px-6 py-4 font-semibold text-lg bg-gray-100 rounded-t-lg hover:bg-gray-200 focus:outline-none"
              >
                What kind of analytics does Tikflow provide?
              </button>
              {activeIndex === 2 && (
                <div className="px-6 py-4 text-gray-700 bg-gray-50">
                  Tikflow offers comprehensive analytics including user engagement tracking, competitor benchmarking,
                  and product performance insights to help you optimize your TikTok marketing strategy.
                </div>
              )}
            </div>

            {/* Accordion Item 4 */}
            <div className="border rounded-lg bg-white">
              <button
                onClick={() => toggleAccordion(3)}
                className="w-full text-left px-6 py-4 font-semibold text-lg bg-gray-100 rounded-t-lg hover:bg-gray-200 focus:outline-none"
              >
                Can I manage multiple stores with Tikflow?
              </button>
              {activeIndex === 3 && (
                <div className="px-6 py-4 text-gray-700 bg-gray-50">
                  Yes, with our White Label plan, you can manage multiple stores from a centralized dashboard,
                  making it perfect for agencies and high-volume sellers.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
