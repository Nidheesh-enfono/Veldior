import p1 from "@/assets/v-bloom.png";
import p2 from "@/assets/perfume-2.jpg";
import p3 from "@/assets/perfume-3.jpg";
import p4 from "@/assets/v-aura.png";

export interface ProductNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  family: string;
  notes: ProductNotes;
  description: string;
  price: number;
  size: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "veldior-aura",
    name: "Veldior Aura",
    tagline: "Aura of luxury",
    family: "Floral Amber",
    notes: {
      top: ["Black Currant", "Iris Pallida"],
      heart: ["Iris Pallida", "Heliotrope"],
      base: ["White Musk", "Patchouli"],
    },
    description:
      "A luxurious blend of black currant, violet leaf, iris pallida, and heliotrope. A soft, sweet fragrance that is perfect for everyday wear.",
    price: 1799,
    size: "60 ml",
    image: p4,
  },
  {
    id: "veldior-bloom",
    name: "Veldior Bloom",
    tagline: "Bloom of luxury",
    family: "Oriental Woody",
    notes: {
      top: ["Black Currant", "Iris Pallida"],
      heart: ["Iris Pallida", "Heliotrope"],
      base: ["White Musk", "Patchouli"],
    },
    description:
      "A luxurious blend of black currant, violet leaf, iris pallida, and heliotrope. A soft, sweet fragrance that is perfect for everyday wear.",
    price: 1799,
    size: "60 ml",
    image: p1,
  },
  // {
  //   id: "rose-velours",
  //   name: "Rose Velours",
  //   tagline: "Damask rose & benzoin",
  //   family: "Floral Amber",
  //   notes: {
  //     top: ["Bergamot", "Pink Pepper"],
  //     heart: ["Damask Rose", "Peony"],
  //     base: ["Benzoin", "Vanilla"],
  //   },
  //   description:
  //     "A velvet rose drenched in amber glow. Romantic without sweetness, with a creamy benzoin trail that lingers on skin.",
  //   price: 3900,
  //   size: "75 ml",
  //   image: p2,
  // },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

export const formatNotesLine = (notes: ProductNotes) =>
  [...notes.top, ...notes.heart, ...notes.base].join(" · ");
