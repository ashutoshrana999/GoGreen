import React from "react";
import { Link } from 'react-router-dom';
import products from "../data/products";

const ProductCard = ({ product}) => {
  return (
    <div className="relative w-[290px] h-[430px]  hover:-translate-y-2 ">

  {/* Gray card */}
  <div className="absolute bottom-0 left-0 w-full h-[290px] rounded-lg bg-[#e1e1e1] shadow-md">
  </div>

  {/* Plant PNG */}
  <div className="absolute top-0 left-0 w-full h-[300px] flex justify-center hover:-translate-y-2">
    <img
      src={product.image}
      alt={product.name}
      className="w-[250px] h-[270px] object-contain"
    />
  </div>

  {/* Product information */}
  <div className="absolute bottom-7 left-0 w-full text-center">

    <h2 className="font-serif text-2xl font-semibold">
      {product.name}
    </h2>

    <div className="flex justify-center gap-2 mt-2">
      <span className="text-gray-500 line-through">
        ${product.oldPrice}
      </span>

      <span className="text-lg">
        ${product.price}
      </span>
    </div>
   <Link to={`/product/${product._id}`} >
  <button className="mt-5 w-[50%] rounded-lg bg-[#075c32] py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#064a29]">
    Order Now
  </button>
</Link>

          
        

  </div>

</div>
  );
};

export default ProductCard;