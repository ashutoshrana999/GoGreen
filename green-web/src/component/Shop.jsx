import React from "react";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
// import products from "../data/products";
import { useEffect, useState } from "react";



const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/products`)
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);


  return (
    <div>
    <section className="px-5 py-16 flex-grow">

      {/* Heading */}
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold text-[#087f3f]">
          Our Plants
        </h1>

        <p className="mt-3 text-gray-600">
          Bring nature home with our beautiful collection
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-5 sm:grid-cols-2 md:px-20 lg:px-0 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>

      {/* Explore Button */}
      <div className="mt-12 flex justify-center">
        <button className="rounded-md border border-gray-500 px-6 py-3 font-serif text-gray-700 transition hover:bg-[#075c32] hover:text-white">
          Explore More
        </button>
      </div>

     

    </section>
    <Footer/>
     </div>
    
  );
};

export default Shop;