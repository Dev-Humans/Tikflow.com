import React from "react";

const WavingBackgroundSection = () => {
  return (
    <section className="w-full h-screen mt-[80px] relative overflow-hidden bg-white">
      <div className="container relative z-10 px-4 md:px-6 h-full flex items-center justify-center">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-green-100 px-4 py-2 text-sm dark:bg-green-800/30">
              Boost E-Commerce Sales 10X via TikTok
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Go Viral with tikflow
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              AI-Powered Viral Content and Automation Tools
            </p>
          </div>

          {/* Center-aligned buttons with spacing on mobile */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded">
              Discover Our Solution
            </button>
            <button className="border border-green-500 text-green-500 px-6 py-3 rounded">
              Join Our Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WavingBackgroundSection;
