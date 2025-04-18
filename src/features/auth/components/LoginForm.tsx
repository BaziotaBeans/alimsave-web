"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginFormData, loginSchema } from "../validators/login";
import { PasswordInput } from "@/components/ui/password-input";
import Link from "next/link";
import { AUTH_PAGE_ANIMATION } from "@/utils/animations";

export function LoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: LoginFormData) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 md:space-y-6 flex flex-col"
      >
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={AUTH_PAGE_ANIMATION.formItemVariants}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Endereço de e-mail *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o seu e-mail"
                    {...field}
                    className="transition-all duration-300 focus:ring-2 focus:ring-green focus:border-green"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={AUTH_PAGE_ANIMATION.formItemVariants}
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Palavra-passe *</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Digite a senha"
                    {...field}
                    className="transition-all duration-300 focus:ring-2 focus:ring-green focus:border-green"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={AUTH_PAGE_ANIMATION.formItemVariants}
          className="self-end"
        >
          <Link
            href=""
            className="text-sm underline text-green hover:decoration-wavy transition-all duration-300"
          >
            Esqueceu-se da palavra-passe?
          </Link>
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={AUTH_PAGE_ANIMATION.formItemVariants}
        >
          <Button
            disabled={!form.formState.isValid}
            className="uppercase w-full transition-all duration-300 transform hover:scale-105 active:scale-95"
            type="submit"
          >
            Entrar
          </Button>
        </motion.div>

        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={AUTH_PAGE_ANIMATION.formItemVariants}
          className="text-zinc-600 text-sm text-center mt-4"
        >
          Você não tem uma conta?{" "}
          <Link
            href="/signup"
            className="underline text-green hover:decoration-wavy transition-all duration-300"
          >
            Criar conta
          </Link>
        </motion.p>

        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={AUTH_PAGE_ANIMATION.formItemVariants}
          className="text-zinc-600 text-sm text-center sm:hidden"
        >
          <Link className="text-sm underline" href="/">
            Voltar para home
          </Link>
        </motion.div>
      </form>
    </Form>
  );
}
