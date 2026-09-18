import React from 'react'
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Productdetails = () => {

    const navigate = useNavigate();
    const handleAddToCart = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        navigate("/login");
        return;
    }

    addToCart(product);
    };

     const { addToCart } = useContext(CartContext);
    // const { addToCart } = useCart();

  const { id } = useParams();

const [product, setProduct] = useState(null);

useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("PRODUCT:", data);
      setProduct(data);
    })
    .catch((error) => {
      console.log(error);
    });
}, [id]);

  if (!product) {
  return <h1>Product not found</h1>;
}


  return (
    <div>
        <div className='flex md:flex-row flex-col h-250 w-full p-10 gap-5 font-serif '>
            <div className='md:h-150 items-center  md:w-[40%] bg-green-200 rounded-3xl'>
                <img className='h-110 md:h-140 md:object-fit object-cover px-5' src={product.image} alt="" />

            </div >
            <div className='flex flex-col w-full md:w-[50%] p-10'>
                <div className='h-10 w-40 rounded-2xl bg-white border-green-700 border-2 py-2 shadow-xl text-center  text-green-600'>
                    <h3>{product.category}</h3>
                </div>
                <h2 className='font-extralight text-xl md:text-3xl text-green-700'>
                   {product.name}
                </h2>
                <div className="flex gap-2 mt-2 py-3">
                    <span className="text-gray-500 text-2xl line-through">
                        ₹{product.oldPrice}
                    </span>

                    <span className="text-2xl">
                        ₹{product.price}
                    </span>
                </div>
                <div>
                    <button onClick={handleAddToCart}className='bg-green-800 rounded-3xl h-12 w-50 text-white hover:bg-white border-green-700 border-2 hover:text-green-600'>
                        Add to Cart
                        
                    </button>
                </div>
                <div className='py-10'>
                    <h2 className='font-medium font-sans text-2xl'>Details</h2>
                    <p className='p-2 text-gray-500'>{product.description}</p>
                    <h3 className='font-light text-2xl  font-sans'>Best Care of Plant</h3>
                    <div className='p-4 text-gray-500'>
                        <p>Light - {product.care?.light}</p>
                    <p>Temperature - {product.care?.temperature}</p>
                    <p>Water - {product.care?.water}</p>
                    </div>
                    
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Productdetails
