const mongoose = require("mongoose");
const Products = require("./Models/Products");
require("dotenv").config();

const products = [
  {
    name: "Philodendron",
    oldPrice: 300,
    price: 200,
    image: "/Philodendron.png",
    category: "Indoor Plants",
    description:
      "Philodendron is a beautiful indoor plant with lush green leaves. It is easy to care for and perfect for adding a natural touch to your home.",
    care: {
      light: "Bright indirect light",
      water: "Water when the top soil feels dry",
      temperature: "18°C - 30°C",
    },
    size: "Medium",
    difficulty: "Easy",
    stock: 20,
  },

  {
    name: "Peace Lily",
    oldPrice: 300,
    price: 250,
    image: "/PeaceLily.png",
    category: "Indoor Plants",
    description:
      "Peace Lily is an elegant indoor plant known for its beautiful green leaves and white flowers. It is a great choice for homes and offices.",
    care: {
      light: "Low to bright indirect light",
      water: "Keep the soil slightly moist",
      temperature: "18°C - 30°C",
    },
    size: "Medium",
    difficulty: "Easy",
    stock: 20,
  },

  {
    name: "Caladium",
    oldPrice: 350,
    price: 290,
    image: "/Caladium.png",
    category: "Indoor Plants",
    description:
      "Caladium is a colorful tropical plant with beautiful patterned leaves that can brighten up any indoor space.",
    care: {
      light: "Bright indirect light",
      water: "Keep soil moderately moist",
      temperature: "20°C - 30°C",
    },
    size: "Medium",
    difficulty: "Medium",
    stock: 15,
  },

  {
    name: "ZZ Plant",
    oldPrice: 399,
    price: 279,
    image: "/zz-plant.png",
    category: "Indoor Plants",
    description:
      "ZZ Plant is a hardy indoor plant with glossy green leaves. It requires very little maintenance and can tolerate low light.",
    care: {
      light: "Low to bright indirect light",
      water: "Water when soil is completely dry",
      temperature: "15°C - 30°C",
    },
    size: "Medium",
    difficulty: "Easy",
    stock: 25,
  },

  {
    name: "Ficus Lyrata",
    oldPrice: 299,
    price: 289,
    image: "/pficus-lyrata.png",
    category: "Indoor Plants",
    description:
      "Ficus Lyrata is a stylish indoor plant with large, attractive leaves. It adds a modern and natural character to interiors.",
    care: {
      light: "Bright indirect light",
      water: "Water when the top soil dries",
      temperature: "18°C - 30°C",
    },
    size: "Large",
    difficulty: "Medium",
    stock: 12,
  },

  {
    name: "Anthurium",
    oldPrice: 290,
    price: 270,
    image: "/anthurium.png",
    category: "Flowering Plants",
    description:
      "Anthurium is a beautiful flowering plant with glossy leaves and colorful flowers. It is perfect for adding elegance to indoor spaces.",
    care: {
      light: "Bright indirect light",
      water: "Keep soil slightly moist",
      temperature: "18°C - 28°C",
    },
    size: "Medium",
    difficulty: "Medium",
    stock: 18,
  },

  {
    name: "Pothos",
    oldPrice: 399,
    price: 299,
    image: "/decoration.png",
    category: "Indoor Plants",
    description:
      "Pothos is an easy-to-grow trailing plant with beautiful heart-shaped leaves. It is ideal for shelves, desks and hanging planters.",
    care: {
      light: "Low to bright indirect light",
      water: "Water when the soil starts to dry",
      temperature: "18°C - 30°C",
    },
    size: "Medium",
    difficulty: "Easy",
    stock: 30,
  },

  {
    name: "Rubber Plant",
    oldPrice: 399,
    price: 359,
    image: "/RubberPlant.png",
    category: "Indoor Plants",
    description:
      "Rubber Plant is a stylish indoor plant with large, glossy leaves and a naturally elegant appearance. It is a great choice for adding greenery and character to modern interiors.",
    care: {
      light: "Bright indirect light",
      water: "Water when the top soil dries",
      temperature: "18°C - 30°C",
    },
    size: "Large",
    difficulty: "Easy",
    stock: 20,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONN);

    console.log("MongoDB connected");

    await Products.deleteMany();

    await Products.insertMany(products);

    console.log("Products inserted successfully");

    await mongoose.connection.close();

    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

seedProducts();