"use client";

import { Navbar } from "@/components/Navbar";
import { SnowEffect } from "@/components/SnowEffect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, X } from "lucide-react";
import svgPaths from "@/imports/svg-aryojtau6r";
import { useState, useRef } from "react";

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
  { left: 820, top: 320, size: 140, opacity: 0.5, blur: false },
  { left: 1080, top: 40, size: 180, opacity: 0.9, blur: true },
  { left: 1260, top: 260, size: 110, opacity: 0.6, blur: false },
  { left: -50, top: 600, size: 200, opacity: 0.3, blur: true },
  { left: 1400, top: 900, size: 180, opacity: 0.4, blur: true },
];

const PROGRAM_SNOW_POSITIONS = [
  { left: 60, top: 580, size: 150, opacity: 0.45, blur: true },
  { left: 980, top: 740, size: 120, opacity: 0.6, blur: false },
  { left: 220, top: 1200, size: 110, opacity: 0.6, blur: false },
  { left: 640, top: 1120, size: 120, opacity: 0.55, blur: false },
  { left: 1120, top: 1320, size: 150, opacity: 0.45, blur: true },
  { left: 40, top: 1500, size: 130, opacity: 0.5, blur: true },
  { left: 1300, top: 1900, size: 110, opacity: 0.6, blur: false },
];

const WAVE_SNOW_POSITIONS = [
  { left: 980, top: 800, size: 140, opacity: 0.3, blur: true },
  { left: 200, top: 400, size: 100, opacity: 0.4, blur: true },
  { left: 1200, top: 1600, size: 160, opacity: 0.35, blur: true },
];

const DOT_SNOW_POSITIONS = [
  { left: 120, top: 320, size: 10, opacity: 0.6, type: "dot" },
  { left: 1160, top: 240, size: 12, opacity: 0.6, type: "dot" },
  { left: 420, top: 640, size: 12, opacity: 0.55, type: "dot" },
  { left: 980, top: 520, size: 40, opacity: 0.45, type: "small" },
  { left: 120, top: 1020, size: 10, opacity: 0.6, type: "dot" },
  { left: 880, top: 960, size: 11, opacity: 0.5, type: "dot" },
  { left: 1240, top: 1100, size: 40, opacity: 0.45, type: "small" },
  { left: 260, top: 1320, size: 40, opacity: 0.5, type: "small" },
  { left: 600, top: 1460, size: 40, opacity: 0.45, type: "small" },
  { left: 420, top: 1640, size: 12, opacity: 0.55, type: "dot" },
  { left: 980, top: 1720, size: 40, opacity: 0.45, type: "small" },
  { left: 1160, top: 1840, size: 12, opacity: 0.6, type: "dot" },
  { left: 360, top: 1980, size: 10, opacity: 0.55, type: "dot" },
  { left: 540, top: 1880, size: 40, opacity: 0.5, type: "small" },
  { left: 780, top: 1660, size: 11, opacity: 0.5, type: "dot" },
];

const MAX_FILE_SIZE_MB = 2;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

const FILE_FIELDS = [
  "cv",
  "porto",
  "jadwal",
  "krs",
  "english_proficiency",
  "korean_proficiency",
  "surat_rekomendasi",
];

