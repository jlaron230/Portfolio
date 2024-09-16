"use client";
import Link from "next/link";
import Hero from "./components/HeroSection/Hero";
import "./globals.css";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import ServiceProjet from "./service_projet/ServiceProjet";
import Projet from "./projet/Projet";
import Experiences from "./experiences/Experiences";
import Apropos from "./a_propos/Apropos";
export default function Home() {
  return (
    <NextUIProvider>
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <section className="w-full p-12 mb-12">
          <ServiceProjet />
        </section>
        <section className="w-full bg-black p-12 mb-12">
          <Projet />
        </section>
        <section className="p-12 mb-12 w-full">
          <Experiences />
        </section>
        <section className="p-12 mb-12 w-full">
          <Apropos />
        </section>
      </main>
    </NextUIProvider>
  );
}
