import Chair1 from "../images/chair1.png";
import Table1 from "../images/table1.png";
import Table2 from "../images/table2.png";
import Sofa1 from "../images/sofa1.png";
import Bed1 from "../images/bed1.png";
import SideDrawer2 from "../images/sidedrawer2.png";
import SideDrawer1 from "../images/sidedrawer1.png";
const API = [
  {
    id: 1,
    title: "Accent Leisure Chairs",
    image: Chair1,
    images: [
      {
        original: Chair1,
        thumbnail: Chair1,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },

      {
        original: Bed1,
        thumbnail: Bed1,
      },
      {
        original: Table1,
        thumbnail: Table1,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
    ],
    price: "128.40",
    oldPrice: "150.00",
    category: "Chairs",
    availability: "In stock",
    new: "",
    sale: "true",
    rating: 4.5,
    ratingBar: {
      five: 7,
      four: 2,
      three: 3,
      two: 0,
      one: 1,
    },
    reviews: 25,
    dimensions: {
      width: "24 inches",
      height: "32 inches",
      depth: "28 inches",
    },
    features: ["Comfortable seating", "Sturdy construction"],
    colorOptions: [
      { name: "Black", hexCode: "#000000" },
      { name: "Gray", hexCode: "#b6b8ba" },
      { name: "White", hexCode: "#ffffff" },
    ],
    material: "Fabric",
    weight: "5kg",
    description:
      "Furniture best dolor sit amet, consectetur adipiscing Ornare vitae cursus are some pharetra purus. Ut enim sed id amet bibendum amet, vestibulum most variable Sed morbi site amet bibendum amet, vestibulum. Furniture best dolor sit amet, consectetur adipiscing Ornare vitae cursus are some pharetra purus. Ut enim sed id amet bibendum amet, vestibulum most variable Sed morbi site amet bibendum amet, vestibulum.",
  },
  {
    id: 2,
    title: "Minimalism Wooden Table",
    image: Table1,
    images: [
      {
        original: Table1,
        thumbnail: Table1,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
      {
        original: Bed1,
        thumbnail: Bed1,
      },

      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
    ],
    price: "30.00",
    oldPrice: "",
    category: "Table",
    availability: "In stock",
    new: "true",
    sale: "",
    rating: 4.3,
    ratingBar: {
      five: 7,
      four: 2,
      three: 3,
      two: 0,
      one: 1,
    },
    reviews: 12,
    dimensions: {
      width: "45 cm",
      depth: "51 cm",
      height: "77 cm",
    },
    features: [
      "Simple and timeless design",
      "White plastic seat with metal legs",
      "Stackable for easy storage",
      "Suitable for indoor and outdoor use",
    ],
    colorOptions: [{ name: "White", hexCode: "#ffffff" }],
    material: "Plastic, Metal",
    weight: "5kg",
    description:
      "The Teodores Chair has a simple and timeless design that fits well in various dining settings. It features a white plastic seat and metal legs, providing durability and easy maintenance. The chair is lightweight and stackable, making it convenient for storage. Ideal for both indoor and outdoor use.",
  },
  {
    id: 3,
    title: "Modern Coffee Table",
    image: Table2,
    images: [
      {
        original: Table2,
        thumbnail: Table2,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
      {
        original: Bed1,
        thumbnail: Bed1,
      },

      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
    ],
    price: "199.99",
    oldPrice: "249.99",
    category: "Table",
    availability: "Out of stock",
    new: "",
    sale: "",
    rating: 4.8,
    ratingBar: {
      five: 7,
      four: 2,
      three: 3,
      two: 0,
      one: 1,
    },
    reviews: 38,
    dimensions: {
      width: "36 inches",
      height: "18 inches",
      depth: "24 inches",
    },
    features: [
      "Sleek and modern design",
      "Sturdy metal legs",
      "Spacious tabletop",
    ],
    colorOptions: [
      { name: "Black", hexCode: "#000000" },
      { name: "Gray", hexCode: "#808080" },
      { name: "White", hexCode: "#ffffff" },
    ],
    material: "Wood, Metal",
    weight: "10kg",
    description:
      "Enhance your living room with this modern coffee table. Its sleek and contemporary design adds a touch of elegance to any space. The sturdy metal legs provide stability, while the spacious tabletop offers plenty of room for your drinks, books, and decorative items. Made with high-quality wood and metal materials, this coffee table is built to last. Choose from white, black, or gray color options to match your existing decor.",
  },
  {
    id: 4,
    title: "Modern Sectional Sofa",
    image: Sofa1,
    images: [
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
      {
        original: Bed1,
        thumbnail: Bed1,
      },
      {
        original: Table1,
        thumbnail: Table1,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
    ],
    price: "999.99",
    oldPrice: "",
    category: "Sofa",
    availability: "In stock",
    new: "true",
    sale: "",
    rating: 4.9,
    ratingBar: {
      five: 7,
      four: 2,
      three: 3,
      two: 0,
      one: 1,
    },
    reviews: 57,
    dimensions: {
      width: "45 cm",
      depth: "51 cm",
      height: "77 cm",
    },
    features: [
      "Contemporary design",
      "Modular sections for versatile arrangement",
      "Plush cushions for ultimate comfort",
    ],
    colorOptions: [
      {
        name: "Gray",
        hexCode: "#cc7b4a",
      },
      {
        name: "Green",
        hexCode: "#44833b",
      },
      {
        name: "Navy Blue",
        hexCode: "#337fdd",
      },
    ],
    material: "Fabric, Wood",
    weight: "15kg",
    description:
      "Experience luxury and style with this modern sectional sofa. Its sleek and contemporary design adds a chic touch to your living room. The modular sections allow you to customize the arrangement according to your space and preference. Sink into the plush cushions and enjoy ultimate comfort. Available in gray, beige, or navy blue, this sectional sofa effortlessly blends with your existing decor.",
  },
  {
    id: 5,
    title: "Platform Bed Frame",
    image: Bed1,
    images: [
      {
        original: Bed1,
        thumbnail: Bed1,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },

      {
        original: Table1,
        thumbnail: Table1,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
    ],
    price: "128.40",
    oldPrice: "150.00",
    category: "Bed",
    availability: "In stock",
    new: "",
    sale: "true",
    rating: 4.5,
    ratingBar: {
      five: 7,
      four: 2,
      three: 3,
      two: 0,
      one: 1,
    },
    reviews: 25,
    dimensions: {
      width: "24 inches",
      height: "32 inches",
      depth: "28 inches",
    },
    features: ["Comfortable seating", "Sturdy construction"],
    colorOptions: [
      {
        name: "Natural Wood",
        hexCode: "#deb887",
      },
      {
        name: "Dark Brown",
        hexCode: "#8B4513",
      },
      {
        name: "Black",
        hexCode: "#000000",
      },
    ],
    material: "Fabric",
    weight: "5kg",
    description:
      "Create a peaceful retreat in your bedroom with this platform bed frame. Its minimalist and sturdy design adds a touch of modern elegance. The durable wooden slats provide excellent mattress support and eliminate the need for a box spring. With easy assembly, you can enjoy a comfortable and stylish bed in no time. Choose from natural wood, dark brown, or black color options to match your bedroom decor.",
  },
  {
    id: 6,
    title: "Contemporary Bookshelf",
    image: SideDrawer2,
    images: [
      {
        original: SideDrawer2,
        thumbnail: SideDrawer2,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
      {
        original: Bed1,
        thumbnail: Bed1,
      },
      {
        original: Table1,
        thumbnail: Table1,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
    ],
    price: "30.00",
    oldPrice: "",
    category: "Side Drawer",
    availability: "Out of stock",
    new: "true",
    sale: "",
    rating: 4.3,
    ratingBar: {
      five: 7,
      four: 2,
      three: 3,
      two: 0,
      one: 1,
    },
    reviews: 12,
    dimensions: {
      width: "45 cm",
      depth: "51 cm",
      height: "77 cm",
    },
    features: [
      "Simple and timeless design",
      "White plastic seat with metal legs",
      "Stackable for easy storage",
      "Suitable for indoor and outdoor use",
    ],
    colorOptions: [{ name: "White", hexCode: "#ffffff" }],
    material: "Plastic, metal",
    weight: "5kg",
    description:
      "The Teodores Chair has a simple and timeless design that fits well in various dining settings. It features a white plastic seat and metal legs, providing durability and easy maintenance. The chair is lightweight and stackable, making it convenient for storage. Ideal for both indoor and outdoor use.",
  },
  {
    id: 7,
    title: "Accent Wooden Side Drawer",
    image: SideDrawer1,
    images: [
      {
        original: SideDrawer1,
        thumbnail: SideDrawer1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
      {
        original: Bed1,
        thumbnail: Bed1,
      },
      {
        original: Table1,
        thumbnail: Table1,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
    ],
    price: "128.40",
    oldPrice: "150.00",
    category: "Side Drawer",
    availability: "In stock",
    new: "",
    sale: "true",
    rating: 4.5,
    ratingBar: {
      five: 7,
      four: 2,
      three: 3,
      two: 0,
      one: 1,
    },
    reviews: 25,
    dimensions: {
      width: "24 inches",
      height: "32 inches",
      depth: "28 inches",
    },
    features: ["Comfortable seating", "Sturdy construction"],
    colorOptions: [
      { name: "Black", hexCode: "#000000" },
      { name: "Gray", hexCode: "##b6b8ba" },
      { name: "White", hexCode: "#ffffff" },
    ],
    material: "Fabric",
    weight: "5kg",
    description:
      "Furniture best dolor sit amet, consectetur adipiscing Ornare vitae cursus are some pharetra purus. Ut enim sed id amet bibendum amet, vestibulum most variable Sed morbi site amet bibendum amet, vestibulum. Furniture best dolor sit amet, consectetur adipiscing Ornare vitae cursus are some pharetra purus. Ut enim sed id amet bibendum amet, vestibulum most variable Sed morbi site amet bibendum amet, vestibulum.",
  },
  {
    id: 8,
    title: "Minimalism Wooden Table",
    image: Table1,
    images: [
      {
        original: Table1,
        thumbnail: Table1,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
      {
        original: Bed1,
        thumbnail: Bed1,
      },

      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
    ],
    price: "30.00",
    oldPrice: "",
    category: "Table",
    availability: "In stock",
    new: "true",
    sale: "",
    rating: 4.3,
    ratingBar: {
      five: 7,
      four: 2,
      three: 3,
      two: 0,
      one: 1,
    },
    reviews: 12,
    dimensions: {
      width: "45 cm",
      depth: "51 cm",
      height: "77 cm",
    },
    features: [
      "Simple and timeless design",
      "White plastic seat with metal legs",
      "Stackable for easy storage",
      "Suitable for indoor and outdoor use",
    ],
    colorOptions: [{ name: "White", hexCode: "#ffffff" }],
    material: "Plastic, metal",
    weight: "5kg",
    description:
      "The Teodores Chair has a simple and timeless design that fits well in various dining settings. It features a white plastic seat and metal legs, providing durability and easy maintenance. The chair is lightweight and stackable, making it convenient for storage. Ideal for both indoor and outdoor use.",
  },
  {
    id: 9,
    title: "Accent Leisure Chairs",
    image: Chair1,
    images: [
      {
        original: Chair1,
        thumbnail: Chair1,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Bed1,
        thumbnail: Bed1,
      },
      {
        original: Table1,
        thumbnail: Table1,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
    ],
    price: "1108.40",
    oldPrice: "1500.00",
    category: "Chairs",
    availability: "In stock",
    new: "",
    sale: "true",
    rating: 4.5,
    ratingBar: {
      five: 7,
      four: 2,
      three: 3,
      two: 0,
      one: 1,
    },
    reviews: 25,
    dimensions: {
      width: "24 inches",
      height: "32 inches",
      depth: "28 inches",
    },
    features: ["Comfortable seating", "Sturdy construction"],
    colorOptions: [
      { name: "Black", hexCode: "#000000" },
      { name: "Gray", hexCode: "##b6b8ba" },
      { name: "White", hexCode: "#ffffff" },
    ],
    material: "Fabric",
    weight: "5kg",
    description:
      "Furniture best dolor sit amet, consectetur adipiscing Ornare vitae cursus are some pharetra purus. Ut enim sed id amet bibendum amet, vestibulum most variable Sed morbi site amet bibendum amet, vestibulum. Furniture best dolor sit amet, consectetur adipiscing Ornare vitae cursus are some pharetra purus. Ut enim sed id amet bibendum amet, vestibulum most variable Sed morbi site amet bibendum amet, vestibulum.",
  },
  {
    id: 10,
    title: "Minimalism Wooden Table",
    image: Table1,
    images: [
      {
        original: Table1,
        thumbnail: Table1,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
      {
        original: Bed1,
        thumbnail: Bed1,
      },
      {
        original: Sofa1,
        thumbnail: Sofa1,
      },
      {
        original: Chair1,
        thumbnail: Chair1,
      },
    ],
    price: "30.00",
    oldPrice: "",
    category: "Table",
    availability: "In stock",
    new: "true",
    sale: "",
    rating: 4.3,
    ratingBar: {
      five: 7,
      four: 2,
      three: 3,
      two: 0,
      one: 1,
    },
    reviews: 12,
    dimensions: {
      width: "45 cm",
      depth: "51 cm",
      height: "77 cm",
    },
    features: [
      "Simple and timeless design",
      "White plastic seat with metal legs",
      "Stackable for easy storage",
      "Suitable for indoor and outdoor use",
    ],
    colorOptions: [{ name: "White", hexCode: "#ffffff" }],
    material: "Plastic, metal",
    weight: "5kg",
    description:
      "The Teodores Chair has a simple and timeless design that fits well in various dining settings. It features a white plastic seat and metal legs, providing durability and easy maintenance. The chair is lightweight and stackable, making it convenient for storage. Ideal for both indoor and outdoor use.",
  },
];

export default API;
