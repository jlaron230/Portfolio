import type { Metadata } from "next";
import "./globals.css"; // Assure-toi que ce fichier existe et est correctement configuré
import NavBarOverlay from "./components/NavBar/NavBarOverlay"; // Vérifie le chemin
import ClickScrollBar from "./components/ScrollBar/ClickScrollBar"; // Vérifie le chemin
import Footer from "./components/footer/Footer"; // Vérifie le chemin
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Mes projets est compétences en informatique dans ce portfolio"
        />
        <meta name="author" content="Jérôme Gavino" />
        <meta
          property="og:image"
          content="images/w1000-1133478AE9sXs77.jpg"
        />
        <meta
          property="og:description"
          content="Jérôme propose ses compétences en informatique et ses qualités
          de graphiste, modélisateur 3D, informaticien et ses compétences en développement informatique
          pour vos besoins"
        />
        <meta property="og:title" content="Jérôme Gavino" />
        <title>Jérôme Portfolio</title>
      </head>
      <body>
        <ClickScrollBar />
        <NavBarOverlay />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
