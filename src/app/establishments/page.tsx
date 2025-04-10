import { Header } from "@/components/Header";
import EstablishmentsListing from "@/features/establishments/components/EstablishmentsListing";
import { Hero } from "@/features/establishments/components/Hero";

export default function EstablishmentsPage() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <EstablishmentsListing />
    </main>
  );
}
