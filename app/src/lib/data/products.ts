import { Product } from "@/lib/types";

export const categories = ["electronics", "clothing", "books", "home"];

export const products: Product[] = [
  {
    id: "1",
    name: "Laptop",
    description: "High-performance laptop with the latest processor.",
    price: 1200,
    image: "https://picsum.photos/seed/laptop/400/300",
    category: "electronics",
  },
  {
    id: "2",
    name: "T-Shirt",
    description: "Comfortable cotton t-shirt for everyday wear.",
    price: 25,
    image: "https://picsum.photos/seed/tshirt/400/300",
    category: "clothing",
  },
  {
    id: "3",
    name: "The Great Gatsby",
    description: "Classic novel by F. Scott Fitzgerald.",
    price: 15,
    image: "https://picsum.photos/seed/gatsby/400/300",
    category: "books",
  },
  {
    id: "4",
    name: "Coffee Maker",
    description: "Automatic coffee maker with timer function.",
    price: 75,
    image: "https://picsum.photos/seed/coffee/400/300",
    category: "home",
  },
  {
    id: "5",
    name: "Smartphone",
    description: "Latest smartphone with advanced camera features.",
    price: 900,
    image: "https://picsum.photos/seed/smartphone/400/300",
    category: "electronics",
  },
  {
    id: "6",
    name: "Jeans",
    description: "Stylish and durable jeans for men.",
    price: 50,
    image: "https://picsum.photos/seed/jeans/400/300",
    category: "clothing",
  },
  {
    id: "7",
    name: "To Kill a Mockingbird",
    description: "Pulitzer Prize-winning novel by Harper Lee.",
    price: 20,
    image: "https://picsum.photos/seed/mockingbird/400/300",
    category: "books",
  },
  {
    id: "8",
    name: "Blender",
    description: "Powerful blender for smoothies and soups.",
    price: 100,
    image: "https://picsum.photos/seed/blender/400/300",
    category: "home",
  },
  {
    id: "9",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 200,
    image: "https://picsum.photos/seed/headphones/400/300",
    category: "electronics",
  },
  {
    id: "10",
    name: "Dress Shirt",
    description: "Elegant dress shirt for formal occasions.",
    price: 40,
    image: "https://picsum.photos/seed/dressshirt/400/300",
    category: "clothing",
  },
];