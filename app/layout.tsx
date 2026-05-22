import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "MercyDev",
    "Full Stack Developer",
    "Web Developer",
    "E-Commerce Developer",
    "Next.js Developer",
    "Portfolio",
    "Hire Developer",
    "Vercel",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
