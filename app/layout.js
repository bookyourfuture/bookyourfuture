export const metadata = {
  title: "Book Your Future | วางแผนการเงิน",
  description: "Future Talk for high‑income professionals. วางแผนการเงินด้วยมุมมองที่เอาประกันมาเป็นเครื่องมืออย่างสมดุล",
  metadataBase: new URL("https://bookyourfuture.vercel.app"),
  openGraph: {
    title: "Book Your Future",
    description: "Future Talk | วางแผนการเงิน",
    url: "https://bookyourfuture.vercel.app",
    siteName: "Book Your Future",
    images: ["/og.jpg"],
    locale: "th_TH",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <header className="border-b border-white/10">
          <nav className="container py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg no-underline">
              BookYourFuture
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/services" className="no-underline">Services</Link>
              <Link href="/cases" className="no-underline">Case Studies</Link>
              <Link href="/about" className="no-underline">About</Link>
              <Link href="/contact" className="btn no-underline">Book Future Talk</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="section text-white/60">
          <div className="container flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Book Your Future</p>
            <p className="text-sm">Made with Next.js on Vercel</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
