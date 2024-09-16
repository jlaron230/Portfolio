"use client"; // Indique que ce fichier utilise des fonctionnalités spécifiques au client

import { useState, useEffect } from "react";
import NavBarDesktop from "./NavBarDesktop"; // Importation d'un composant de barre de navigation pour les écrans larges
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react"; // Importation des composants de barre de navigation de la bibliothèque NextUI

const NavBarOverlay = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture du menu
  const [widthScreen, setwidthScreen] = useState(false); // État pour gérer la taille de l'écran

  // Fonction pour mettre à jour l'état en fonction de la taille de l'écran
  const handleResize = () => {
    setwidthScreen(window.innerWidth >= 1024); // Définit la taille de l'écran à partir de 1024px comme large
  };

  useEffect(() => {
    handleResize(); // Initialisation de la taille de l'écran
    window.addEventListener("resize", handleResize); // Ajout d'un écouteur d'événements pour le redimensionnement de la fenêtre

    // Nettoyage de l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Liste des éléments de menu pour les petits écrans
  const menuItems = ["Services", "Compétences", "Mes projets", "À propos"];

  return (
    <>
      {/* Affichage du composant NavBarDesktop pour les écrans larges, sinon affichage du menu overlay */}
      {widthScreen ? (
        <NavBarDesktop />
      ) : (
        <Navbar
          isBordered // Barre de navigation avec bordure
          isMenuOpen={isMenuOpen} // État d'ouverture du menu
          onMenuOpenChange={setIsMenuOpen} // Fonction pour mettre à jour l'état d'ouverture du menu
          className="bg-white" // Style de fond de la barre de navigation
        >
          {/* Contenu du navbar pour les petits écrans - bouton de basculement du menu */}
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"} // Label pour l'accessibilité
            />
          </NavbarContent>

          {/* Contenu du navbar pour les petits écrans - marque du navbar */}
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <p className="font-bold text-inherit">JR</p> {/* Nom ou logo de la marque */}
            </NavbarBrand>
          </NavbarContent>

          {/* Contenu du navbar pour les grands écrans - éléments de menu */}
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarBrand>
              <p className="font-bold text-inherit">JR</p> {/* Nom ou logo de la marque */}
            </NavbarBrand>
            <NavbarItem>
              <Link color="foreground" href="/#service">
              Services
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="/#MesProjets" aria-current="page">
              Mes projets
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/#Experience">
              Experience
              </Link>
            </NavbarItem>
          </NavbarContent>

          {/* Contenu du navbar pour les grands écrans - actions de la barre de navigation */}
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="/#APropos">À propos</Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                className="colorSecondary text-white"
                href="#Contact"
                variant="flat"
              >
                Contact
              </Button>
            </NavbarItem>
          </NavbarContent>

          {/* Menu déroulant pour les petits écrans */}
          <NavbarMenu className="bg-white flex flex-wrap">
              <NavbarMenuItem className="flex flex-wrap flex-col">
              <Link color="foreground" href="/#service">
              Services
              </Link>
              <Link href="/#MesProjets" aria-current="page">
              Mes projets
              </Link>
              <Link color="foreground" href="/#Experience">
              Experience
              </Link>
              <Link href="/#APropos">À propos</Link>
              </NavbarMenuItem>

          </NavbarMenu>
        </Navbar>
      )}
    </>
  );
};

export default NavBarOverlay;
