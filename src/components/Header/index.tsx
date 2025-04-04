import Image from "next/image";
import Link from "next/link";
import { HeaderActions } from "./HeaderActions";

export function Header() {
  return (
    <header className="sticky top-0 z-[9999] h-20 bg-blue-dark w-full flex items-center justify-between">
      <nav className="py-4 pr-8 pl-[10%]">
        <ul className="flex items-center gap-4 text-white font-semibold">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Quem somos</Link>
          </li>
          <li>
            <Link href="#">Contact-nos</Link>
          </li>
        </ul>
      </nav>

      <Link href="/" aria-label="alimsave" className="absolute left-1/2 transform -translate-x-1/2">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={178}
          height={42}
          className="max-w-[178px] w-full object-cover"
        />
      </Link>

      <HeaderActions />
    </header>
  );
}
