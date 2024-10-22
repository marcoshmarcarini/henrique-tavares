import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/theme/Nav/page";
import Footer from "@/components/theme/Footer/page";


export const metadata: Metadata = {
  title: "Henrique Tavares e Priscila Thomaz",
  description: "Juntos a OAB Pode Mais",
  authors: [
    {
      name: "Marcos Henrique Marcarini Junior",
    },
  ],
  openGraph: {
    title: "Henrique Tavares e Priscila Thomaz",
    description: "Juntos a OAB Pode Mais",
    url: "https://aoabpodemais.com.br",
    siteName: "Henrique Tavares e Priscila Thomaz",
    images: [
      {
        url: "https://aoabpodemais.com.br/img/logo.png",
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
    description: "Juntos a OAB Pode Mais",
    images: [
      {
        url: "https://aoabpodemais.com.br/img/logo.png",
        alt: "Henrique Tavares e Priscila Thomaz",
        width: 1200,
        height: 630,
      },
    ],
  },
  themeColor: "rgba(157, 251, 1, 100)", // Cor para barra do navegador em dispositivos móveis.
  viewport: "width=device-width, initial-scale=1.0", // Para responsividade.
  robots: "index, follow", // Para os bots de busca indexarem.
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
