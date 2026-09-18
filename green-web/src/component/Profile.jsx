import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    // Get user profile
    fetch(`${import.meta.env.VITE_API_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser(data.user);
        }
      });

    // Get user's orders
    fetch(`${import.meta.env.VITE_API_URL}/api/orders/my-orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("ORDERS:", data);

        if (data.success) {
          setOrders(data.orders);
        }
      })
      .catch((error) => {
        console.log("ORDER ERROR:", error);
      });

  }, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");

    navigate("/login");
  };


  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading profile...
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-100 p-6 font-serif">

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">

          <div className="flex justify-between items-center">

            <div>
              <h1 className="text-3xl font-bold text-green-900">
                My Profile
              </h1>

              <p className="text-gray-500 mt-2">
                Manage your account and view your orders.
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600"
            >
              Logout
            </button>

          </div>

        </div>


        {/* Personal Details */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">

          <h2 className="text-xl font-bold text-green-900 mb-5">
            Personal Details
          </h2>

          <div className="space-y-3">

            <p>
              <span className="font-semibold">
                Name:
              </span>{" "}
              {user.name}
            </p>

            <p>
              <span className="font-semibold">
                Email:
              </span>{" "}
              {user.email}
            </p>

          </div>

        </div>


        {/* Order History */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">

          <h2 className="text-xl font-bold text-green-900 mb-5">
            Order History
          </h2>


          {orders.length === 0 ? (

            <p className="text-gray-500">
              No orders yet.
            </p>

          ) : (

            <div className="space-y-5">

              {orders.map((order) => (

                <div
                  key={order._id}
                  className="border rounded-xl p-5"
                >

                  {/* Order header */}
                  <div className="flex justify-between mb-4">

                    <div>
                      <p className="font-semibold">
                        Order ID
                      </p>

                      <p className="text-gray-500 text-sm">
                        {order._id}
                      </p>
                    </div>

                    <div className="text-right">

                      <p className="font-semibold">
                        ₹{order.totalAmount}
                      </p>

                      <p className="text-green-600 text-sm">
                        {order.status}
                      </p>

                    </div>

                  </div>


                  {/* Products */}
                  <div className="space-y-3">

                    {order.items.map((item, index) => (

                      <div
                        key={`${order._id}-${item.product?._id || index}`}
                        className="flex items-center gap-4"
                      >

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-contain rounded-lg bg-gray-100"
                        />

                        <div>
                          <p className="font-semibold">
                            {item.name}
                          </p>

                          <p className="text-gray-500">
                            ₹{item.price} × {item.quantity}
                          </p>
                        </div>

                      </div>

                    ))}

                  </div>

                  <p className="text-gray-400 text-sm mt-4">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default Profile;