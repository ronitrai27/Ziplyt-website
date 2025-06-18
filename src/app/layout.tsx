import type { Metadata } from "next";
import { Inter, Roboto, Open_Sans, Poppins, Quicksand } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
// import { SpeedInsights } from "@vercel/speed-insights/next";

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
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

// Extended metadata for SEO
export const metadata: Metadata = {
  title: "Ziplyt – Book Trusted Local Workers Easily",
  description:
    "Ziplyt, Indias's first online home service app that let you book verified skilled local workers in no time, say goodbye to waiting , welcom instant solution.",
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
    url: "https://ziplyt.com",
    siteName: "Ziplyt",
    images: [
      {
        url: "/workerurlimage.png",
        width: 1200,
        height: 630,
        alt: "Ziplyt App Preview Placeholder Image",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
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
        className={`${openSans.variable} ${inter.variable} ${roboto.variable} ${poppins.variable} ${quicksand.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-HBQZ9SX1KW" />
        <Toaster />
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
