import { SearchEstablishment } from "@/components/SearchEstablishment";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

export function Hero() {
  return (
    <section className="bg-blue min-h-dvh">
      <MaxWidthWrapper className="py-16">
        <div className="flex items-center justify-between gap-2">
          <h1 className="font-montserrat font-extrabold text-6xl text-white">
            Você está morrendo de fome?
          </h1>

          <SearchEstablishment />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
