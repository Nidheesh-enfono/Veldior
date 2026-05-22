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
    id: "ember-noir",
    name: "Ember Noir",
    tagline: "Smoked oud & burnt amber",
    notes: "Oud · Amber · Saffron · Leather",
    price: 240,
    image: p1,
    family: "Oriental",
  },
  {
    id: "rose-imperiale",
    name: "Rose Impériale",
    tagline: "Bulgarian rose, drenched in honey",
    notes: "Rose · Honey · Patchouli · Musk",
    price: 285,
    image: p2,
    family: "Floral",
  },
  {
    id: "obsidian",
    name: "Obsidian",
    tagline: "Tobacco leaf at midnight",
    notes: "Tobacco · Vanilla · Cedar · Vetiver",
    price: 320,
    image: p3,
    family: "Woody",
  },
  {
    id: "soleil-dore",
    name: "Soleil Doré",
    tagline: "Sunlit bergamot & white tea",
    notes: "Bergamot · White Tea · Iris · Cashmeran",
    price: 195,
    image: p4,
    family: "Fresh",
  },
  {
    id: "verde-eterno",
    name: "Verde Eterno",
    tagline: "Crushed fig leaves & green cardamom",
    notes: "Fig · Cardamom · Galbanum · Sandalwood",
    price: 220,
    image: p5,
    family: "Woody",
  },
  {
    id: "nuit-bleue",
    name: "Nuit Bleue",
    tagline: "Salted iris under a moonlit sea",
    notes: "Iris · Sea Salt · Ambergris · Musk",
    price: 265,
    image: p6,
    family: "Fresh",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
