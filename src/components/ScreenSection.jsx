import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      title: "AI Content Creation",
      description: "Generate viral content ideas with our AI engine",
      icon: () => <span>🌍</span>, // Placeholder icon
    },
    {
      title: "Analytics Dashboard",
      description: "Track your performance with detailed analytics",
      icon: () => <span>📊</span>, // Placeholder icon
    },
    {
      title: "Automation Tools",
      description: "Schedule and automate your content posting",
      icon: () => <span>📅</span>, // Placeholder icon
    },
    {
      title: "E-commerce Integration",
      description: "Seamlessly connect with your online store",
      icon: () => <span>🛒</span>, // Placeholder icon
    },
  ];

  console.log(features); // Debug feature array

  // Local Card Component
  const Card = ({ title, description, icon: Icon }) => (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        {Icon && <Icon className="h-10 w-10 text-green-500" />} {/* Render the icon */}
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Features that power your growth
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our AI-powered platform helps you create viral content and automate your TikTok marketing.
            </p>
          </div>
          <div className="grid gap-6 lg:col-span-2 lg:grid-cols-2">
            {features.map((feature, index) => {
              console.log(`Rendering feature: ${feature.title}`); // Debug individual features
              return (
                <Card
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon} // Use placeholder icons
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
