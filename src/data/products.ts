import p1 from "@/assets/perfume-1.jpg";
import p2 from "@/assets/perfume-2.jpg";
import p3 from "@/assets/perfume-3.jpg";
import p4 from "@/assets/perfume-4.jpg";
import p5 from "@/assets/perfume-5.jpg";
import p6 from "@/assets/perfume-6.jpg";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  notes: string;
  price: number;
  image: string;
  family: "Oriental" | "Floral" | "Woody" | "Fresh";
}

export const products: Product[] = [
  {
    id: "oud-and-roses",
    name: "Oud and Rose",
    tagline: "Oud and Rose",
    notes: "Oud · Rose",
    price: 1999,
    image: p1,
    family: "Oriental",
  },
  {
    id: "orvane",
    name: "Orvane",
    tagline: "Orvane",
    notes: "Orvane",
    price: 1299,
    image: p2,
    family: "Fresh",
  },
  {
    id: "lavender",
    name: "Lavender",
    tagline: "Lavender",
    notes: "Lavender",
    price: 799,
    image: p3,
    family: "Floral",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
