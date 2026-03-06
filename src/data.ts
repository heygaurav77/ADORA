export interface Product {
  id: string;
  name: string;
  material: string;
  price: number;
  currency: string;
  images: string[];
  colors: string[];
  tag?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Area Lo Sneaker",
    material: "Full Grain Leather",
    price: 285,
    currency: "EUR",
    images: ["https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1000&auto=format&fit=crop"],
    colors: ["#FFFFFF", "#E5E5E5"],
  },
  {
    id: "2",
    name: "Marathon Dip-Dye Runner",
    material: "Leather + Polyester + Nylon",
    price: 445,
    currency: "EUR",
    images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop"],
    colors: ["#A8B5A2", "#E2D9C8", "#333333"],
    tag: "Handcrafted in Portugal",
  },
  {
    id: "3",
    name: "Rush Sneaker",
    material: "Leather + Polyester",
    price: 240,
    currency: "EUR",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"],
    colors: ["#FFFFFF", "#D1D1D1"],
  },
  {
    id: "4",
    name: "Dice Lo Sneaker",
    material: "Recycled Polyester",
    price: 230,
    currency: "EUR",
    images: ["https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1000&auto=format&fit=crop"],
    colors: ["#F5F5F5", "#2D5A27"],
  },
];
