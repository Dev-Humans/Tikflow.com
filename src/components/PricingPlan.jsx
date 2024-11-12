import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PricingPlan = () => {
  const cardRefs = useRef([]);

  const plans = [
    {
      title: "Starter",
      price: "$49",
      description: "Perfect for small businesses",
      features: ["5 scheduled posts/day", "Basic analytics", "Email support"],
    },
    {
      title: "Pro",
      price: "$99",
      description: "For growing businesses",
      features: ["Unlimited posts", "Advanced analytics", "Priority support"],
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: ["Custom solutions", "Dedicated manager", "24/7 support"],
    },
  ];

  const Button = ({ children, className }) => (
    <button className={`py-2 px-4 text-white rounded-md ${className}`}>
      {children}
    </button>
  );

  const Card = React.forwardRef(({ children, className }, ref) => (
    <div
      ref={ref}
      className={`p-6 bg-white rounded-lg shadow-md border border-black ${className}`}
    >
      {children}
    </div>
  ));

  const CheckCircle = () => (
    <span
      className="inline-block w-4 h-4 mr-2 bg-green-500 rounded-full"
      title="Check"
    ></span>
  );

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        const tl = gsap.timeline({ paused: true });

        tl.to(card, {
          scale: 1.05,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          duration: 0.3,
          ease: "power1.out",
        });

        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      }
    });
  }, []);

  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Pricing Plans
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
              Choose the perfect plan for your business
            </p>
          </div>
          <div className="grid w-full max-w-4xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="flex flex-col"
              >
                <div className="mb-4 text-center">
                  <h3 className="text-xl font-semibold">{plan.title}</h3>
                  <p className="text-gray-500">{plan.description}</p>
                  <p className="mt-2 text-4xl font-bold">{plan.price}</p>
                </div>
                <div className="flex-1">
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
