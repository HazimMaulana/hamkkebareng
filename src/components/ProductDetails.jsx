"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Star, Minus, Plus, Check, Truck, RefreshCw, Shield } from "lucide-react";
import { addToCart } from "@/lib/cart";

const STICKER_OPTIONS = [
  "Basic Korean Sticker Pack",
  "Digital Business Sticker Pack",
  "EPS Topic Sticker Pack",
  "Korean For Business Sticker Pack",
  "Korean For Tourism Sticker Pack",
  "Snowies Sticker Pack",
];

const KEYCHAIN_OPTIONS = ["HB1 Keychain", "HB2 Keychain", "Pinko Keychain"];


export function ProductDetails({ onBack, product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "M");
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]?.name || "Blue");
  const [isLiked, setIsLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const addedTimeoutRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [bundleStickerOne, setBundleStickerOne] = useState(STICKER_OPTIONS[0]);
  const [bundleStickerTwo, setBundleStickerTwo] = useState(STICKER_OPTIONS[1]);
  const [bundleKeychain, setBundleKeychain] = useState(KEYCHAIN_OPTIONS[0]);

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
  const isBundle = (product?.badge || "").toLowerCase() === "bundle";
  const images = Array.isArray(product?.images) && product.images.length > 0 ? product.images : image ? [image] : [];
  const activeImage = images[activeImageIndex] || image;
  const isDetailedImage = typeof activeImage === "string" && activeImage.includes("tshirtdetailed.png");

  // Price Calculation
  const basePrice = parseInt((price || "0").replace(/[^0-9]/g, ""), 10) || 0;
  const extraCost = selectedSize === "XXL" ? 5000 : 0;
  const finalPrice = basePrice + extraCost;
  // Use toLocaleString('id-ID') but we need to ensure the format matches "Rp. 85.000"
  // toLocaleString for 'id-ID' formats 85000 as "85.000" which is perfect.
  const displayedPrice = `Rp. ${finalPrice.toLocaleString("id-ID")}`;

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

  useEffect(() => {
    return () => {
      if (addedTimeoutRef.current) {
        clearTimeout(addedTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isBundle) {
      setBundleStickerOne(STICKER_OPTIONS[0]);
      setBundleStickerTwo(STICKER_OPTIONS[1] ?? STICKER_OPTIONS[0]);
      setBundleKeychain(KEYCHAIN_OPTIONS[0]);
    }
  }, [isBundle, product?.name]);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [product?.name]);

  const handlePrevImage = () => {
    if (images.length <= 1) return;
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    if (images.length <= 1) return;
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handleAddToCart = () => {
    const sizeValue = sizes.length > 0 ? selectedSize : null;
    const colorValue = colors.length > 0 ? selectedColor : null;
    const key = [name, sizeValue, colorValue].filter(Boolean).join("|");
    const options = [];

    if (isBundle) {
      options.push(`Sticker 1: ${bundleStickerOne}`);
      options.push(`Sticker 2: ${bundleStickerTwo}`);
      options.push(`Keychain: ${bundleKeychain}`);
    }

    addToCart({
      key: isBundle ? `${key}|${bundleStickerOne}|${bundleStickerTwo}|${bundleKeychain}` : key,
      name,
      price: displayedPrice,
      image: activeImage || image,
      quantity,
      size: sizeValue,
      color: colorValue,
      options,
    });

    setAdded(true);
    if (addedTimeoutRef.current) {
      clearTimeout(addedTimeoutRef.current);
    }
    addedTimeoutRef.current = setTimeout(() => setAdded(false), 1500);
  };

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

        <div>
              <div className="flex flex-col items-center gap-2 mb-4">
                  <h1 className="text-4xl lg:text-5xl font-extrabold text-[#091F5B] mb-4 bg-clip-text">
                    {name}
                  </h1>
                  <p className="text-3xl font-bold text-[#6F96D1]">{displayedPrice}</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < Math.floor(rating) ? "fill-current" : "text-gray-300"}`} />
                  ))}
                </div>
                <span className="text-[#091F5B] font-medium">
                  {rating} ({reviews} reviews)
                </span>
              </div>
            </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20 ">
          {/* Product Image */}
          <div className="relative group">
             <div className="absolute inset-4 bg-gradient-to-tr from-[#091F5B]/20 to-[#6F96D1]/20 rounded-[2.5rem] transform rotate-3 scale-95 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
             <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-white/50 backdrop-blur-sm border-2 border-white/50 shadow-2xl">
                <img
                    src={activeImage}
                    alt={name}
                    className={
                      isDetailedImage
                        ? "max-w-full max-h-full object-contain p-8 mx-auto my-auto"
                        : "w-full h-full object-contain p-8"
                    }
                />
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#091F5B] shadow-lg flex items-center justify-center transition"
                      aria-label="Previous image"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-[#091F5B] shadow-lg flex items-center justify-center transition"
                      aria-label="Next image"
                    >
                      <ArrowLeft className="h-5 w-5 rotate-180" />
                    </button>
                  </>
                )}
             </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8 flex flex-col">
            

            {/* <p className="text-[#091F5B]/80 text-lg leading-relaxed">
              {description}
            </p> */}

            {/* Selectors */}
            <div className="space-y-6 p-6 bg-white/40 backdrop-blur-md rounded-3xl border border-white/40">
                {isBundle && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-[#091F5B] mb-3">Sticker 1</label>
                      <div className="flex flex-wrap gap-3">
                        {STICKER_OPTIONS.map((option) => (
                          <button
                            key={option}
                            onClick={() => setBundleStickerOne(option)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                              bundleStickerOne === option
                                ? "bg-[#091F5B] text-white shadow-lg scale-[1.02]"
                                : "bg-white/60 text-[#091F5B] hover:bg-white/80"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#091F5B] mb-3">Sticker 2</label>
                      <div className="flex flex-wrap gap-3">
                        {STICKER_OPTIONS.map((option) => (
                          <button
                            key={option}
                            onClick={() => setBundleStickerTwo(option)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                              bundleStickerTwo === option
                                ? "bg-[#091F5B] text-white shadow-lg scale-[1.02]"
                                : "bg-white/60 text-[#091F5B] hover:bg-white/80"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#091F5B] mb-3">Keychain</label>
                      <div className="flex flex-wrap gap-3">
                        {KEYCHAIN_OPTIONS.map((option) => (
                          <button
                            key={option}
                            onClick={() => setBundleKeychain(option)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                              bundleKeychain === option
                                ? "bg-[#091F5B] text-white shadow-lg scale-[1.02]"
                                : "bg-white/60 text-[#091F5B] hover:bg-white/80"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

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
            <div className="flex gap-4 flex-col">
                <Button
                  disabled
                  className="flex-1 h-14 bg-gray-400 text-white rounded-2xl text-lg font-bold shadow-xl cursor-not-allowed"
                >
                    We'll Be Right Back
                </Button>
                <p className="text-center text-[#091F5B] font-semibold">
                    Orders are temporarily paused. We'll be back soon!
                </p>
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
