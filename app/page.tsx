"use client";

import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Sections } from "./_components/Sections";
import { NoticePatient } from "./_components/NoticePatient";
import { Spacing } from "./Spacing";
import { QuiJeSuis } from "./_components/QuiJeSuis";
import { Contacts } from "./_components/Contacts";
import { Magazine } from "./_components/Magazine";

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

      <Sections />

      <Spacing />

      <NoticePatient />

      <Spacing />

      <QuiJeSuis />

      <Spacing />

      <Contacts />
    </main>
  );
}
