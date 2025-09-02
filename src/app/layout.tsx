import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Yousuf Middya | Portfolio",
  description: "AI/ML & Fullstack Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition">
        <header className="w-full px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 bg-white dark:bg-gray-800 z-50">
          <h1 className="text-2xl font-bold">Yousuf</h1>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/projects" className="hover:text-blue-600">Projects</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}

