import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hamkke Bareng",
  description: "KKN International Winter Batch 2025",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Hamkke Bareng",
    description: "KKN International Winter Batch 2025",
    siteName: "Hamkke Bareng",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Hamkke Bareng Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
