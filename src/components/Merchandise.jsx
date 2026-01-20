import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export function Merchandise({ onProductClick }) {
  const products = [
    {
      name: "Hamkke Bareng Official T-Shirt",
      price: "Rp. 90.000",
      image: "/products/shirt/Group 15.png",
      images: [
        "/products/shirt/Group 15.png",
        "/images/tshirtdetailed.png",
        "/images/tshirtSizeChart.png"
      ],
      description: "Premium group edition shirt.",
      badge: "Shirt",
      badgeColor: "from-[#091F5B] to-[#6F96D1]",
      rating: 4.9,
      reviews: 31,
      features: ["Soft fabric", "Unisex fit", "Premium print"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: [{ name: "White", hex: "#FFFFFF" }]
    },
    {
      name: "Totebag - Hamkke Bareng",
      price: "Rp. 65.000",
      image: "/products/Totebag/Group 2.png",
      description: "Everyday totebag with official design.",
      badge: "Totebag",
      badgeColor: "from-emerald-400 to-green-500",
      rating: 4.7,
      reviews: 12,
      features: ["Durable canvas", "Roomy interior", "Sturdy straps"],
      sizes: ["One Size"],
      colors: [{ name: "Natural", hex: "#F5F5DC" }]
    },
    {
      name: "Mug - Hamkke Bareng",
      price: "Rp. 30.000",
      image: "/products/MUG/HB1 MUG.png",
      description: "Ceramic mug with HB1 artwork.",
      badge: "Mug",
      badgeColor: "from-amber-400 to-orange-500",
      rating: 4.8,
      reviews: 9,
      features: ["Ceramic", "Glossy finish", "Easy grip"],
      sizes: ["One Size"],
      colors: [{ name: "White", hex: "#FFFFFF" }]
    },
    {
      name: "Keychain - hamkke bareng 1",
      price: "Rp. 18.000",
      image: "/products/Keychain/HB1 KEYCHAIN.png",
      description: "Compact keychain with HB1 design.",
      badge: "Keychain",
      badgeColor: "from-sky-400 to-blue-500",
      rating: 4.6,
      reviews: 14,
      features: ["Durable acrylic", "Metal ring", "Lightweight"],
      sizes: ["One Size"],
      colors: []
    },
    {
      name: "Keychain - hamkke bareng 2",
      price: "Rp. 18.000",
      image: "/products/Keychain/HB2 KEYCHAIN.png",
      description: "Compact keychain with HB2 design.",
      badge: "Keychain",
      badgeColor: "from-sky-400 to-blue-500",
      rating: 4.6,
      reviews: 11,
      features: ["Durable acrylic", "Metal ring", "Lightweight"],
      sizes: ["One Size"],
      colors: []
    },
    {
      name: "Keychain - Pinko",
      price: "Rp. 18.000",
      image: "/products/Keychain/PINKO KEYCHAIN.png",
      description: "Compact keychain with Pinko design.",
      badge: "Keychain",
      badgeColor: "from-sky-400 to-blue-500",
      rating: 4.7,
      reviews: 10,
      features: ["Durable acrylic", "Metal ring", "Lightweight"],
      sizes: ["One Size"],
      colors: []
    },
    {
      name: "Sticker Pack - Basic Korean",
      price: "Rp. 10.000",
      image: "/products/Sticker/BasicKoreanStickerPack.png",
      description: "Sticker pack set with basic Korean theme.",
      badge: "Sticker",
      badgeColor: "from-pink-400 to-rose-500",
      rating: 4.8,
      reviews: 27,
      features: ["Vinyl finish", "Water resistant", "Easy peel"],
      sizes: ["Pack"],
      colors: []
    },
    {
      name: "Sticker Pack - Digital Business",
      price: "Rp. 10.000",
      image: "/products/Sticker/DigitalBusinessStickerPack.png",
      description: "Sticker pack set with digital business theme.",
      badge: "Sticker",
      badgeColor: "from-pink-400 to-rose-500",
      rating: 4.8,
      reviews: 19,
      features: ["Vinyl finish", "Water resistant", "Easy peel"],
      sizes: ["Pack"],
      colors: []
    },
    {
      name: "Sticker Pack - EPS Topic",
      price: "Rp. 10.000",
      image: "/products/Sticker/EPSTOPICStickerPack.png",
      description: "Sticker pack set with EPS topic theme.",
      badge: "Sticker",
      badgeColor: "from-pink-400 to-rose-500",
      rating: 4.7,
      reviews: 16,
      features: ["Vinyl finish", "Water resistant", "Easy peel"],
      sizes: ["Pack"],
      colors: []
    },
    {
      name: "Sticker Pack - Korean for Business",
      price: "Rp. 10.000",
      image: "/products/Sticker/KoreanForBusinessStickerPack.png",
      description: "Sticker pack set with Korean for business theme.",
      badge: "Sticker",
      badgeColor: "from-pink-400 to-rose-500",
      rating: 4.7,
      reviews: 13,
      features: ["Vinyl finish", "Water resistant", "Easy peel"],
      sizes: ["Pack"],
      colors: []
    },
    {
      name: "Sticker Pack - Korean for Tourism",
      price: "Rp. 10.000",
      image: "/products/Sticker/KoreanForTourismStickerPack.png",
      description: "Sticker pack set with Korean for tourism theme.",
      badge: "Sticker",
      badgeColor: "from-pink-400 to-rose-500",
      rating: 4.8,
      reviews: 15,
      features: ["Vinyl finish", "Water resistant", "Easy peel"],
      sizes: ["Pack"],
      colors: []
    },
    {
      name: "Sticker Pack - Snowies",
      price: "Rp. 10.000",
      image: "/products/Sticker/SnowiesStickerPack.png",
      description: "Sticker pack set with Snowies theme.",
      badge: "Sticker",
      badgeColor: "from-pink-400 to-rose-500",
      rating: 4.9,
      reviews: 21,
      features: ["Vinyl finish", "Water resistant", "Easy peel"],
      sizes: ["Pack"],
      colors: []
    },
    {
      name: "Hamkke Bareng Tote Bag Bundle",
      price: "Rp. 89.000",
      image: "/products/Bundling/Group 16.png",
      description: "Bundle set with exclusive items.",
      badge: "Bundle",
      badgeColor: "from-indigo-400 to-blue-500",
      rating: 4.9,
      reviews: 8,
      features: ["Exclusive set", "Limited release", "Great value"],
      sizes: ["Bundle"],
      colors: []
    },
    {
      name: "Hamkke Bareng T-Shirt Bundle",
      price: "Rp. 110.000",
      image: "/products/Bundling/Group 17.png",
      images: [
        "/products/Bundling/Group 17.png",
        "/images/tshirtdetailed.png",
        "/images/tshirtSizeChart.png"
      ],
      description: "Bundle set with exclusive items.",
      badge: "Bundle",
      badgeColor: "from-indigo-400 to-blue-500",
      rating: 4.8,
      reviews: 6,
      features: ["Exclusive set", "Limited release", "Great value"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: [{ name: "White", hex: "#FFFFFF" }]
    },
  ];

  return (
    <section id="merchandise" className="w-full py-20 relative font-['Inter']">
      
      <div className="container mx-auto px-4 relative z-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              onClick={() => onProductClick && onProductClick(product)}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-white/60 hover:border-white/80 rounded-[2rem] group bg-white/70 backdrop-blur-2xl cursor-pointer"
            >
              <div className="relative aspect-square bg-muted/50 overflow-hidden rounded-t-[2rem]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badge with glassmorphism */}
                <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${product.badgeColor} shadow-xl backdrop-blur-xl`}>
                  {product.badge}
                </div>
                {/* Overlay on hover with glass effect */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button 
                    size="sm" 
                    className="rounded-full shadow-xl gap-2 bg-gradient-to-r from-[#091F5B] to-[#6F96D1] border-0 text-white hover:opacity-90 transition-opacity"
                  >
                    View Details
                  </Button>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-[#091F5B] group-hover:text-[#6F96D1] transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-bold text-base sm:text-lg text-[#091F5B]">{product.price}</span>
                </div>
                <p className="text-[#091F5B]/70 text-xs sm:text-sm line-clamp-2">
                  {product.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
