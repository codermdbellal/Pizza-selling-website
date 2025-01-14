// seed.js
require("dotenv").config();
const mongoose = require("mongoose");
const Item = require("./models/item.js"); // Import the Item model

// Get the MongoDB URI from the .env file
const uri = process.env.MONGO_URI;

// Data to seed
const seedData = [
  {
    name: "Pizza 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
    price: 20,
    image: "https://i.postimg.cc/3xWfqLXj/pizza1.jpg",
    rating: 4.8,
    size: "Small",
    weedData: "Indica",
  },

  {
    name: "Pizza 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
    price: 25,
    image: "https://i.postimg.cc/B63gJNKV/pizza2.jpg",
    rating: 4.8,
    size: "Small",
    weedData: "Indica",
  },

  {
    name: "Pizza 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
    price: 15,
    image: "https://i.postimg.cc/J06ccLdf/pizza3.jpg",
    rating: 4.8,
    size: "Small",
    weedData: "Indica",
  },

  {
    name: "Pizza 4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
    price: 40,
    image: "https://i.postimg.cc/BbQBK6N5/pizza4.jpg",
    rating: 4.8,
    size: "Small",
    weedData: "Indica",
  },

  {
    name: "Berger 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
    price: 30,
    image: "https://i.postimg.cc/cCsXBT1n/barger1.jpg",
    rating: 4.8,
    size: "Small",
    weedData: "Indica",
  },

  {
    name: "Berger 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
    price: 40,
    image: "https://i.postimg.cc/zfK7m4Vh/barger2.jpg",
    rating: 4.8,
    size: "Small",
    weedData: "Indica",
  },

  {
    name: "Berger 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
    price: 10,
    image: "https://i.postimg.cc/htHs5KPg/barger3.jpg",
    rating: 4.8,
    size: "Small",
    weedData: "Indica",
  },

  {
    name: "Berger 4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
    price: 30,
    image: "https://i.postimg.cc/rwdgjDTQ/barger4.jpg",
    rating: 4.8,
    size: "Small",
    weedData: "Indica",
  },

  {
    name: "Briyani 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
    price: 30,
    image: "https://i.postimg.cc/QC0S45Vn/briyani.jpg",
    rating: 4.8,
    size: "Small",
    weedData: "Indica",
  },

  {
    name: "Briyani 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
    price: 40,
    image: "https://i.postimg.cc/gcDM294q/briyani1.jpg",
    rating: 4.8,
    size: "Small",
    weedData: "Indica",
  },

  {
    name: "Briyani 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
    price: 10,
    image: "https://i.postimg.cc/VLkKS7Vy/briyani2.jpg",
    rating: 4.8,
    size: "Small",
    weedData: "Indica",
  },

  {
    name: "Briyani 4",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, aliquid.,Lorem ipsum dolor sit amet.",
    price: 30,
    image: "https://i.postimg.cc/QxY0cp2F/briyani3.jpg",
    rating: 4.8,
    size: "Small",
    weedData: "Indica",
  },
];


// Seed function
async function seedDatabase() {
  try {
    // Connect to the MongoDB Atlas database
    await mongoose.connect(uri);
    console.log(" Connected MongoDB product Data");

    // Clear the collection (optional)
    await Item.deleteMany({});
    console.log("Existing data cleared");

    // Insert seed data
    const result = await Item.insertMany(seedData);
    console.log(
      `${result.length} documents inserted into 'productData' database!`
    );

  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Disconnect from the database
    mongoose.disconnect();
    console.log("Database connection closed");
  }
}

// run SeedDatabse 
seedDatabase()
