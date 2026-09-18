import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Shipping
  const shipping = subtotal > 0 ? 5 : 0;

  // Final total
  const total = subtotal + shipping;

  // Empty cart
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#fafaf7] px-6 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center py-20 text-center">

          <div className="mb-6 text-7xl">
            🛒
          </div>

          <h1 className="font-serif text-4xl font-bold text-[#075c32]">
            Your Cart is Empty
          </h1>

          <p className="mt-4 max-w-md text-gray-600">
            Looks like you haven't added any plants yet.
            Explore our collection and bring some greenery home.
          </p>

          <Link
            to="/shop"
            className="mt-8 rounded-lg bg-[#075c32] px-8 py-3 font-medium text-white transition hover:bg-[#064a29]"
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
          <p className="mb-2 text-sm font-medium uppercase tracking-[3px] text-[#075c32]">
            GreenNest
          </p>

          <h1 className="font-serif text-4xl font-bold text-gray-900 md:text-5xl">
            Your Cart
          </h1>

          <p className="mt-3 text-gray-500">
            Review your plants before checking out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Cart Items */}
          <div className="space-y-5">

            {cart.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                  {/* Image */}
                  <div className="flex h-36 w-full shrink-0 items-center justify-center rounded-xl bg-[#f1f2ed] sm:h-36 sm:w-36">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col">

                    <div className="flex items-start justify-between gap-4">

                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-[#075c32]">
                          {item.category || "Indoor Plant"}
                        </p>

                        <h2 className="mt-1 font-serif text-2xl font-semibold text-gray-900">
                          {item.name}
                        </h2>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-gray-400 transition hover:text-red-600"
                      >
                        Remove
                      </button>

                    </div>

                    {/* Price */}
                    <div className="mt-3">
                      <span className="text-xl font-semibold text-gray-900">
                        ₹{item.price}
                      </span>

                      {item.oldPrice && (
                        <span className="ml-2 text-sm text-gray-400 line-through">
                          ₹{item.oldPrice}
                        </span>
                      )}
                    </div>

                    {/* Quantity */}
                    <div className="mt-5 flex items-center justify-between">

                      <div className="flex items-center rounded-lg border border-gray-300">

                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="px-4 py-2 text-lg text-gray-600 transition hover:bg-gray-100"
                        >
                          −
                        </button>

                        <span className="min-w-10 text-center font-medium">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="px-4 py-2 text-lg text-gray-600 transition hover:bg-gray-100"
                        >
                          +
                        </button>

                      </div>

                      {/* Item total */}
                      <p className="text-lg font-semibold text-gray-900">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>

                    </div>

                  </div>
                </div>
              </div>
            ))}

            <Link
              to="/shop"
              className="inline-flex pt-3 text-sm font-medium text-[#075c32] hover:underline"
            >
              ← Continue Shopping
            </Link>

          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-[#075c32] p-7 text-white shadow-lg">

            <h2 className="font-serif text-3xl font-semibold">
              Order Summary
            </h2>

            <div className="my-7 h-px bg-white/20" />

            {/* Subtotal */}
            <div className="flex justify-between">
              <span className="text-white/80">
                Subtotal
              </span>

              <span className="font-medium">
                ₹{subtotal.toFixed(2)}
              </span>
            </div>

            {/* Shipping */}
            <div className="mt-4 flex justify-between">
              <span className="text-white/80">
                Shipping
              </span>

              <span className="font-medium">
                ₹{shipping.toFixed(2)}
              </span>
            </div>

            <div className="my-6 h-px bg-white/20" />

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-lg">
                Total
              </span>

              <span className="text-2xl font-bold">
                ₹{total.toFixed(2)}
              </span>
            </div>

           <Link
  to="/checkout"
  className="mt-7 block w-full rounded-lg bg-white py-3.5 text-center font-semibold text-[#075c32] transition hover:bg-gray-100"
>
  Proceed to Checkout
</Link>

            <p className="mt-4 text-center text-xs text-white/60">
              Secure checkout • Fast delivery • Healthy plants
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;