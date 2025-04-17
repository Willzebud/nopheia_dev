"use client";

import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { TrustGad } from "./_components/TrustGad";
import { Methode } from "./_components/Methode";
import { Spacing } from "./Spacing";
import { QuiJeSuis } from "./_components/QuiJeSuis";
import { Contacts } from "./_components/Contacts";
import { Magazine } from "./_components/Magazine";
import { AvisPatients } from "./_components/AvisPatients";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing />
      {/* Conteneur des cartes */}

      <Hero />

      <Spacing />

      <Magazine />

      <Spacing />

      <TrustGad />

      <Spacing />

      <Methode />

      <AvisPatients />

      <QuiJeSuis />

      <Contacts />
    </main>
  );
}
