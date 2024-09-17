"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const NavBarDesktop = () => {
  return (
    // Menu mobile en utilisant la librairie de NextUI
    <Navbar isBordered className="bg-white">
      <NavbarBrand>
        <Link aria-label="Page d'accueil" href="/">
          <p className="font-bold text-inherit">JG</p>
        </Link>
      </NavbarBrand>
      <NavbarItem>
        <Link aria-label="Page mes services" color="foreground" href="/#service">
          Services
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link aria-label="Page vers mes projets" href="/#MesProjets" color="foreground">
          Mes projets
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link aria-label="Page sur mes expériences" className="grow-0" href="/#Experience" color="foreground">
          Experience
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link aria-label="Page à propos de moi" color="foreground" href="/#APropos">
          À propos
        </Link>
      </NavbarItem>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="colorSecondary text-white grow-0"
            href="#Contact"
            variant="flat"
            aria-label="Contactez-moi via le formulaire de contact"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBarDesktop;
