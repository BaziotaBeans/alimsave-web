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
import { PasswordInput } from "@/components/ui/password-input";
import Link from "next/link";
import { AUTH_PAGE_ANIMATION } from "@/utils/animations";
import { SignupFormData, signupSchema } from "../validators/signup";

export function SignUpForm() {
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });

  function onSubmit(data: SignupFormData) {
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
            name="fullname"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nome completo *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o nome completo"
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
          custom={0}
          initial="hidden"
          animate="visible"
          variants={AUTH_PAGE_ANIMATION.formItemVariants}
        >
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Telefone *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite o número de telefone"
                    type="number"
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
          custom={0}
          initial="hidden"
          animate="visible"
          variants={AUTH_PAGE_ANIMATION.formItemVariants}
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Senha *</FormLabel>
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
          custom={0}
          initial="hidden"
          animate="visible"
          variants={AUTH_PAGE_ANIMATION.formItemVariants}
        >
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Confirmar senha *</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder="Confirme a senha"
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
            Criar conta
          </Button>
        </motion.div>

        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={AUTH_PAGE_ANIMATION.formItemVariants}
          className="text-zinc-600 text-sm text-center mt-4"
        >
          Já possui uma conta?{" "}
          <Link
            href="/login"
            className="underline text-green hover:decoration-wavy transition-all duration-300"
          >
            Entrar
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
