import { z } from "zod";

export const signupSchema = z
  .object({
    fullname: z.string().min(3, "O nome completo deve ter pelo menos 3 caracteres."),
    email: z.string().email("Digite um e-mail válido."),
    phone: z
      .string()
      .min(9, "O telefone deve ter pelo menos 9 dígitos.")
      .regex(/^\d+$/, "O telefone deve conter apenas números."),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
    confirmPassword: z.string().min(6, "A confirmação de senha é obrigatória."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"], // Erro específico para a confirmação
  });

export type SignupFormData = z.infer<typeof signupSchema>;
