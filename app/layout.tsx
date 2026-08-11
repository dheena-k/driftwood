import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Driftwood Beach Resort | Villa Stay in Cheyyur, Tamil Nadu",
  description:
    "Driftwood Beach Resort is a five-bedroom brick villa in Paramankeni, Cheyyur, with a private pool, rooftop terrace, and garden courtyard. Built for family gatherings and group getaways off the ECR.",
  
  keywords: [
    "villa resort",
    "Cheyyur villa",
    "Paramankeni villa",
    "ECR villa stay",
    "Driftwood Beach Resort",
  ],

  icons: { icon: "/images/favicon.png", apple: "/images/apple-icon.png", },
  openGraph: {
    title: "Driftwood Beach Resort",
    description:
      "A five-bedroom brick villa in Paramankeni, Cheyyur, with a private pool, rooftop terrace, and garden courtyard.",
    type: "website",
    siteName: "Driftwood Beach Resort",
     images: ["/images/logo-light.png"],
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
