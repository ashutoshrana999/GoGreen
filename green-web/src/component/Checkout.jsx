import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  // Check login
  if (!token) {
    navigate("/login");
    return;
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
  items: cart.map((item) => ({
    product: item._id || item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    image: item.image,
  })),

  totalAmount: total,

  shippingAddress: {
    name: formData.name,
    phone: formData.phone,
    address: formData.address,
    city: formData.city,
    state: formData.state,
    pincode: formData.pincode,
  },
}),
    });

    
  const data = await response.json();

console.log("ORDER RESPONSE:", data);

if (response.ok && data.success) {
  console.log("ORDER SUCCESS");

  clearCart();

  console.log("CART CLEARED");

  navigate("/profile");

} else {
  console.log("ORDER FAILED:", data);

  alert(data.message || "Order failed");
}} catch (error) {
  console.error("FRONTEND ORDER ERROR:", error);

  alert(error.message);
}
};

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#fafaf7] px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <div className="text-7xl">🛒</div>

          <h1 className="mt-6 font-serif text-4xl font-bold text-[#075c32]">
            Your Cart is Empty
          </h1>

          <p className="mt-4 text-gray-600">
            Add some beautiful plants before proceeding to checkout.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block rounded-lg bg-[#075c32] px-8 py-3 font-medium text-white hover:bg-[#064a29]"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafaf7] px-5 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[3px] text-[#075c32]">
            GoGreen
          </p>

          <h1 className="mt-2 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 text-gray-500">
            Enter your details to complete your order.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Customer Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
          >
            <h2 className="font-serif text-3xl font-semibold text-gray-900">
              Delivery Information
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              {/* Name */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#075c32]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#075c32]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="9876543210"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#075c32]"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="House no., street, area..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#075c32]"
                />
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Jaipur"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#075c32]"
                />
              </div>

              {/* State */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  placeholder="Rajasthan"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#075c32]"
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Pincode
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  placeholder="302001"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#075c32]"
                />
              </div>
            </div>

            {/* Payment */}
            <div className="mt-10">
              <h2 className="font-serif text-2xl font-semibold text-gray-900">
                Payment Method
              </h2>

              <div className="mt-4 rounded-lg border border-[#075c32] bg-[#f4faf6] p-4">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    defaultChecked
                  />

                  <div>
                    <p className="font-medium text-gray-900">
                      Cash on Delivery
                    </p>

                    <p className="text-sm text-gray-500">
                      Pay when your plants arrive.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-lg bg-[#075c32] py-4 font-semibold text-white transition hover:bg-[#064a29]"
            >
              Place Order • ₹{total.toFixed(2)}
            </button>
          </form>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-[#075c32] p-7 text-white shadow-lg">
            <h2 className="font-serif text-3xl font-semibold">
              Your Order
            </h2>

            <div className="my-6 h-px bg-white/20" />

            <div className="space-y-5">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium">
                      {item.name}
                    </p>

                    <p className="text-sm text-white/60">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-medium">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="my-6 h-px bg-white/20" />

            <div className="flex justify-between">
              <span className="text-white/70">
                Subtotal
              </span>

              <span>
                ₹{subtotal.toFixed(2)}
              </span>
            </div>

            <div className="mt-4 flex justify-between">
              <span className="text-white/70">
                Shipping
              </span>

              <span>
                ₹{shipping.toFixed(2)}
              </span>
            </div>

            <div className="my-6 h-px bg-white/20" />

            <div className="flex justify-between">
              <span className="text-lg">
                Total
              </span>

              <span className="text-2xl font-bold">
                ₹{total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;