import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Future from "@/components/sections/Future";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <BeforeAfter />
        <Process />
        <Gallery />
        <Testimonials />
        <About />

        {/* ──────────────────────────────────────────────────
            PREPARAÇÃO PARA O FUTURO
            A secção <Future /> está desativada (devolve null).
            Estrutura pronta para: Cursos · Formação ·
            Área premium · Conteúdo exclusivo.
            Ativar em src/components/sections/Future.tsx
            (FUTURE_ENABLED = true).
           ────────────────────────────────────────────────── */}
        <Future />

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
