import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-white">
      <div className="flex flex-col pt-16 gap-4 w-[80%] mx-auto justify-between min-h-dvh">
        <ul className="flex items-center justify-between">
          <li>
            <Link className="text-sm text-blue" href="">
              Politicas de Privacidade
            </Link>
          </li>
          <li>
            <Link className="text-sm text-blue" href="">
              Politicas de Cookie
            </Link>
          </li>
          <li>
            <Link className="text-sm text-blue" href="">
              Termos & Condições
            </Link>
          </li>
          <li>
            <Link className="text-sm text-blue" href="">
              Fontes de desperdício de alimentos
            </Link>
          </li>
        </ul>

        <h1 className="text-2xl font-extrabold font-montserrat text-blue text-center">
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
    </footer>
  );
}
