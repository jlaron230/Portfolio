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
        <Link href="/">
          <p className="font-bold text-inherit">JR</p>
        </Link>
      </NavbarBrand>
      <NavbarItem>
        <Link color="foreground" href="/#service">
          Services
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="/#MesProjets" color="foreground">
          Mes projets
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link className="grow-0" href="/#Experience" color="foreground">
          Experience
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="/#APropos">
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
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBarDesktop;
