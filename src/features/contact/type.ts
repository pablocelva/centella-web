import { z } from "zod";

// Definir el esquema de validación para un contacto
export const ContactoSchema = z.object({
  nombre: z.string().min(3, "El nombre es obligatorio"),
  email: z.string().email("El correo electrónico debe ser válido"),
  mensaje: z.string().min(10, "El mensaje es obligatorio"),
  presupuesto: z.number().positive("El presupuesto debe ser un número positivo").optional(),
});

// Inferir el tipo TypeScript a partir del esquema Zod
export type DatosContacto = z.infer<typeof ContactoSchema>;