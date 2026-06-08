import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "TraceLess",
    template: "%s | TraceLess",
  },
  description: "Secure, zero-trace file sharing for shared and public systems.",
  authors: [
    {
      name: "nishant pisal",
    
    },
  ],
  applicationName: "TraceLess",
  keywords: ["TraceLess", "file sharing", "privacy", "WebRTC", "socket.io"],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "TraceLess",
    description: "Secure, zero-trace file sharing for shared and public systems.",
    url: "/",
    siteName: "TraceLess",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "TraceLess",
    description: "Secure, zero-trace file sharing for shared and public systems.",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="TraceLess" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon-for-public/web-app-manifest-192x192.png" />
        <link rel="apple-touch-icon" href="/favicon-for-public/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-for-public/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-for-public/web-app-manifest-512x512.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0b1220" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
        <Toaster showOnLoad={true} />
      </body>
    </html>
  );
}
