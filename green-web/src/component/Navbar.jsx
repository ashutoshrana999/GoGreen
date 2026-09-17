import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  // Total quantity of all products
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-gray-200">
      
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-[#075c32]"
      >
        GoGreen
      </Link>

      {/* Navigation */}
      <div className="flex items-center gap-8">
        <Link to="/" className="text-gray-700 hover:text-[#075c32]">
          Home
        </Link>

        <Link to="/shop" className="text-gray-700 hover:text-[#075c32]">
          Shop
        </Link>

        <Link to="/about" className="text-gray-700 hover:text-[#075c32]">
          About
        </Link>

        <Link to="/contact" className="text-gray-700 hover:text-[#075c32]">
          Contact
        </Link>

            <Link to="/profile">
      Profile
    </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="relative text-gray-700 hover:text-[#075c32]"
        >
          🛒

          {/* Cart Count */}
          {cartCount > 0 && (
            <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#075c32] text-xs font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;