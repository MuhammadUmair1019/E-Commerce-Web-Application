export const products = [
  {
    id: 1,
    image: "/images/products/image-1.png",
    title: "ZOTAC GAMING GeForce GTX 1660 6GB GDDR6 Graphics Card",
    description: [
      ["1408 Cores"],
      ["Boost: 1845 MHz"],
      ["6GB 192-bit GDDR6"],
      ["4K / HDR / VR Ready"],
    ],
    price: 9000,
    category: "Graphics Card",
    rating: 5,
    status: false,
  },
  {
    id: 2,
    image: "/images/products/image-2.png",
    title: "ZOTAC GAMING GeForce GTX 1650 AMP! Edition 4GB Graphics Card",
    description: [
      ["896 Cores"],
      ["Boost: 1725 MHz"],
      ["4GB 128-bit GDDR5"],
      ["4K Ready"],
    ],

    price: 8000,
    category: "Graphics Card",
    rating: 4,
    status: true,
  },
  {
    id: 3,
    image: "/images/products/image-3.png",
    title: "ZOTAC GAMING GeForce RTX 3070 AMP Holo Graphics Card",
    description: [
      ["5888 Cores"],
      ["Boost: 1785 MHz"],
      ["8GB GDDR6 / 14 Gbps / 256-bit"],
      ["Virtual Reality Ready 4K Ready"],
    ],
    price: 7000,
    category: "Graphics Card",
    rating: 3,
    status: false,
  },
  {
    id: 4,
    image: "/images/products/image-4.png",
    title: "SAPPHIRE PULSE Radeon RX 5600 XT 6GB GDDR6 Graphics Card",
    description: [
      ["6GB 192-Bit GDDR6"],
      ["Boost Clock 1750 MHz"],
      ["1 x HDMI 3 x DisplayPort 1.4"],
      ["2304 Stream Processors"],
    ],
    price: 6000,
    category: "Graphics Card",
    rating: 2,
    status: true,
  },
  {
    id: 5,
    image: "/images/products/image-5.png",
    title: "SAPPHIRE NITRO+ RX 5500 XT 8G  GDDR6 Graphics Card",
    description: [
      ["GPU: Boost Clock: Up to 1845 MHz"],
      ["Memory:   8GB/128 bit GDDR6. 14.4"],
      ["Stream Processors: 1408"],
      ["4K@60Hz"],
    ],
    price: 5000,
    category: "Graphics Card",
    rating: 1,
    status: true,
  },
  {
    id: 6,
    image: "/images/products/HDD-1.jpg",
    title: "ADATA HD650 2TB Anti-Shock USB 3.2 Gen1 External Hard Drive",
    description: [
      ["Designed to absorb the hardest knocks."],
      ["Surface protected"],
      ["Dazzling Blue LED indicator"],
      ["Dazzling Blue LED indicator"],
    ],
    price: 4000,
    category: "SSD",
    rating: 4,
    status: true,
  },
  {
    id: 7,
    image: "/images/products/RAM-1.jpg",
    title: "G.SKILL Ripjaws V 8GB (1 x 8GB 288-Pin DDR4 2400 MHz ",
    description: [
      ["DDR4 2400 (PC4-19200)"],
      ["Timing 15-15-15-35"],
      ["Cas Latency 15"],
      ["Voltage 1.2V"],
    ],
    price: 3000,
    category: "RAM",
    rating: 4,
    status: false,
  },
  {
    id: 9,
    image: "/images/products/RAM-2.png",
    title: "XPG SPECTRIX D60G RGB 8GB DDR4 RGB 3200MHz Desktop Memory ",
    description: [
      ["DDR4 3200MHz"],
      ["Timing 16-18-18"],
      ["Cas Latency 16"],
      ["Voltage 1.35V"],
    ],
    price: 1000,
    category: "RAM",
    rating: 4,
    status: true,
  },
  {
    id: 10,
    image: "/images/products/image-6.jpg",
    title: "Tronsmart Apollo Air TrueWireless™ Stereo Plus Hybrid ANC Earbuds",
    description: [
      ["6GB 192-Bit GDDR6"],
      ["Boost Clock 1750 MHz"],
      ["1 x HDMI 3 x DisplayPort 1.4"],
      ["2304 Stream Processors"],
    ],
    price: 6000,
    category: "Graphics Card",
    rating: 2,
  },
  {
    id: 11,
    image: "/images/products/image-7.jpg",
    title: "Razer Huntsman Mini 60% Gaming Keyboard with Razer™ ",
    description: [
      ["Razer™ Optical Switches"],
      ["60% Form Factor"],
      ["Doubleshot PBT Keycaps With Side-Printed Secondary"],
      ["Functions"],
    ],
    price: 25000,
    category: "Graphics Card",
    rating: 4,
  },
  {
    id: 12,
    image: "/images/products/image-8.jpg",
    title: "Antec TORQUE Aluminum ATX Mid Tower Computer Case - Black / White",
    description: [
      ["896 Cores"],
      ["Boost: 1725 MHz"],
      ["4GB 128-bit GDDR5"],
      ["4K Ready"],
    ],

    price: 8000,
    category: "Graphics Card",
    rating: 4,
  },
  {
    id: 13,
    image: "/images/products/image-9.jpg",
    title: "ZOTAC MAGNUS ONE ECM73070C i7 10th Gen with RTX 3070 ",
    description: [
      ["10th Gen Intel Core i7 processor"],
      ["ZOTAC GAMING GeForce RTX 3070 8GB GDDR6"],
      ["Up to 64GB DDR4-2933/2666 memory support"],
      ["1 x HDMI 2.1, 3 x DisplayPort 1.4a, 1 x HDMI 1.4 (integrated)"],
    ],
    price: 7000,
    category: "Graphics Card",
    rating: 3,
  },
];

// Find price range

const findPriceRange = () => {
  let min = products[0].price;
  let max = 0;

  products.forEach((p) => {
    if (p.price < min) min = p.price;
    if (p.price > max) max = p.price;
  });
  return { min, max };
};

export const priceRange = findPriceRange();

// get product id

export const getProductsId = (id) =>
  products.find((product) => product.id === Number(id));
