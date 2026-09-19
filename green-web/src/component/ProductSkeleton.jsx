import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col md:flex-row min-h-screen w-full p-5 md:p-10 gap-8 font-serif">

        {/* Image Skeleton */}
        <div className="w-full md:w-[40%] h-[400px] md:h-[550px] bg-gray-200 rounded-3xl">
        </div>

        {/* Details Skeleton */}
        <div className="flex flex-col w-full md:w-[50%] p-5 md:p-10">

          {/* Category */}
          <div className="h-8 w-32 bg-gray-200 rounded-full mb-6"></div>

          {/* Product name */}
          <div className="h-10 w-3/4 bg-gray-200 rounded-lg mb-4"></div>

          {/* Price */}
          <div className="flex gap-3 py-4">
            <div className="h-7 w-20 bg-gray-200 rounded"></div>
            <div className="h-7 w-16 bg-gray-200 rounded"></div>
          </div>

          {/* Button */}
          <div className="h-12 w-48 bg-gray-200 rounded-full mt-3"></div>

          {/* Description */}
          <div className="mt-12">
            <div className="h-7 w-28 bg-gray-200 rounded mb-5"></div>

            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
              <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
            </div>

            {/* Care */}
            <div className="h-7 w-48 bg-gray-200 rounded mt-10 mb-5"></div>

            <div className="space-y-3">
              <div className="h-4 w-40 bg-gray-200 rounded"></div>
              <div className="h-4 w-52 bg-gray-200 rounded"></div>
              <div className="h-4 w-36 bg-gray-200 rounded"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;