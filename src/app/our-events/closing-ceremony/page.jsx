"use client";

import { Navbar } from "@/components/Navbar";
import { SnowEffect } from "@/components/SnowEffect";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import svgPaths from "@/imports/svg-aryojtau6r";
import { useState } from "react";

const FALLBACK_STAR_PATH =
  "M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.9 6.2 20.5l1.1-6.5-4.8-4.6 6.6-.9L12 2.5z";

const STAR_POSITIONS = [
  { left: 638, top: 80 },
  { left: 437, top: 320 },
  { left: 67, top: 640 },
  { left: 1028, top: 760 },
  { left: 1185, top: 980 },
  { left: 805, top: 420 },
  { left: 62, top: 380 },
  { left: 50, top: 120 },
  { left: 1238, top: 420 },
];

const CIRCLE_POSITIONS = [
  { left: 53, top: 520 },
  { left: 153, top: 880 },
  { left: 350, top: 690 },
  { left: 1023, top: 360 },
  { left: 1188, top: 720 },
  { left: 234, top: 280 },
];

const SNOW_POSITIONS = [
  { left: 120, top: 180, size: 120, opacity: 0.55, blur: false },
  { left: 420, top: 60, size: 160, opacity: 0.4, blur: true },
  { left: 1220, top: 550, size: 140, opacity: 0.5, blur: false },
  { left: 1080, top: 40, size: 180, opacity: 0.35, blur: true },
  { left: 1260, top: 160, size: 110, opacity: 0.6, blur: false },
];

export default function ClosingCeremonyRegistrationPage() {
  const starPath = svgPaths?.pe978a00 ?? FALLBACK_STAR_PATH;

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const eventName = "Closing Ceremony";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const rawFormData = new FormData(e.target);
    const formData = new FormData();

    // Map form fields to Google Form entry IDs
    // entry.344283422 = Name
    // entry.222285017 = Origin
    formData.append("entry.344283422", rawFormData.get("name"));
    formData.append("entry.222285017", rawFormData.get("origin"));

    try {
      const formUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSf_6y8O661dbua0xO7OOwBO8Gby-EQaUaawCmgcSWAiuB5e8w/formResponse";

      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSuccess(true);
      e.target.reset(); // Clear the form
    } catch (error) {
      console.error("Error submitting form", error);
      alert(
        "There was an error submitting your registration. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#D0E4FF] to-[#6F96D1] flex flex-col items-center overflow-x-hidden pb-14">
      <SnowEffect />

      <div className="hidden lg:block pointer-events-none absolute inset-0 overflow-hidden z-0">
        {STAR_POSITIONS.map((pos, i) => (
          <div
            key={`star-${i}`}
            className="absolute size-[24px]"
            style={{ left: pos.left, top: pos.top }}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <path d={starPath} fill="white" opacity="0.8" />
            </svg>
          </div>
        ))}

        {CIRCLE_POSITIONS.map((pos, i) => (
          <div
            key={`circle-${i}`}
            className="absolute size-[9px]"
            style={{ left: pos.left, top: pos.top }}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 9 9"
            >
              <circle cx="4.5" cy="4.5" fill="white" r="4.5" opacity="0.8" />
            </svg>
          </div>
        ))}

        {SNOW_POSITIONS.map((snow, i) => (
          <img
            key={`snow-${i}`}
            alt=""
            src="/assets/snow.png"
            className={`absolute ${snow.blur ? "blur-sm" : ""}`}
            style={{
              left: snow.left,
              top: snow.top,
              width: snow.size,
              height: snow.size,
              opacity: snow.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full flex flex-col items-center min-h-screen">
        <Navbar />

        <div className="flex flex-col max-w-[700px] flex justify-center w-full pt-32 px-4">
          <h1
            className="font-['AGPX',sans-serif] text-white text-[40px] lg:text-[60px] leading-[1.1] tracking-[-2.125px] text-center"
            style={{
              textShadow:
                "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)",
            }}
          >
            SIGN UP TO OUR EVENT
          </h1>
          <p className="text-center text-white">
            Join us for the International KKN (Community Service Learning)
            Winter Batch 2025. This season, we are transcending geographical
            boundaries to foster sustainable development and cultural exchange.
          </p>
          <p className="text-white text-center pt-4 text-xl font-semibold">
            {eventName}
          </p>
        </div>

        <div className="w-full max-w-[600px] px-4 mt-8">
          <Card className="bg-white/70 backdrop-blur-2xl border-2 border-white/60 shadow-2xl rounded-3xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-[#091f5b]">
                {success ? "You're All Set! 🎉" : "Registration"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {success ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-8">
                  <div className="rounded-full bg-green-100 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-8 w-8 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#091f5b] text-center">
                    Thank you for joining!
                  </h3>
                  <Button
                    onClick={() => setSuccess(false)}
                    variant="outline"
                    className="mt-4"
                  >
                    Register Another Person
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-[#091f5b] font-semibold"
                    >
                      Nama / Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="bg-white/50 border-white/60 focus:border-[#091f5b] rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="origin"
                      className="text-[#091f5b] font-semibold"
                    >
                      Asal / Origin
                    </Label>
                    <Input
                      id="origin"
                      name="origin"
                      required
                      placeholder="Unram, umum"
                      className="bg-white/50 border-white/60 focus:border-[#091f5b] rounded-xl"
                    />
                  </div>

                  <Button
                    className="w-full bg-[#091F5B] hover:bg-[#091F5B]/90 text-white font-bold py-6 rounded-xl text-lg mt-4 shadow-lg disabled:opacity-50"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "SUBMITTING..." : "SUBMIT REGISTRATION"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
