import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export function Merchandise({ onProductClick }) {
  const products = [
    {
      name: "Team T-Shirt",
      price: "$25",
      image:
        "https://images.unsplash.com/photo-1503342394128-c104d54dba01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0c2hpcnQlMjBtZXJjaGFuZGlzZSUyMGFwcGFyZWx8ZW58MXx8fHwxNzY3Njk2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Comfortable cotton tee with our team logo",
      badge: "Popular",
      badgeColor: "from-pink-400 to-orange-400",
      rating: 4.8,
      reviews: 124,
      features: ["100% Cotton", "Unisex", "Durable Print"],
      sizes: ["S", "M", "L", "XL"],
      colors: [{ name: "Navy", hex: "#091F5B" }, { name: "Blue", hex: "#6F96D1" }]
    },
    {
      name: "Team Hoodie",
      price: "$45",
      image:
        "https://images.unsplash.com/photo-1655183003950-3b803a84202d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29kaWUlMjBzd2VhdHNoaXJ0JTIwY2xvdGhpbmd8ZW58MXx8fHwxNzY3Njk2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Cozy hoodie perfect for chilly volunteer days",
      badge: "New",
      badgeColor: "from-[#091F5B] to-[#6F96D1]",
      rating: 4.9,
      reviews: 89,
      features: ["Fleece Lined", "Kangaroo Pocket", "Warm"],
      sizes: ["M", "L", "XL"],
      colors: [{ name: "Navy", hex: "#091F5B" }]
    },
    {
      name: "Eco Tote Bag",
      price: "$15",
      image:
        "https://images.unsplash.com/photo-1759165440307-1199382bc149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3RlJTIwYmFnJTIwbWVyY2hhbmRpc2V8ZW58MXx8fHwxNzY3NjM4NDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Reusable tote made from sustainable materials",
      badge: "Eco",
      badgeColor: "from-green-400 to-emerald-500",
      rating: 4.7,
      reviews: 215,
      features: ["Organic Canvas", "Reinforced Hands", "Large Capacity"],
      sizes: ["One Size"],
      colors: [{ name: "Natural", hex: "#F5F5DC" }]
    },
    {
      name: "Water Bottle",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1683533893978-70a5a6f613e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGJvdHRsZSUyMHByb2R1Y3R8ZW58MXx8fHwxNzY3Njg0MzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Insulated water bottle to stay hydrated",
      badge: "Hot",
      badgeColor: "from-red-400 to-pink-500",
      rating: 4.6,
      reviews: 56,
      features: ["Stainless Steel", "24h Cold", "12h Hot"],
      sizes: ["500ml"],
      colors: [{ name: "Silver", hex: "#C0C0C0" }]
    },
  ];

  return (
    <section id="merchandise" className="w-full py-20 relative font-['Inter']">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/70 backdrop-blur-2xl rounded-full text-sm mb-6 border border-white/60 shadow-xl">
            <ShoppingCart className="h-4 w-4 text-[#091F5B]" />
            <span className="font-semibold text-[#091F5B]">Support Our Cause</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#091F5B] to-[#6F96D1] bg-clip-text text-transparent">
            Our Merchandise 🛍️
          </h2>
          <p className="text-xl text-[#091F5B]/80 leading-relaxed">
            Show your support for our cause! All proceeds from merchandise sales
            go directly toward funding our volunteer projects and community
            initiatives. 💙
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-[#091F5B] group-hover:text-[#6F96D1] transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-bold text-lg text-[#091F5B]">{product.price}</span>
                </div>
                <p className="text-[#091F5B]/70 text-sm line-clamp-2">
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
