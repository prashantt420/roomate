
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/landing/hero";
import ProblemSection from "@/components/landing/problem-section";
import DiscoverySection from "@/components/landing/discovery-section";
import GroupSection from "@/components/landing/group-section";
import HomeSection from "@/components/landing/home-section";
import FooterSection from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <DiscoverySection />
      <GroupSection />
      <FooterSection />
    </main>
  );
}
