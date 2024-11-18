import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const ProductPlan = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.pricing-card');

    cards.forEach((card) => {
      const onHover = () => {
        gsap.to(card, {
          keyframes: [
            { rotation: -3, duration: 0.1 },
            { rotation: 3, duration: 0.1 },
            { rotation: -2, duration: 0.1 },
            { rotation: 2, duration: 0.1 },
            { rotation: 0, duration: 0.1 },
          ],
          ease: 'power1.inOut',
        });
      };

      card.addEventListener('mouseenter', onHover);

      return () => {
        card.removeEventListener('mouseenter', onHover);
      };
    });
  }, []);

  return (
    <section className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-gray-50 flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {/* Standard Account Plan */}
          <div className="pricing-card border rounded-lg p-6 shadow-sm bg-white">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Tikflow Standard Account</h3>
              <div className="text-2xl font-bold">$67/annually</div>
            </div>
            <div className="mb-4 text-gray-500">
              Seamless entry into TikTok's ecosystem for Shopify, Amazon, eBay, and other e-commerce sellers.
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span> Basic Product Import
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span> AI Content Suggestions
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span> Automated Posting
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span> Growth Analytics
              </li>
            </ul>
          </div>

          {/* VIP Plan */}
          <div className="pricing-card border rounded-lg p-6 shadow-sm bg-white">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Tikflow VIP</h3>
              <div className="text-2xl font-bold">$300/annually</div>
            </div>
            <div className="mb-4 text-gray-500">
              Enhanced tools for merchants seeking deeper insights and greater content planning flexibility.
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span> All Standard Features
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span> Advanced Analytics
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span> Priority Customer Support
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span> Customizable Content Calendar
              </li>
            </ul>
          </div>

          {/* White Label Plan */}
          <div className="pricing-card border rounded-lg p-6 shadow-sm bg-white">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Tikflow White Label</h3>
              <div className="text-2xl font-bold">$899/annually</div>
            </div>
            <div className="mb-4 text-gray-500">
              Fully branded, customizable solution with advanced multi-store capabilities for agencies and high-volume sellers.
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span> All VIP Features
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span> Custom Branding
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span> Multi-Store Management
              </li>
              <li className="flex items-center">
                <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span> Competitive Insights
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPlan;
