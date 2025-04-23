"use client";

import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Spacing } from "../Spacing";
import { NotreApproche } from "./NotreApproche";
import { QuiJeSuis1 } from "./QuiJeSuis1";

export default function Home() {
  return (
    <main>
      <Header />
      <QuiJeSuis1 />
      <Spacing />
      <NotreApproche />
      <Footer />
    </main>
  );
}
