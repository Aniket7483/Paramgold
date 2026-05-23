import npkImg from "@/assets/19.png";
import npkImg2 from "@/assets/40.png";
import npkImg3 from "@/assets/52.png";
import npkImg4 from "@/assets/12.png";
import bioImg from "@/assets/powerroot.jpg";
import bioImg2 from "@/assets/goldmax.jpg";
import bioImg3 from "@/assets/rhizo.jpg";
import bioImg4 from "@/assets/azato.jpg";
import bioImg5 from "@/assets/mycorrhizal.jpg";
import bioImg6 from "@/assets/bordo.jpg";
import bioImg7 from "@/assets/nemax.jpg";
import microImg from "@/assets/zinc.png";
import microImg2 from "@/assets/ferrous.jpg";
import microImg3 from "@/assets/calnitrate.jpg";
import microimg4 from "@/assets/supergold.jpg";
import pgrImg from "@/assets/product-pgr.jpg";

export type ProductCategory =
  | "water-soluble"
  | "specialty-water-soluble"
  | "micronutrient"
  | "pgr"
  | "non-chelated"
  | "bio-fertilizer";

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  image: string;
  description: string;
  benefits: string[];
  composition: { name: string; value: string }[];
  crops: string[];
  dosage: string;
  packaging: string[];
}

export const CATEGORIES: { id: ProductCategory; name: string; blurb: string }[] = [
  { id: "water-soluble", name: "Water Soluble Fertilizers", blurb: "100% soluble NPK grades for fertigation and foliar feeding." },
  { id: "specialty-water-soluble", name: "Specialty Water Soluble", blurb: "Crop-specific premium blends for maximum yield." },
  { id: "micronutrient", name: "Micronutrient Fertilizers", blurb: "Chelated micronutrients for healthy plant metabolism." },
  { id: "pgr", name: "PGR Products", blurb: "Plant growth regulators for flowering, fruiting and vigour." },
  { id: "non-chelated", name: "Non-Chelated Micronutrients", blurb: "Cost-effective straight micronutrient salts." },
  { id: "bio-fertilizer", name: "Bio Fertilizer Products", blurb: "Living microbial solutions for sustainable soil health." },
];

