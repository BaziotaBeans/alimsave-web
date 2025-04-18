import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Isso não parece um endereço de e-mail. Por favor, tente novamente."),
  password: z
    .string()
    .min(6, "Por favor, introduza a sua palavra-passe. A senha deve ter pelo menos 6 caracteres."),
});

export type LoginFormData = z.infer<typeof loginSchema>;
