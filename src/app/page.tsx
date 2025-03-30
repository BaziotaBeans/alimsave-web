import { Header } from "@/components/Header";
import { Hero } from "@/features/home/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
    </main>
  );
}
