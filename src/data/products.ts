import p1 from "@/assets/perfume-1.jpg";
import p2 from "@/assets/perfume-2.jpg";
import p3 from "@/assets/perfume-3.jpg";
import p4 from "@/assets/perfume-4.jpg";

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
    id: "velour-noctis",
    name: "Velour Noctis",
    tagline: "Violet, musk & ink",
    family: "Chypre Floral",
    notes: {
      top: ["Black Currant", "Violet Leaf"],
      heart: ["Iris Pallida", "Heliotrope"],
      base: ["White Musk", "Patchouli"],
    },
    description:
      "Powdered violet wrapped in soft musk. A quiet, intimate perfume that whispers rather than announces.",
    price: 4200,
    size: "75 ml",
    image: p4,
  },
  {
    id: "sable-oud",
    name: "Sable Oud",
    tagline: "Oud, saffron & amber",
    family: "Oriental Woody",
    notes: {
      top: ["Saffron", "Cardamom"],
      heart: ["Oud Assam", "Rose de Mai"],
      base: ["Amber Resin", "Sandalwood"],
    },
    description:
      "Smoky oud lifted by saffron and dried rose. Warm, resinous, and unapologetically opulent from first spray to dry down.",
    price: 4800,
    size: "75 ml",
    image: p1,
  },
  {
    id: "rose-velours",
    name: "Rose Velours",
    tagline: "Damask rose & benzoin",
    family: "Floral Amber",
    notes: {
      top: ["Bergamot", "Pink Pepper"],
      heart: ["Damask Rose", "Peony"],
      base: ["Benzoin", "Vanilla"],
    },
    description:
      "A velvet rose drenched in amber glow. Romantic without sweetness, with a creamy benzoin trail that lingers on skin.",
    price: 3900,
    size: "75 ml",
    image: p2,
  },
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
