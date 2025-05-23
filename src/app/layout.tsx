import type { Metadata } from "next";
import { Inter, Roboto, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Configure fonts
const openSans = Open_Sans({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Extended metadata for SEO
export const metadata: Metadata = {
  title: "Ziplyt – Book Trusted Local Workers Easily",
  description:
    "Ziplyt lets you book verified electricians, plumbers, and cleaners near you. Fast, secure, and hassle-free service booking app.",
  keywords: [
    "Ziplyt",
    "book local workers",
    "hire electrician online",
    "trusted home services",
    "plumber near me",
    "local cleaning service",
    "UrbanClap alternative",
    "home service booking",
    "verified professionals",
  ],
  authors: [{ name: "Ziplyt Team", url: "https://ziplyt.com" }],
  openGraph: {
    title: "Ziplyt – Trusted Local Worker Booking App",
    description:
      "Book electricians, plumbers, and more with Ziplyt. Instant, secure, and trusted services at your fingertips.",
    url: "http://localhost:3000", // temporary URL for local dev
    siteName: "Ziplyt",
    images: [
      {
        url: "https://via.placeholder.com/1200x630.png?text=Ziplyt+Preview", // placeholder image
        width: 1200,
        height: 630,
        alt: "Ziplyt App Preview Placeholder Image",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${inter.variable} ${roboto.variable} ${poppins.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
