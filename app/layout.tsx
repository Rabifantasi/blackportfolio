import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Link from 'next/link';
import { Home, Briefcase, BookOpen, Wrench } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rabia Farooq Shaikh - Frontend Developer',
  description: 'Portfolio website of Rabia Farooq Shaikh, a frontend developer specializing in modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="font-bold text-xl">RFS</Link>
                <div className="flex items-center gap-6">
                  <Link href="/" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                  </Link>
                  <Link href="/projects" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Briefcase className="w-4 h-4" />
                    <span>Projects</span>
                  </Link>
                  <Link href="/services" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Wrench className="w-4 h-4" />
                    <span>Services</span>
                  </Link>
                  <Link 
  href="/Rabia_farooq_-_Front_end_Developer.pdf" 
  className="flex items-center gap-2 hover:text-primary transition-colors" 
  download
>
  <BookOpen className="w-4 h-4" />
  <span>Resume</span>
</Link>
                </div>
              </div>
            </div>
          </nav>
          <div className="pt-16">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
