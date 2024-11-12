import React from 'react';

const WaitList = () => {
  // Local Input component
  const Input = ({ className, ...props }) => (
    <input
      className={`py-2 px-4 border rounded-md shadow-sm ${className}`}
      {...props}
    />
  );

  // Local Button component
  const Button = ({ className, children, ...props }) => (
    <button
      className={`py-2 px-6 text-white rounded-md shadow-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Join the Waitlist
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Be the first to know when we launch
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1 border-gray-300 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="bg-green-500 hover:bg-green-600">
                Join Now
              </Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By joining, you agree to our Terms & Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitList;
