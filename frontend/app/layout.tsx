import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "What The Duck | Luxury Store For Handsome Ducks",
  description: "Duck, Duck, Goose... Just Kidding, It's a Store",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Header />
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer />
    </html>
  );
}

export function Header() {
  return (
    <nav className="flex items-center justify-between p-10 bg-amber-300">
      <div className="flex gap-5">
        <Link href="#" className="hover:underline">
          Home
        </Link>
        <Link href="#" className="hover:underline">
          About
        </Link>
      </div>
      <Link href="#">
        What The Duck
      </Link>
      <div className="flex gap-5">
        <Link href="#" className="hover:underline">
          SignUp
        </Link>
        <Link href="#" className="hover:underline">
          Login
        </Link>
      </div>
    </nav>
  );
}

export function Footer() {
  return <div>Footer</div>;
}
