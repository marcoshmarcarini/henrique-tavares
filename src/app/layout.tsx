import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/theme/Nav/page";
import Footer from "@/components/theme/Footer/page";


export const metadata: Metadata = {
  title: "Henrique Tavares e Priscila Thomaz",
  description: "A OAB pode mais.",
  authors: [
    {
      name: "Marcos Henrique Marcarini Junior",
    },
  ],
  openGraph: {
    title: "Henrique Tavares e Priscila Thomaz",
    description: "A OAB pode mais.",
    url: "https://aoabpodemais.com.br",
    siteName: "Henrique Tavares e Priscila Thomaz",
    images: [
      {
        url: "https://aoabpodemais.com.br/img/logo-2.png",
        alt: "Henrique Tavares e Priscila Thomaz",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henrique Tavares e Priscila Thomaz",
    description: "A OAB pode mais.",
    images: [
      {
        url: "https://aoabpodemais.com.br/img/logo-2.png",
        alt: "Henrique Tavares e Priscila Thomaz",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow", // Para os bots de busca indexarem.
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  themeColor: "#9df101",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
