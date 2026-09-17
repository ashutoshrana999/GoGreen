import React from "react";

const Why = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-5 py-16 font-serif sm:px-8 md:px-12 lg:px-16">

      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-extrabold text-green-800 sm:text-4xl md:text-5xl">
          Why Shop with GoGreen?
        </h1>

        <p className="py-5 text-sm font-light leading-6 text-gray-600 sm:text-base">
          From your doorstep to your space,
          <br />
          we make bringing nature home simple.
        </p>
      </div>

      {/* Features */}
      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-3">

        {/* Feature 1 */}
        <div className="flex min-h-40 flex-col justify-center text-center md:text-left">
          <h2 className="text-xl font-bold sm:text-2xl">
            Free & Fast Delivery
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Fresh plants delivered safely to your doorstep.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:col-span-2 lg:col-span-1 lg:row-span-2">
          <img
            className="h-72 w-full max-w-sm object-contain sm:h-96 lg:h-[440px]"
            src="/pngwing.com-2.png"
            alt="GoGreen plant"
          />
        </div>

        {/* Feature 2 */}
        <div className="flex min-h-40 flex-col justify-center text-center md:text-left">
          <h2 className="text-xl font-bold sm:text-2xl">
            24/7 Customer Support
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            We're here whenever you need help with your plants.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex min-h-40 flex-col justify-center text-center md:text-left">
          <h2 className="text-xl font-bold sm:text-2xl">
            Healthy Plants
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Carefully selected plants that are ready to thrive.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="flex min-h-40 flex-col justify-center text-center md:text-left">
          <h2 className="text-xl font-bold sm:text-2xl">
            Secure Payments
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Safe and secure checkout for every order.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Why;