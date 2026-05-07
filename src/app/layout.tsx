import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ilham Prima Y — Software Engineer",
    template: "%s | Ilham Prima Y"
  },
  description: "Software Engineer with 4+ years of experience specializing in modern web development, TypeScript, React, and scalable systems.",
  keywords: ["Ilham Prima Y", "Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  openGraph: {
    title: "Ilham Prima Y — Software Engineer",
    description: "Software Engineer with 4+ years of experience building modern web applications.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