const FILE_VALIDATION_RULES = {
  cv: {
    label: "Curriculum Vitae (CV)",
    accept: ".pdf",
    extensions: ["pdf"],
    mimeTypes: ["application/pdf"],
    allowedFormatLabel: "PDF",
  },
  porto: {
    label: "Portfolio",
    accept: ".pdf",
    extensions: ["pdf"],
    mimeTypes: ["application/pdf"],
    allowedFormatLabel: "PDF",
  },
  jadwal: {
    label: "Study Schedule (Highlight) & SIA Schedule",
    accept: ".pdf,.png,.jpg,.jpeg",
    extensions: ["pdf", "png", "jpg", "jpeg"],
    mimeTypes: ["application/pdf", "image/png", "image/jpeg", "image/jpg"],
    allowedFormatLabel: "PDF atau gambar (PNG/JPG)",
  },
  krs: {
    label: "Study Plan Card (KRS)",
    accept: ".pdf",
    extensions: ["pdf"],
    mimeTypes: ["application/pdf"],
    allowedFormatLabel: "PDF",
  },
  english_proficiency: {
    label: "English Language Proficiency Certificate",
    accept: ".png,.jpg,.jpeg",
    extensions: ["png", "jpg", "jpeg"],
    mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
    allowedFormatLabel: "gambar (PNG/JPG)",
  },
  korean_proficiency: {
    label: "Korean Proficiency Certificate (EPS TOPIK / TOPIK)",
    accept: ".pdf,.png,.jpg,.jpeg",
    extensions: ["pdf", "png", "jpg", "jpeg"],
    mimeTypes: ["application/pdf", "image/png", "image/jpeg", "image/jpg"],
    allowedFormatLabel: "PDF atau gambar (PNG/JPG)",
  },
  surat_rekomendasi: {
    label: "Recommendation Letter",
    accept: ".pdf",
    extensions: ["pdf"],
    mimeTypes: ["application/pdf"],
    allowedFormatLabel: "PDF",
  },
};

const SCHEDULE_IMAGES = [
  { src: "/images/schedule.png", alt: "Study schedule example 1" },
  { src: "/images/schedule-sia.jpeg", alt: "Study schedule example 2" },
];

const CONTACT_PERSONS = [
  {
    name: "Kiki",
    phone: "+62 819-3754-2183",
    href: "https://wa.me/6281937542183",
  },
  {
    name: "Eva",
    phone: "+62 878-5761-0552",
    href: "https://wa.me/6287857610552",
  },
  {
    name: "Jim",
    phone: "+62 877-6856-6204",
    href: "https://wa.me/6287768566204",
  },
];

