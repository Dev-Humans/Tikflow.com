import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'; // GSAP for animation

const Testimonies = () => {
  const cardRef = useRef([]);

  useEffect(() => {
    let currentIndex = 0;

    // Function to swap the cards
    const swapCards = () => {
      // Get the current card and next card
      const currentCard = cardRef.current[currentIndex];
      const nextIndex = (currentIndex + 1) % cardRef.current.length;
      const nextCard = cardRef.current[nextIndex];

      // GSAP animation to fade out the current card and fade in the next
      gsap.to(currentCard, { opacity: 0, duration: 0.5, onComplete: () => {
        gsap.to(nextCard, { opacity: 1, duration: 0.5 });
      }});

      // Update index for next round
      currentIndex = nextIndex;
    };

    // Start the swap every 3 seconds
    const interval = setInterval(swapCards, 3000);

    // Cleanup the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  // Local Star component
  const Star = () => (
    <span className="inline-block w-6 h-6 text-yellow-500">&#9733;</span>
  );

  // Local Card component
  const Card = ({ children, className, index }) => (
    <div
      ref={(el) => cardRef.current[index] = el}
      className={`p-6 bg-white rounded-lg shadow-md border border-gray-200 opacity-0 ${className}`}
    >
      {children}
    </div>
  );

  // Local CardHeader component
  const CardHeader = ({ children }) => (
    <div className="mb-4">{children}</div>
  );

  // Local CardContent component
  const CardContent = ({ children }) => (
    <div>{children}</div>
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100  flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Customers Say
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 grid-cols-1">
            {[
              {
                quote: "tikflow has transformed our TikTok marketing strategy. We've seen 10x growth in engagement.",
                author: "Marketing Director",
                company: "E-commerce Brand",
              },
              {
                quote: "The AI-powered content suggestions are spot-on. It's like having a viral content expert on the team.",
                author: "Social Media Manager",
                company: "Fashion Retailer",
              },
              {
                quote: "The automation tools have saved us countless hours. Now we can focus on strategy instead of execution.",
                author: "CEO",
                company: "Digital Agency",
              },
            ].map((testimonial, index) => (
              <Card key={index} index={index} className="text-left">
                <CardHeader>
                  <Star />
                  <p className="mt-4">{testimonial.quote}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
