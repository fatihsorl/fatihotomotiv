import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <Hero />
      <AboutSection />
      <ContactSection />
      <WhatsAppFloat />
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Fatih Otomotiv · Kartal Oto Sanayi</p>
      </footer>
    </div>
  );
}
