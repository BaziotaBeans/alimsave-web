import { LoginForm } from "@/features/auth/components/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 transition-all duration-300">
      <div className="min-h-screen bg-green hidden md:flex px-4 md:px-0 flex-col items-center justify-center">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={200} height={100} />
          <p className="text-sm text-white">© Alimentar sem desperdiçar</p>
        </Link>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col mx-auto max-w-sm w-full px-4 sm:px-0">
          <h2 className="text-2xl font-semibold mb-6 text-zinc-700">Faça login na sua conta</h2>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
