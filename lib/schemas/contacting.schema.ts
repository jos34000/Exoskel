import { z } from "zod";

export const contactSchema = {
  email: z.string().email("L'email n'est pas valide"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
  reason: z.enum(["emploi", "collaboration", "autre"], {
    required_error: "Veuillez sélectionner une raison",
  }),
};

export const contactStepSchema = {
  step1: z.object({
    message: contactSchema.message,
  }),
  step2: z.object({
    reason: contactSchema.reason,
  }),
  step3: z.object({
    email: contactSchema.email,
    message: contactSchema.message,
    reason: contactSchema.reason,
  }),
};
