import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Star, Minus, Plus, Check, Truck, RefreshCw, Shield } from "lucide-react";

export function ProductDetails({ onBack, product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "M");
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || "Blue");
  const [isLiked, setIsLiked] = useState(false);

  // Fallback defaults if product props missing
  const {
    name = "Product",
    price = "$0",
    rating = 4.5,
    reviews = 0,
    description = "No description",
    features = [],
    sizes = [],
    colors = [],
    image
  } = product || {};

  const reviewsList = [
      {
        name: "Sarah M.",
        rating: 5,
        comment: "Amazing quality! The shirt is super comfortable and the print looks great even after multiple washes.",
        date: "2 weeks ago",
      },
      {
        name: "Mike R.",
        rating: 5,
        comment: "Love supporting the cause and the shirt is fantastic. Fits perfectly!",
        date: "1 month ago",
      },
    ];

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="w-full min-h-screen py-32 px-4 font-['Inter']">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 px-5 py-3 bg-white/70 backdrop-blur-2xl rounded-full border border-white/60 hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl text-[#091F5B] font-semibold"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </button>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <div className="relative group">
             <div className="absolute inset-4 bg-gradient-to-tr from-[#091F5B]/20 to-[#6F96D1]/20 rounded-[2.5rem] transform rotate-3 scale-95 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
             <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-white/50 backdrop-blur-sm border-2 border-white/50 shadow-2xl">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
             </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(rating) ? "fill-current" : "text-gray-300"}`} />
                  ))}
                </div>
                <span className="text-[#091F5B] font-medium">
                  {rating} ({reviews} reviews)
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#091F5B] mb-4 bg-clip-text">
                {name}
              </h1>
              <p className="text-3xl font-bold text-[#6F96D1]">{price}</p>
            </div>

            <p className="text-[#091F5B]/80 text-lg leading-relaxed">
              {description}
            </p>

            {/* Selectors */}
            <div className="space-y-6 p-6 bg-white/40 backdrop-blur-md rounded-3xl border border-white/40">
                {/* Colors */}
                {colors.length > 0 && (
                    <div>
                        <label className="block text-sm font-bold text-[#091F5B] mb-3">Color</label>
                        <div className="flex gap-3">
                        {colors.map((color) => (
                            <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            className={`w-10 h-10 rounded-full border-2 transition-all ${
                                selectedColor === color.name
                                ? "ring-2 ring-offset-2 ring-[#091F5B] scale-110 border-white"
                                : "border-transparent hover:scale-110"
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                            />
                        ))}
                        </div>
                    </div>
                )}
                
                {/* Sizes */}
                {sizes.length > 0 && (
                    <div>
                        <label className="block text-sm font-bold text-[#091F5B] mb-3">Size</label>
                        <div className="flex flex-wrap gap-3">
                        {sizes.map((size) => (
                            <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                                selectedSize === size
                                ? "bg-[#091F5B] text-white shadow-lg scale-105"
                                : "bg-white/50 text-[#091F5B] hover:bg-white/80 hover:scale-105"
                            }`}
                            >
                            {size}
                            </button>
                        ))}
                        </div>
                    </div>
                )}

                {/* Quantity */}
                <div>
                   <label className="block text-sm font-bold text-[#091F5B] mb-3">Quantity</label>
                   <div className="flex items-center gap-4 bg-white/50 rounded-xl w-fit p-1 border border-white/50">
                     <button
                       onClick={decrementQuantity}
                       className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white text-[#091F5B] transition-colors"
                     >
                       <Minus className="h-4 w-4" />
                     </button>
                     <span className="text-xl font-bold text-[#091F5B] w-8 text-center">{quantity}</span>
                     <button
                       onClick={incrementQuantity}
                       className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white text-[#091F5B] transition-colors"
                     >
                        <Plus className="h-4 w-4" />
                     </button>
                   </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
                <Button className="flex-1 h-14 bg-[#091F5B] hover:bg-[#091F5B]/90 text-white rounded-2xl text-lg font-bold shadow-xl shadow-[#091F5B]/20 hover:-translate-y-1 transition-all duration-300">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                </Button>
            </div>
            
            {/* Features */}
             <div className="grid grid-cols-2 gap-4 text-[#091F5B]/80 text-sm">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-[#6F96D1]" />
                  <span>Free shipping over $50</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#6F96D1]" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 text-[#6F96D1]" />
                  <span>30-day returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#6F96D1]" />
                  <span>Authentic merchandise</span>
                </div>
             </div>
          </div>
        </div>
        
        {/* Features & Reviews */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Features List */}
            <div className="bg-white/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/40">
              <h3 className="text-2xl font-bold text-[#091F5B] mb-6">Product Features</h3>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#091F5B]">
                    <div className="bg-[#6F96D1]/20 p-2 rounded-full">
                      <Check className="h-4 w-4 text-[#091F5B]" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews Preview */}
            <div className="bg-white/40 backdrop-blur-md rounded-[2rem] p-8 border border-white/40">
              <h3 className="text-2xl font-bold text-[#091F5B] mb-6">Recent Reviews</h3>
              <div className="space-y-6">
                 {reviewsList.map((review, i) => (
                     <div key={i} className="border-b border-[#091F5B]/10 last:border-0 pb-6 last:pb-0">
                         <div className="flex justify-between items-start mb-2">
                             <div>
                                 <h4 className="font-bold text-[#091F5B]">{review.name}</h4>
                                 <div className="flex text-yellow-400 text-sm">
                                      {[...Array(5)].map((_, starI) => (
                                          <Star key={starI} className={`h-3 w-3 ${starI < review.rating ? "fill-current" : "text-gray-300"}`} />
                                      ))}
                                 </div>
                             </div>
                             <span className="text-xs text-[#091F5B]/60">{review.date}</span>
                         </div>
                         <p className="text-[#091F5B]/80 italic">"{review.comment}"</p>
                     </div>
                 ))}
              </div>
            </div>
        </div>

      </div>
    </div>
  );
}

