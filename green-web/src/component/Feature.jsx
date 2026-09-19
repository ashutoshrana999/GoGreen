import React from "react";

const Feature = () => {
  return (
    <div>
      <div
        className="
          min-h-[700px] md:h-100 w-full
          bg-cover bg-center
          bg-[url('/feature.png')]
          px-5 py-10
          flex flex-col md:flex-row
          gap-6 md:gap-10
          justify-center items-center
        "
      >

        {/* Card 1 */}
        <div
          className="
            flex
            w-full md:w-[45%]
            max-w-lg
            min-h-[230px] md:h-60
            p-4 md:p-6
            bg-white/20 backdrop-blur-md
            border border-white/30
            rounded-2xl
            shadow-xl
          "
        >
          <div className="w-[65%] md:w-[70%] p-2">
            <h2 className="text-lg md:text-xl font-bold text-white">
              Low-Maintenance Greens
            </h2>

            <p className="mt-2 text-xs md:text-sm text-white/80 leading-relaxed">
              Easy-care indoor plants with wide green leaves. These beauties
              grow in low light and need minimal care — perfect for busy homes.
            </p>
          </div>

          <div className="w-[35%] md:w-[30%] flex items-center">
            <img
              className="w-full h-40 md:h-48 rounded-xl object-cover"
              src="/indoor.avif"
              alt="Indoor plants"
            />
          </div>
        </div>


        {/* Card 2 */}
        <div
          className="
            flex
            w-full md:w-[45%]
            max-w-lg
            min-h-[230px] md:h-60
            p-4 md:p-6
            bg-white/20 backdrop-blur-md
            border border-white/30
            rounded-2xl
            shadow-xl
          "
        >
          <div className="w-[65%] md:w-[70%] p-2">
            <h2 className="text-lg md:text-xl font-bold text-white">
              Garden-Ready Plants
            </h2>

            <p className="mt-2 text-xs md:text-sm text-white/80 leading-relaxed">
              Bring life to your outdoor space with fresh, vibrant plants.
              Perfect for balconies, patios, and gardens. These greens thrive
              outdoors and add a touch of nature.
            </p>
          </div>

          <div className="w-[35%] md:w-[30%] flex items-center">
            <img
              className="w-full h-40 md:h-48 rounded-xl object-cover"
              src="/outdoor.png"
              alt="Outdoor plants"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Feature;