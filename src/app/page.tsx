import { Header } from "@/components/Header";
import { Footer } from "@/components/shared/Footer";
import { About } from "@/features/home/components/About";
import { FrequentlyAskedQuestions } from "@/features/home/components/FrequentlyAskedQuestions";
import { Hero } from "@/features/home/components/Hero";
import { HowDoesItWord } from "@/features/home/components/HowDoesItWork";
import { SurpriseBags } from "@/features/home/components/SurpriseBags";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <About />
      <SurpriseBags />
      <HowDoesItWord />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  );
}