export const PRODUCTS: Product[] = [
  {
    slug: "npk-19-19-19",
    name: "NPK 19:19:19",
    category: "water-soluble",
    tagline: "Balanced nutrition for every growth stage",
    image: npkImg,
    description:
      "A fully water-soluble, balanced N-P-K fertilizer suitable for all crops and all stages of growth. Free flowing, chloride-free and 100% soluble.",
    benefits: [
      "Promotes uniform vegetative and reproductive growth",
      "Ideal starter dose for transplanted crops",
      "Free of chloride, sodium and heavy metals",
      "Compatible with most pesticides and PGRs",
    ],
    composition: [
      { name: "Nitrogen (N)", value: "19%" },
      { name: "Phosphorus (P₂O₅)", value: "19%" },
      { name: "Potassium (K₂O)", value: "19%" },
    ],
    crops: ["Tomato", "Chilli", "Grapes", "Pomegranate", "Banana", "Cotton", "Wheat"],
    dosage: "2.5 – 5 g/L for foliar; 3 – 5 kg/acre via drip every 7–10 days.",
    packaging: ["1 kg", "5 kg", "25 kg"],
  },
  {
    slug: "npk-13-40-13",
    name: "NPK 13:40:13",
    category: "water-soluble",
    tagline: "Root development & flowering booster",
    image: npkImg2,
    description:
      "High-phosphorus water-soluble fertilizer specifically formulated to enhance root proliferation, early plant establishment and flower initiation.",
    benefits: [
      "Stimulates strong root system",
      "Improves flower count and uniformity",
      "Quick uptake through drip or foliar",
    ],
    composition: [
      { name: "Nitrogen (N)", value: "13%" },
      { name: "Phosphorus (P₂O₅)", value: "40%" },
      { name: "Potassium (K₂O)", value: "13%" },
    ],
    crops: ["Tomato", "Onion", "Grapes", "Capsicum", "Rose"],
    dosage: "3 – 4 g/L foliar at 15–25 DAT; 3 kg/acre fertigation.",
    packaging: ["1 kg", "5 kg", "25 kg"],
  },
  {
    slug: "npk-00-52-34",
    name: "NPK 00:52:34",
    category: "water-soluble",
    tagline: "Flowering & fruit setting specialist",
    image: npkImg3,
    description:
      "Nitrogen-free, high-phosphorus and high-potassium grade used at flowering and fruit-set stages for premium quality produce.",
    benefits: [
      "Promotes flower retention and fruit set",
      "Improves brix and shelf life",
      "Enhances drought and disease resistance",
    ],
    composition: [
      { name: "Phosphorus (P₂O₅)", value: "52%" },
      { name: "Potassium (K₂O)", value: "34%" },
    ],
    crops: ["Grapes", "Mango", "Pomegranate", "Tomato", "Chilli"],
    dosage: "4 – 5 g/L as foliar spray at flowering stage.",
    packaging: ["1 kg", "5 kg", "25 kg"],
  },
  {
    slug: "npk-12-61-00",
    name: "NPK 12:61:00",
    category: "water-soluble",
    tagline: "Mono Ammonium Phosphate — pure energy",
    image: npkImg4,
    description:
      "Highly concentrated phosphorus source with ammoniacal nitrogen, ideal for early plant growth and root branching.",
    benefits: [
      "Highest phosphorus content available",
      "Improves nutrient solubility in soil",
      "Accelerates seedling vigour",
    ],
    composition: [
      { name: "Nitrogen (N)", value: "12%" },
      { name: "Phosphorus (P₂O₅)", value: "61%" },
    ],
    crops: ["All crops, especially in nursery and transplanting stage"],
    dosage: "2.5 – 4 g/L foliar; 2–3 kg/acre via drip.",
    packaging: ["1 kg", "5 kg", "25 kg"],
  },
  {
    slug: "zinc-sulphate",
    name: "Zinc Sulphate",
    category: "non-chelated",
    tagline: "Corrects zinc deficiency, boosts enzymes",
    image: microImg,
    description:
      "Heptahydrate / monohydrate zinc sulphate to correct zinc deficiency — critical for chlorophyll formation and enzyme function.",
    benefits: [
      "Improves grain & fruit size",
      "Activates several plant enzymes",
      "Corrects little-leaf and rosetting",
    ],
    composition: [{ name: "Zinc (Zn)", value: "21% / 33%" }],
    crops: ["Paddy", "Wheat", "Maize", "Citrus", "Mango"],
    dosage: "10 kg/acre soil application or 2 g/L foliar.",
    packaging: ["1 kg", "5 kg", "25 kg", "50 kg"],
  },
  {
    slug: "ferrous-sulphate",
    name: "Ferrous Sulphate",
    category: "non-chelated",
    tagline: "Corrects iron chlorosis fast",
    image: microImg2,
    description:
      "Heptahydrate ferrous sulphate to deliver readily available iron — eliminates interveinal chlorosis of young leaves.",
    benefits: ["Restores green colour", "Improves photosynthesis", "Cost effective"],
    composition: [{ name: "Iron (Fe)", value: "19%" }],
    crops: ["Citrus", "Grapes", "Vegetables", "Ornamentals"],
    dosage: "3 – 5 g/L foliar spray; 5 kg/acre soil.",
    packaging: ["1 kg", "5 kg", "25 kg"],
  },
  {
    slug: "calcium-nitrate",
    name: "Calcium Nitrate",
    category: "specialty-water-soluble",
    tagline: "Strong cell walls, longer shelf life",
    image: microImg3,
    description:
      "Highly soluble source of calcium and nitrate nitrogen — improves cell wall strength and fruit firmness.",
    benefits: [
      "Prevents blossom-end rot",
      "Improves shelf life of fruits",
      "Strengthens plant tissue",
    ],
    composition: [
      { name: "Calcium (CaO)", value: "26.5%" },
      { name: "Nitrate Nitrogen (N)", value: "15.5%" },
    ],
    crops: ["Tomato", "Capsicum", "Apple", "Grapes", "Watermelon"],
    dosage: "3 – 5 kg/acre fertigation; 4 g/L foliar.",
    packaging: ["1 kg", "5 kg", "25 kg"],
  },
  {
    slug: "power-root",
    name: "Power Root",
    category: "specialty-water-soluble",
    tagline: "Engineered root development complex",
    image: bioImg,
    description:
      "Specialty root stimulant combining humic acid, fulvic acid, seaweed extract and amino acids for explosive root growth.",
    benefits: [
      "Massive white root proliferation",
      "Better nutrient & water uptake",
      "Improved transplant recovery",
    ],
    composition: [
      { name: "Humic Acid", value: "12%" },
      { name: "Fulvic Acid", value: "3%" },
      { name: "Seaweed Extract", value: "10%" },
    ],
    crops: ["All crops"],
    dosage: "2 – 3 ml/L drench; 500 ml/acre via drip.",
    packaging: ["250 ml", "1 L", "5 L"],
  },
  {
    slug: "gold-max",
    name: "Gold Max",
    category: "specialty-water-soluble",
    tagline: "Premium yield enhancer",
    image: bioImg2,
    description:
      "A premium combination of macro, micro and biostimulants designed to maximize yield and quality across crops.",
    benefits: ["Boosts yield 15–25%", "Improves fruit weight and colour", "Reduces stress damage"],
    composition: [
      { name: "Amino Acids", value: "18%" },
      { name: "Micronutrients", value: "Trace" },
    ],
    crops: ["Vegetables", "Fruits", "Cash crops"],
    dosage: "2 ml/L foliar at 30, 60 and 90 DAS.",
    packaging: ["250 ml", "500 ml", "1 L"],
  },
  {
    slug: "rhizo",
    name: "Rhizo",
    category: "bio-fertilizer",
    tagline: "Rhizobium biofertilizer for legumes",
    image: bioImg3,
    description:
      "Liquid Rhizobium culture that fixes atmospheric nitrogen in legume crops through symbiotic root nodulation.",
    benefits: [
      "Fixes up to 50 kg N/ha atmospherically",
      "Improves nodulation & yield",
      "Eco-friendly, residue-free",
    ],
    composition: [{ name: "Rhizobium spp.", value: "≥ 2 × 10⁸ CFU/ml" }],
    crops: ["Soybean", "Groundnut", "Pulses", "Chickpea"],
    dosage: "500 ml/acre as seed treatment or soil drench.",
    packaging: ["500 ml", "1 L"],
  },
  {
    slug: "azato",
    name: "Azato",
    category: "bio-fertilizer",
    tagline: "Azotobacter nitrogen fixer for non-legumes",
    image: bioImg4,
    description:
      "Liquid Azotobacter biofertilizer for non-leguminous crops — supplements nitrogen and stimulates growth hormones.",
    benefits: ["Free-living nitrogen fixation", "Produces natural plant hormones", "Reduces urea dependency by 25%"],
    composition: [{ name: "Azotobacter chroococcum", value: "≥ 1 × 10⁹ CFU/ml" }],
    crops: ["Cereals", "Vegetables", "Cotton", "Sugarcane"],
    dosage: "1 L/acre via drip or soil application.",
    packaging: ["500 ml", "1 L"],
  },
  {
    slug: "mycorrhiza",
    name: "Mycorrhiza",
    category: "bio-fertilizer",
    tagline: "Mycorrhizal root symbiont",
    image: bioImg5,
    description:
      "Granular VAM mycorrhiza that extends the root system by up to 100x — dramatically improving phosphorus and water absorption.",
    benefits: ["Massive P uptake", "Improves drought tolerance", "Reduces fertilizer cost"],
    composition: [{ name: "VAM Spores", value: "≥ 100 IP/g" }],
    crops: ["All horticultural crops"],
    dosage: "4 kg/acre at planting.",
    packaging: ["1 kg", "4 kg", "10 kg"],
  },
  {
    slug: "super-gold",
    name: "Super Gold",
    category: "micronutrient",
    tagline: "Chelated multi-micronutrient mix",
    image: microimg4,
    description:
      "EDTA-chelated multi-micronutrient mixture providing balanced Zn, Fe, Mn, Cu, B and Mo for complete plant nutrition.",
    benefits: ["Corrects multiple deficiencies", "Higher bioavailability", "Stable over wide pH"],
    composition: [
      { name: "Zn (EDTA)", value: "5%" },
      { name: "Fe (EDTA)", value: "4%" },
      { name: "Mn (EDTA)", value: "1%" },
      { name: "Cu, B, Mo", value: "Trace" },
    ],
    crops: ["All crops"],
    dosage: "1 g/L foliar; 2 kg/acre soil.",
    packaging: ["250 g", "500 g", "1 kg"],
  },
  {
    slug: "bordo",
    name: "Bordo",
    category: "specialty-water-soluble",
    tagline: "Copper protectant solution",
    image: bioImg6,
    description:
      "Stabilized copper-based protectant for prophylactic spray against fungal and bacterial leaf diseases.",
    benefits: ["Broad-spectrum protection", "Improves leaf health", "Compatible with most sprays"],
    composition: [{ name: "Copper (Cu)", value: "20%" }],
    crops: ["Grapes", "Tomato", "Potato", "Citrus"],
    dosage: "2 – 3 g/L foliar at 10-day intervals.",
    packaging: ["500 g", "1 kg"],
  },
  {
    slug: "nema-x",
    name: "Nema-X",
    category: "bio-fertilizer",
    tagline: "Bio-nematicide for healthy roots",
    image: bioImg7,
    description:
      "Paecilomyces lilacinus based bio-nematicide that parasitizes nematode eggs and protects roots biologically.",
    benefits: ["Controls root-knot nematodes", "Restores root function", "Safe for soil microbiome"],
    composition: [{ name: "Paecilomyces lilacinus", value: "1 × 10⁸ CFU/g" }],
    crops: ["Tomato", "Pomegranate", "Banana", "Vegetables"],
    dosage: "4 kg/acre soil application.",
    packaging: ["1 kg", "4 kg"],
  },
  {
    slug: "param-bloom",
    name: "Param Bloom",
    category: "pgr",
    tagline: "Flowering & fruiting accelerator",
    image: pgrImg,
    description:
      "Synergistic PGR formulation that triggers profuse flowering, reduces flower drop and improves fruit set.",
    benefits: ["More flowers per plant", "Reduces premature drop", "Uniform ripening"],
    composition: [
      { name: "Gibberellic Acid (GA₃)", value: "0.001%" },
      { name: "Triacontanol", value: "0.05%" },
    ],
    crops: ["Mango", "Grapes", "Vegetables", "Pulses"],
    dosage: "1 ml/L foliar at flowering.",
    packaging: ["100 ml", "250 ml", "500 ml"],
  },
  {
    slug: "param-grow",
    name: "Param Grow",
    category: "pgr",
    tagline: "Vegetative growth promoter",
    image: pgrImg,
    description:
      "Cytokinin-based growth promoter that pushes vegetative growth and tillering in cereals and vegetables.",
    benefits: ["More branching/tillers", "Bigger leaf area", "Higher photosynthesis"],
    composition: [{ name: "Cytokinin + Auxin", value: "Trace" }],
    crops: ["Wheat", "Paddy", "Cotton", "Vegetables"],
    dosage: "1 ml/L foliar at vegetative stage.",
    packaging: ["100 ml", "250 ml"],
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const getByCategory = (cat: ProductCategory) => PRODUCTS.filter((p) => p.category === cat);