import type { Metadata } from "next";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Aurora ? Next-Gen AI Platform",
  description: "Experience a luminous, modern, and animated landing page.",
  metadataBase: new URL("https://agentic-fb02444b.vercel.app"),
  openGraph: {
    title: "Aurora ? Next-Gen AI Platform",
    description: "Experience a luminous, modern, and animated landing page.",
    url: "https://agentic-fb02444b.vercel.app",
    siteName: "Aurora",
    images: [],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-dvh bg-black text-white antialiased [--radius:12px]">
        {children}
      </body>
    </html>
  );
}
