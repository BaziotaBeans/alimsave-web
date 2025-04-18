import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-white">
      <div className="flex flex-col min-h-screen bg-orange relative z-[2]">
        {/* Seção principal */}
        <main className="flex-1  flex flex-col items-center justify-center px-3 sm:px-4 py-0 sm:py-12">
          <div className="w-full sm:w-[80%] mx-auto pt-10 sm:pt-0">
            <h1 className="text-3xl text-center sm:text-left sm:text-4xl md:text-5xl font-extrabold font-montserrat text-white mb-16">
              Fique Atualizado
            </h1>

            <form className="w-full mb-24">
              <div className="flex flex-col md:flex-row items-center bg-white rounded-[20px] md:rounded-full p-2">
                <input
                  type="email"
                  placeholder="Teu endereço email, por favor"
                  className="flex-1 px-6 py-6 text-base sm:text-lg text-green font-bold bg-transparent border-none focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="text-base sm:text-xl mt-2 md:mt-0 w-full md:w-auto p-2 md:px-8 md:py-6 bg-green hover:bg-green-dark text-white cursor-pointer font-bold font-montserrat rounded-[20px] md:rounded-full transition-colors"
                >
                  Inscreva-me!
                </button>
              </div>
            </form>

            {/* Logo */}
            <div className="flex justify-center mb-24">
              <Image
                src="/images/logo-big.png"
                alt="logo"
                width={178}
                height={42}
                className={cn("max-w-[410px] w-full object-cover transition-all duration-300")}
                quality={100}
              />
            </div>
          </div>
        </main>

        {/* Footer */}
        <div className="py-8 px-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between text-white">
            <div className="mb-4 md:mb-0 font-bold text-xl">AlimSave</div>
            <div className="mb-4 md:mb-0 font-bold text-xl">Precia de ajuda?</div>
            <div className="mb-4 md:mb-0 font-bold text-xl">Jurídico</div>
            <div className="font-bold text-xl">Social</div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white z-[1] w-full">
        <div className="flex flex-col pt-16 gap-20 md:gap-4 w-[80%] mx-auto justify-between md:min-h-[95vh]">
          <ul className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <li>
              <Link className="text-sm text-green transition-all hover:text-green-dark" href="">
                Politicas de Privacidade
              </Link>
            </li>
            <li>
              <Link className="text-sm text-green transition-all hover:text-green-dark" href="">
                Politicas de Cookie
              </Link>
            </li>
            <li>
              <Link className="text-sm text-green transition-all hover:text-green-dark" href="">
                Termos & Condições
              </Link>
            </li>
            <li>
              <Link className="text-sm text-green transition-all hover:text-green-dark" href="">
                Fontes de desperdício de alimentos
              </Link>
            </li>
          </ul>

          <h1 className="text-xl sm:text-2xl font-extrabold font-montserrat text-green text-center">
            © AlimSave Inc. 2025. Todos os direitos reservados.
          </h1>

          <Image
            src="/images/big-food.png"
            alt="big food"
            width={802}
            height={523}
            className="object-cover max-w-[800px] w-full h-full mx-auto"
          />
        </div>
      </div>
    </footer>
  );
}
