import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-200 px-5 py-4 md:px-8">

      {/* Navbar Top */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold text-[#075c32]"
        >
          GoGreen
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-gray-700 transition hover:text-[#075c32]"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="text-gray-700 transition hover:text-[#075c32]"
          >
            Shop
          </Link>

          <Link
            to="/about"
            className="text-gray-700 transition hover:text-[#075c32]"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 transition hover:text-[#075c32]"
          >
            Contact
          </Link>

          <Link
            to="/profile"
            className="text-gray-700 transition hover:text-[#075c32]"
          >
            Profile
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-xl text-gray-700 hover:text-[#075c32]"
          >
            🛒

            {cartCount > 0 && (
              <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#075c32] text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-5 md:hidden">

          {/* Mobile Cart */}
          <Link
            to="/cart"
            className="relative text-xl text-gray-700"
          >
            🛒

            {cartCount > 0 && (
              <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#075c32] text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-gray-300 pt-5 md:hidden">

          <Link
            to="/"
            onClick={closeMenu}
            className="text-gray-700 hover:text-[#075c32]"
          >
            Home
          </Link>

          <Link
            to="/shop"
            onClick={closeMenu}
            className="text-gray-700 hover:text-[#075c32]"
          >
            Shop
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="text-gray-700 hover:text-[#075c32]"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="text-gray-700 hover:text-[#075c32]"
          >
            Contact
          </Link>

          <Link
            to="/profile"
            onClick={closeMenu}
            className="text-gray-700 hover:text-[#075c32]"
          >
            Profile
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;