"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SnowEffect } from "@/components/SnowEffect";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { clearCart, getCart, removeCartItem, updateCartItemQuantity } from "@/lib/cart";
import svgPaths from "@/imports/svg-aryojtau6r";

const FALLBACK_STAR_PATH =
  "M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.9 6.2 20.5l1.1-6.5-4.8-4.6 6.6-.9L12 2.5z";

const STAR_POSITIONS = [
  { left: 100, top: 150 },
  { left: 300, top: 250 },
  { left: 50, top: 400 },
  { left: 1100, top: 200 },
  { left: 1250, top: 450 },
  { left: 900, top: 150 },
  { left: 1300, top: 300 },
  { left: 60, top: 600 },
  { left: 1200, top: 650 },
];

const CIRCLE_POSITIONS = [
  { left: 150, top: 500 },
  { left: 250, top: 180 },
  { left: 1150, top: 350 },
  { left: 1050, top: 550 },
  { left: 1350, top: 150 },
  { left: 50, top: 800 },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [checkoutName, setCheckoutName] = useState("");
  const [checkoutPhone, setCheckoutPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const starPath = svgPaths?.pe978a00 ?? FALLBACK_STAR_PATH;

  useEffect(() => {
    const syncCart = () => setCartItems(getCart());
    syncCart();
    window.addEventListener("cart:updated", syncCart);
    return () => window.removeEventListener("cart:updated", syncCart);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => {
    const numeric = Number(String(item.price).replace(/[^\d]/g, ""));
    if (!Number.isFinite(numeric) || numeric <= 0) {
      return sum;
    }
    return sum + numeric * item.quantity;
  }, 0);
  const formattedTotalPrice =
    totalPrice > 0 ? `Rp ${totalPrice.toLocaleString("id-ID")}` : "Rp TBD";
  const orderSummary = cartItems
    .map((item, index) => {
      const details = [];
      if (item.size) details.push(`Size: ${item.size}`);
      if (item.color) details.push(`Color: ${item.color}`);
      if (item.options?.length) details.push(...item.options);

      const detailsText = details.length ? ` (${details.join(", ")})` : "";
      return `${index + 1}. ${item.name} x${item.quantity}${detailsText}`;
    })
    .join(" | ");

  const handleCheckoutSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus(null);

    if (!checkoutName.trim() || !checkoutPhone.trim()) {
      setSubmitStatus("Nama dan nomor HP wajib diisi.");
      return;
    }

    if (cartItems.length === 0) {
      setSubmitStatus("Keranjang masih kosong.");
      return;
    }

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSe9JDnIAw6n9zXfNZkKBGigj9WBRt0MRX-rCylEkpd1Ym2Flw/formResponse";
    const formData = new FormData();
    formData.append("entry.366340186", checkoutName);
    formData.append("entry.1820561485", checkoutPhone);
    formData.append("entry.2076701763", orderSummary || "-");
    formData.append("entry.391220950", formattedTotalPrice);

    try {
      setIsSubmitting(true);
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setSubmitStatus("Order successfully sent. Thank you!");
      setCheckoutName("");
      setCheckoutPhone("");
      clearCart();
      setCartItems([]);
      setCheckoutSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setSubmitStatus("Failed to send order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#D0E4FF] to-[#6F96D1] flex flex-col items-center overflow-x-hidden">
      <SnowEffect />

      <div className="hidden lg:block pointer-events-none absolute inset-0 overflow-hidden z-0">
        {STAR_POSITIONS.map((pos, i) => (
          <div key={`star-${i}`} className="absolute size-[24px]" style={{ left: pos.left, top: pos.top }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={starPath} fill="white" opacity="0.8" />
            </svg>
          </div>
        ))}

        {CIRCLE_POSITIONS.map((pos, i) => (
          <div key={`circle-${i}`} className="absolute size-[9px]" style={{ left: pos.left, top: pos.top }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <circle cx="4.5" cy="4.5" fill="white" r="4.5" opacity="0.8" />
            </svg>
          </div>
        ))}

        <img alt="" className="absolute h-[162px] left-[50px] top-[120px] w-[161px] opacity-40" src="/assets/snow.png" />
        <img alt="" className="absolute blur-sm h-[140px] w-[139px] right-[50px] top-[300px] z-0 opacity-60" src="/assets/snow.png" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <Navbar />

        <div className="w-full flex-1 pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1
                  className="font-['AGPX',sans-serif] text-white text-[50px] lg:text-[85px] leading-[1.1] tracking-[-2.125px]"
                  style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)" }}
                >
                  Your Cart
                </h1>
                <p className="text-[#091F5B]/70 mt-2">Total items: {totalItems}</p>
              </div>
              {cartItems.length > 0 && (
                <Button
                  onClick={() => {
                    clearCart();
                    setCartItems([]);
                  }}
                  variant="outline"
                  className="rounded-full border-[#091F5B]/30 text-[#091F5B] hover:bg-white/80"
                >
                  Clear Cart
                </Button>
              )}
            </div>

            {cartItems.length === 0 && !checkoutSuccess ? (
              <div className="bg-white/70 backdrop-blur-2xl border-2 border-white/60 rounded-[2rem] p-10 text-center">
                <ShoppingCart className="mx-auto h-12 w-12 text-[#6F96D1] mb-4" />
                <p className="text-[#091F5B] text-lg font-semibold mb-6">Your cart is empty.</p>
                <a href="/store">
                  <Button className="rounded-full bg-[#091F5B] text-white hover:bg-[#091F5B]/90">
                    Browse Merchandise
                  </Button>
                </a>
              </div>
            ) : checkoutSuccess ? (
              <div className="bg-white/70 backdrop-blur-2xl border-2 border-white/60 rounded-[2rem] p-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#091F5B] mb-4">Thank You for Your Order!</h2>
                <p className="text-[#091F5B]/80 text-lg mb-8 max-w-md mx-auto">
                   Our team will contact you shortly to confirm your order details.
                </p>
                <a href="/store">
                  <Button className="rounded-full bg-[#091F5B] text-white hover:bg-[#091F5B]/90 px-8 py-6 text-lg">
                    Continue Shopping
                  </Button>
                </a>
              </div>
            ) : (
              <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.key}
                      className="flex flex-col md:flex-row md:items-center gap-6 bg-white/70 backdrop-blur-2xl border-2 border-white/60 rounded-[2rem] p-6"
                    >
                      <div className="w-full md:w-36 aspect-square rounded-2xl overflow-hidden bg-white/50 border border-white/60">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>

                      <div className="flex-1">
                        <h2 className="text-[#091F5B] font-bold text-xl">{item.name}</h2>
                        <div className="text-[#091F5B]/70 text-sm mt-1">
                          {item.size && <span>Size: {item.size}</span>}
                          {item.size && item.color && <span className="mx-2">|</span>}
                          {item.color && <span>Color: {item.color}</span>}
                        </div>
                        {item.options?.length > 0 && (
                          <div className="text-[#091F5B]/70 text-sm mt-2 space-y-1">
                            {item.options.map((option) => (
                              <div key={`${item.key}-${option}`}>{option}</div>
                            ))}
                          </div>
                        )}
                        <div className="text-[#091F5B] font-bold text-lg mt-2">{item.price}</div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 bg-white/60 rounded-xl p-1 border border-white/60">
                          <button
                            onClick={() =>
                              updateCartItemQuantity(item.key, item.quantity - 1)
                            }
                            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white text-[#091F5B] transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="text-lg font-bold text-[#091F5B] w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateCartItemQuantity(item.key, item.quantity + 1)
                            }
                            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white text-[#091F5B] transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeCartItem(item.key)}
                          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/60 text-[#091F5B] hover:bg-white/80 transition-colors"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white/70 backdrop-blur-2xl border-2 border-white/60 rounded-[2rem] p-6">
                  <h2 className="text-[#091F5B] font-bold text-2xl mb-4">Order Summary</h2>
                  <div className="flex items-center justify-between text-[#091F5B]/80 mb-2">
                    <span>Items</span>
                    <span>{totalItems}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#091F5B] font-bold text-lg border-t border-[#091F5B]/10 pt-4 mt-4">
                    <span>Total</span>
                    <span>{formattedTotalPrice}</span>
                  </div>
                  <Button
                    className="w-full mt-6 h-12 rounded-full bg-[#091F5B] text-white hover:bg-[#091F5B]/90"
                    onClick={() => setShowCheckoutForm(true)}
                  >
                    Checkout
                  </Button>
                  {showCheckoutForm && (
                    <form className="mt-6 space-y-4" onSubmit={handleCheckoutSubmit}>
                      <div>
                        <label className="block text-sm font-bold text-[#091F5B] mb-2">Nama</label>
                        <input
                          value={checkoutName}
                          onChange={(event) => setCheckoutName(event.target.value)}
                          className="w-full rounded-xl bg-white/70 border border-white/60 px-4 py-3 text-[#091F5B] font-semibold"
                          type="text"
                          placeholder="Nama lengkap"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#091F5B] mb-2">Nomor HP</label>
                        <input
                          value={checkoutPhone}
                          onChange={(event) => setCheckoutPhone(event.target.value)}
                          className="w-full rounded-xl bg-white/70 border border-white/60 px-4 py-3 text-[#091F5B] font-semibold"
                          type="tel"
                          placeholder="08xxxxxxxxxx"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-12 rounded-full bg-[#6F96D1] text-white hover:bg-[#6F96D1]/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Mengirim..." : "Kirim Pesanan"}
                      </Button>
                      {submitStatus && (
                        <p className="text-sm font-semibold text-[#091F5B]">{submitStatus}</p>
                      )}
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