export default function RegistrationPage() {
  const starPath = svgPaths?.pe978a00 ?? FALLBACK_STAR_PATH;
  // State machine: 'idle' | 'submitting' | 'success'
  const [submissionState, setSubmissionState] = useState('idle');
  const [fileError, setFileError] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const isSubmittingRef = useRef(false);

  // GANTI DENGAN URL DARI GOOGLE APPS SCRIPT ANDA
  // Pastikan Anda sudah deploy script seperti yang dijelaskan sebelumnya
  const WEB_APP_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"; 

  const getFileExtension = (filename = "") => filename.split(".").pop()?.toLowerCase() ?? "";

  const validateFile = (fieldName, file) => {
    if (!file || file.size === 0) {
      return "";
    }

    const rule = FILE_VALIDATION_RULES[fieldName];
    if (!rule) {
      return "";
    }

    const extension = getFileExtension(file.name);
    const mimeType = (file.type || "").toLowerCase();
    const isExtensionAllowed = rule.extensions.includes(extension);
    const isMimeAllowed = mimeType ? rule.mimeTypes.includes(mimeType) : true;

    if (!isExtensionAllowed || !isMimeAllowed) {
      return `Format file untuk ${rule.label} harus ${rule.allowedFormatLabel}.`;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return `Ukuran file maksimal ${MAX_FILE_SIZE_MB}MB. File "${file.name}" terlalu besar.`;
    }

    return "";
  };

  const handleFileChange = (e) => {
    const fieldName = e.target.name;
    const file = e.target.files?.[0];
    const errorMessage = validateFile(fieldName, file);
    if (errorMessage) {
      setFileError(errorMessage);
      alert(errorMessage);
      e.target.value = "";
      return;
    }

    setFileError("");
  };

  const handleSchedulePreview = (image) => {
    setPreviewImage(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    
    // Generate a unique ID for this submission attempt to prevent duplicates
    const submissionId = crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substr(2);

    const form = e.target;
    const formData = new FormData(form);
    setFileError("");

    for (const fieldName of FILE_FIELDS) {
      const file = formData.get(fieldName);
      const errorMessage = validateFile(fieldName, file);
      if (errorMessage) {
        setFileError(errorMessage);
        alert(errorMessage);
        isSubmittingRef.current = false;
        return;
      }
    }

    setSubmissionState("submitting");
    
    // Helper function to read file as base64
    const readFile = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve({
          name: file.name,
          type: file.type,
          data: e.target.result.split(',')[1]
        });
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    try {
      const payload = {};

      // Text fields - MENGGUNAKAN KEY YANG SESUAI DENGAN GOOGLE APPS SCRIPT
      payload.submissionId = submissionId;
      payload.nama = formData.get('nama');
      payload.nim = formData.get('nim');
      payload.no_telp = formData.get('no_telp');
      payload.mbti = formData.get('mbti');
      payload.department = formData.get('department');
      payload.major = formData.get('major');
      payload.kkn_status = formData.get('kkn_status');
      payload.role1 = formData.get('role1');
      payload.role2 = formData.get('role2');
      payload.talents = formData.get('talents');
      payload.current_activities = formData.get('current_activities');
      payload.motivation = formData.get('motivation');
      
      // File fields processing
      for (const fieldName of FILE_FIELDS) {
        const file = formData.get(fieldName);
        if (file && file.size > 0) {
           // Proses file menjadi object { mimeType, data: base64 }
           const fileData = await readFile(file);
           payload[fieldName] = {
             mimeType: fileData.type,
             data: fileData.data, // Sudah base64 murni tanpa header
             name: fileData.name
           };
        } else {
           // Jika tidak ada file, kirim null/undefined agar script tahu
           payload[fieldName] = null;
        }
      }

      // Kirim ke Google Apps Script
      // NOTE: Ganti URL ini dengan URL Web App dari deployment Google Apps Script Anda (versi EXEC)
      // Jangan gunakan URL 'echo' atau '/dev'
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbycJQFSeudtzyOkbPgGNcOTCTxBocb8qcU8zMuT3dlWrJllAJ3NxEV7ipKBKgQf9c7Ogg/exec"; 
      
      console.log("Sending payload to script...", payload); // Debug log

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
        // Hapus mode: 'no-cors' agar kita bisa baca response JSON
        // mode: "no-cors", 
      });
      
      // Google Apps Script redirect behavior is handled automatically by fetch,
      // and we just need the final JSON response.
      if (!response.ok) {
        throw new Error(`Server returned ${response.status} ${response.statusText}`);
      }

      const result = await response.json();

      if (result.result === "success") {
        setSubmissionState("success");
        setFileError("");
        // Reset form or redirect here if needed
        form.reset(); 
        // Optional: window.location.href = "/our-events";
      } else {
        throw new Error(result.error || "Unknown error from server");
      }

    } catch (error) {
      console.error("Submission Error:", error);
      alert(`Failed to submit registration: ${error.message}. Please try again or contact support.`);
      setSubmissionState("idle");
    } finally {
      isSubmittingRef.current = false;
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

        {SNOW_POSITIONS.map((pos, i) => (
          <img
            key={`snow-bottom-${i}`}
            alt=""
            src="/assets/snow.png"
            className={`absolute ${pos.blur ? "blur-sm" : ""} ${
              i === 3 ? "z-10" : ""
            }`}
            style={{
              left: pos.left,
              top: pos.top,
              width: pos.size,
              height: pos.size,
              opacity: pos.opacity,
            }}
          />
        ))}

        {PROGRAM_SNOW_POSITIONS.map((pos, i) => (
          <img
            key={`snow-program-${i}`}
            alt=""
            src="/assets/snow.png"
            className={`absolute ${pos.blur ? "blur-sm" : ""}`}
            style={{
              left: pos.left,
              top: pos.top,
              width: pos.size,
              height: pos.size,
              opacity: pos.opacity,
            }}
          />
        ))}

        {WAVE_SNOW_POSITIONS.map((pos, i) => (
          <img
            key={`snow-wave-${i}`}
            alt=""
            src="/assets/snow.png"
            className={`absolute ${pos.blur ? "blur-sm" : ""}`}
            style={{
              left: pos.left,
              top: pos.top,
              width: pos.size,
              height: pos.size,
              opacity: pos.opacity,
            }}
          />
        ))}

        {DOT_SNOW_POSITIONS.map((pos, i) => (
          <img
            key={`dot-snow-${i}`}
            alt=""
            src={
              pos.type === "dot" ? "/assets/dotSnow.png" : "/assets/smallSnow.png"
            }
            className="absolute"
            style={{
              left: pos.left,
              top: pos.top,
              width: pos.size,
              height: pos.size,
              opacity: pos.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full flex flex-col items-center min-h-screen">
        <Navbar />

        <div className="flex flex-col max-w-[800px] w-full pt-32 px-4 pb-20">
          <div className="bg-white/20 backdrop-blur-xl border border-white/50 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-8 md:p-12">
            <h1 className="font-['AGPX',sans-serif] text-[#091F5B] text-3xl md:text-5xl text-center mb-2 drop-shadow-sm">
              REGISTRATION
            </h1>
            <p className="text-[#091F5B] text-center font-bold text-lg md:text-xl mb-8">
              International Community Service Summer 2026
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nama" className="text-[#091F5B] font-semibold text-base">Full Name</Label>
                  <Input id="nama" name="nama" required placeholder="Your Full Name" className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] focus-visible:ring-[#091F5B] placeholder:text-gray-500/80 rounded-xl h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nim" className="text-[#091F5B] font-semibold text-base">Student ID (NIM)</Label>
                  <Input id="nim" name="nim" required placeholder="Your Student ID" className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] focus-visible:ring-[#091F5B] placeholder:text-gray-500/80 rounded-xl h-11" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="no_telp" className="text-[#091F5B] font-semibold text-base">Phone Number / WhatsApp</Label>
                  <Input id="no_telp" name="no_telp" required placeholder="08xxxxxxxxxx" type="tel" className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] focus-visible:ring-[#091F5B] placeholder:text-gray-500/80 rounded-xl h-11" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="mbti" className="text-[#091F5B] font-semibold text-base">MBTI</Label>
                  <Input id="mbti" name="mbti" required placeholder="e.g., ENFP" className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] focus-visible:ring-[#091F5B] placeholder:text-gray-500/80 rounded-xl h-11" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="department" className="text-[#091F5B] font-semibold text-base">Department</Label>
                  <Input id="department" name="department" required placeholder="Your Department" className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] focus-visible:ring-[#091F5B] placeholder:text-gray-500/80 rounded-xl h-11" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="major" className="text-[#091F5B] font-semibold text-base">Major</Label>
                  <Input id="major" name="major" required placeholder="Your Major" className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] focus-visible:ring-[#091F5B] placeholder:text-gray-500/80 rounded-xl h-11" />
                </div>
              </div>
              <div className="">
                <Label className="text-[#091F5B] font-semibold text-base">Are you UNRAM's student registered for KKN this semester?</Label>
                <p className="text-sm text-gray-400 pb-3">* student with KKN registered will be prioritized</p>
                <RadioGroup name="kkn_status" required className="flex flex-row gap-4">
                  <div className="flex-1">
                    <RadioGroupItem value="Yes" id="kkn_yes" className="peer sr-only" />
                    <Label
                      htmlFor="kkn_yes"
                      className="flex items-center justify-center w-full px-4 py-3 bg-white/60 border-2 border-[#091F5B]/20 hover:bg-white/80 rounded-xl cursor-pointer peer-data-[state=checked]:border-[#091F5B] peer-data-[state=checked]:bg-[#091F5B]/10 transition-all text-[#091F5B] font-medium"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex-1">
                    <RadioGroupItem value="No" id="kkn_no" className="peer sr-only" />
                    <Label
                      htmlFor="kkn_no"
                      className="flex items-center justify-center w-full px-4 py-3 bg-white/60 border-2 border-[#091F5B]/20 hover:bg-white/80 rounded-xl cursor-pointer peer-data-[state=checked]:border-[#091F5B] peer-data-[state=checked]:bg-[#091F5B]/10 transition-all text-[#091F5B] font-medium"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                <Label htmlFor="role1" className="text-[#091F5B] font-semibold text-base">First Choice Role</Label>
                <Select name="role1" required>
                  <SelectTrigger className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] focus:ring-[#091F5B] rounded-xl h-11">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Leader">Leader</SelectItem>
                    <SelectItem value="Treasurer">Treasurer (Bendahara)</SelectItem>
                    <SelectItem value="Secretary">Secretary (Sekretaris)</SelectItem>
                    <SelectItem value="Tech Expert">Tech Expert</SelectItem>
                    <SelectItem value="Creative">Creative</SelectItem>
                    <SelectItem value="Public Relation">Public Relation</SelectItem>
                  </SelectContent>
                </Select>
               </div>
               
               <div className="space-y-2">
                <Label htmlFor="role2" className="text-[#091F5B] font-semibold text-base">Second Choice Role</Label>
                <Select name="role2" required>
                  <SelectTrigger className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] focus:ring-[#091F5B] rounded-xl h-11">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Leader">Leader</SelectItem>
                    <SelectItem value="Treasurer">Treasurer (Bendahara)</SelectItem>
                    <SelectItem value="Secretary">Secretary (Sekretaris)</SelectItem>
                    <SelectItem value="Tech Expert">Tech Expert</SelectItem>
                    <SelectItem value="Creative">Creative</SelectItem>
                    <SelectItem value="Public Relation">Public Relation</SelectItem>
                  </SelectContent>
                </Select>
               </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="talents" className="text-[#091F5B] font-semibold text-base">Tell us if you have talents!</Label>
                <Textarea id="talents" name="talents" required placeholder="Dancing, singing, etc." className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] focus-visible:ring-[#091F5B] placeholder:text-gray-500/80 rounded-xl" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="current_activities" className="text-[#091F5B] font-semibold text-base">Current Activities</Label>
                <Textarea id="current_activities" name="current_activities" required placeholder="Organizations, internships, etc." className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] focus-visible:ring-[#091F5B] placeholder:text-gray-500/80 rounded-xl" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="motivation" className="text-[#091F5B] font-semibold text-base">Motivation to Join the Program</Label>
                <Textarea id="motivation" name="motivation" required placeholder="Tell us your motivation..." className="min-h-[100px] bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] focus-visible:ring-[#091F5B] placeholder:text-gray-500/80 rounded-xl" />
              </div>

              {/* File Uploads Section */}
              <div className="space-y-4 pt-4 border-t border-[#091F5B]/20">
                <h3 className="font-bold text-[#091F5B] text-xl">Supporting Documents</h3>
                {fileError && (
                  <p className="text-sm font-semibold text-red-600">{fileError}</p>
                )}
                
                <div className="">
                  <Label htmlFor="cv" className="text-[#091F5B] font-semibold text-base">Curriculum Vitae (CV)</Label>
                  <p className="text-xs text-gray-500 pb-2">PDF File (Maks. 2MB)</p>
                  <Input id="cv" name="cv" type="file" required accept={FILE_VALIDATION_RULES.cv.accept} onChange={handleFileChange} className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] file:text-[#091F5B] file:font-semibold rounded-xl" />
                </div>

                <div className="">
                  <Label htmlFor="porto" className="text-[#091F5B] font-semibold text-base">Portfolio</Label>
                  <p className="text-xs text-gray-500 pb-2">PDF File (Maks. 2MB)</p>
                  <Input id="porto" name="porto" type="file" required accept={FILE_VALIDATION_RULES.porto.accept} onChange={handleFileChange} className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] file:text-[#091F5B] file:font-semibold rounded-xl" />
                </div>

                <div className="">
                  <Label htmlFor="jadwal" className="text-[#091F5B] font-semibold text-base">Study Schedule (Highlight) or SIA Schedule</Label>
                  <div className="flex flex-row flex-wrap items-start gap-4">
                    {SCHEDULE_IMAGES.map((image, idx) => (
                      <button
                        key={`schedule-${idx}`}
                        type="button"
                        onClick={() => handleSchedulePreview(image)}
                        className="group relative rounded-xl border border-[#091F5B]/15 bg-white/60 p-2 shadow-sm transition hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#091F5B]"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-32 w-48 sm:h-36 sm:w-56 object-contain rounded-lg bg-white"
                        />
                        <span className="pointer-events-none absolute inset-0 rounded-xl bg-[#091F5B]/5 opacity-0 transition-opacity group-hover:opacity-100" />
                        <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold text-[#091F5B] shadow-sm">
                          Click to zoom
                        </span>
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 pb-2">PDF File or IMG (Maks. 2MB)</p>
                  <Input id="jadwal" name="jadwal" type="file" required accept={FILE_VALIDATION_RULES.jadwal.accept} onChange={handleFileChange} className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] file:text-[#091F5B] file:font-semibold rounded-xl" />
                </div>

                <div className="">
                  <Label htmlFor="krs" className="text-[#091F5B] font-semibold text-base">Study Plan Card (KRS)</Label>
                  <p className="text-xs text-gray-500 pb-2">PDF File (Maks. 2MB)</p>
                  <Input id="krs" name="krs" type="file" required accept={FILE_VALIDATION_RULES.krs.accept} onChange={handleFileChange} className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] file:text-[#091F5B] file:font-semibold rounded-xl" />
                </div>

                <div className="">
                  <Label htmlFor="english_proficiency" className="text-[#091F5B] font-semibold text-base">English Language Proficiency Certificate (IELTS or TOEFL)</Label>
                  <p className="text-xs text-gray-500 pb-2">IMG File (Maks. 2MB)</p>
                  <Input id="english_proficiency" name="english_proficiency" type="file" required accept={FILE_VALIDATION_RULES.english_proficiency.accept} onChange={handleFileChange} className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] file:text-[#091F5B] file:font-semibold rounded-xl" />
                </div>

                <div className="">
                  <Label htmlFor="korean_proficiency" className="text-[#091F5B] font-semibold text-base">Korean Proficiency Certificate (EPS TOPIK / TOPIK)</Label>
                  <p className="text-xs text-gray-500 pb-2">PDF or IMG File (Optional, Maks. 2MB)</p>
                  <Input id="korean_proficiency" name="korean_proficiency" type="file" accept={FILE_VALIDATION_RULES.korean_proficiency.accept} onChange={handleFileChange} className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] file:text-[#091F5B] file:font-semibold rounded-xl" />
                </div>

                 <div className="">
                    <div className="flex flex-col items-start gap-2 mb-2">
                      <Label htmlFor="surat_rekomendasi" className="text-[#091F5B] font-semibold text-base">Recommendation Letter</Label>
                      <Button asChild size="sm" variant="outline" className="border-[#091F5B]/30 text-[#091F5B] hover:bg-[#091F5B]/10 hover:text-[#091F5B] h-8 rounded-lg px-3">
                        <a href="/files/Recommendation_Letter.docx" download="Recommendation_Letter_Template.docx" className="flex items-center gap-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                           Download Template
                        </a>
                      </Button>
                    </div>
                  <p className="text-xs text-gray-500 pb-2">PDF File (Maks. 2MB)</p>
                  <Input id="surat_rekomendasi" name="surat_rekomendasi" type="file" required accept={FILE_VALIDATION_RULES.surat_rekomendasi.accept} onChange={handleFileChange} className="bg-white/60 border-2 border-[#091F5B]/20 focus:border-[#091F5B] file:text-[#091F5B] file:font-semibold rounded-xl" />
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  type="submit" 
                  disabled={submissionState === 'submitting'}
                  className="w-full bg-[#091F5B] hover:bg-[#091f5b]/90 text-white font-bold h-12 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {submissionState === 'submitting' ? "Proccesing..." : "SUBMIT REGISTRATION"}
                </Button>
              </div>

              <div className="pt-4 border-t border-[#091F5B]/20 space-y-3">
                <p className="text-[#091F5B] font-semibold text-sm md:text-base">
                  Jika ada pertanyaan terkait form, silakan hubungi CP berikut:
                </p>
                <div className="flex flex-col gap-2">
                  {CONTACT_PERSONS.map((contact) => (
                    <a
                      key={contact.name}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white/40 hover:bg-white/60 transition-colors border border-[#091F5B]/10 shadow-sm"
                    >
                      <span className="font-semibold text-[#091F5B]">{contact.name}</span>
                      <span className="text-[#091F5B] font-medium">{contact.phone}</span>
                    </a>
                  ))}
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>

      <Dialog open={submissionState !== 'idle'} onOpenChange={(open) => {
        if (!open && submissionState !== 'submitting') {
          setSubmissionState('idle');
        }
      }}>
        <DialogContent className="sm:max-w-md bg-white/80 backdrop-blur-md border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] rounded-3xl [&>button]:hidden">
          {submissionState === 'submitting' ? (
             <div className="flex flex-col items-center justify-center py-10 space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full animate-pulse" />
                  <Loader2 className="h-16 w-16 text-[#091F5B] animate-spin relative z-10" />
                </div>
                <div className="text-center space-y-2 px-4">
                  <DialogTitle className="text-[#091F5B] text-2xl font-bold animate-pulse">Submitting Registration...</DialogTitle>
                  <DialogDescription className="text-[#091F5B]/70 font-medium text-lg">
                    Please wait while we process your documents. This may take a few moments.
                  </DialogDescription>
                </div>
             </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-[#091F5B] text-2xl font-bold text-center">Registration Successful!</DialogTitle>
                <DialogDescription className="text-center text-[#091F5B]/80 pt-2 text-base font-medium">
                  If you have any questions or need further assistance, please feel free to ask one of our representatives:
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3 py-4">
                {CONTACT_PERSONS.map((contact) => (
                  <a
                    key={contact.name}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/40 hover:bg-white/60 transition-colors border border-[#091F5B]/10 group shadow-sm"
                  >
                    <span className="font-semibold text-[#091F5B]">{contact.name}</span>
                    <span className="text-[#091F5B] font-medium group-hover:scale-105 transition-transform">{contact.phone}</span>
                  </a>
                ))}
              </div>
              <DialogFooter className="sm:justify-center">
                <Button type="button" onClick={() => window.location.href = "/our-events"} className="bg-[#091F5B] hover:bg-[#091F5B]/90 text-white w-full rounded-xl h-12 text-base font-semibold shadow-md">
                  Back to Events
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={previewImage !== null} onOpenChange={(open) => {
        if (!open) {
          setPreviewImage(null);
        }
      }}>
        <DialogContent className="sm:max-w-2xl bg-white/90 backdrop-blur-md border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] rounded-3xl [&>button]:hidden flex items-center justify-center">
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/80 hover:bg-white p-1 transition-colors z-50"
          >
            <X className="h-5 w-5 text-[#091F5B]" />
          </button>
          {previewImage && (
            <div className="flex flex-col items-center justify-center w-full">
              <img
                src={previewImage.src}
                alt={previewImage.alt}
                className="max-h-[70vh] max-w-full object-contain rounded-lg"
              />
              <p className="mt-4 text-sm text-[#091F5B]/70 text-center">{previewImage.alt}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
