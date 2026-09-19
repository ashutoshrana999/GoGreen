import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Why from "./component/Why";
import Feature from "./component/Feature";
import Favorite from "./component/Favorite";
import About from "./component/About";
import Shop from "./component/Shop";
import Contact from "./component/Contact";
import Productdetails from "./component/Productdetails";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Profile from "./component/Profile";

const Home = () => {
  return (
    <>
      <Hero />
      <Why />
      <Feature />
      <Favorite />
    </>
  );
};

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      {/* Main content takes remaining space */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<Productdetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
};

export default App;