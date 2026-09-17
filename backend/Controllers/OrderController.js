const Orders = require("../Models/Orders");
const Products = require("../Models/Products");

const createOrder = async (req, res) => {
  try {
    const { items, shippingAddress } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    // Get actual products from MongoDB
    const productIds = items.map((item) => item._id);

    const products = await Products.find({
      _id: { $in: productIds },
    });

    // Create order items
    const orderItems = items.map((item) => {
      const product = products.find(
        (p) => p._id.toString() === item._id.toString()
      );

      if (!product) {
        throw new Error(`Product not found: ${item.id}`);
      }

      return {
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        image: product.image,
      };
    });

    // Calculate total on backend
    const subtotal = orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const shipping = subtotal > 0 ? 5 : 0;

    const totalAmount = subtotal + shipping;

    // Create order
    const order = new Orders({
      user: req.user._id,
      items: orderItems,
      totalAmount,
      shippingAddress,
    });

    await order.save();

    console.log("ORDER CREATED:", order);

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });

  } catch (error) {
    console.error("CREATE ORDER ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error.message,
    });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const orders = await Orders.find({
      user: req.user._id,
    })
      .populate("items.product")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {
    console.error("GET ORDERS ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
};