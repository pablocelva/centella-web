import { z } from "zod";

// Definir el esquema de validación para un servicio
export const ServicioSchema = z.object({
  id: z.string().uuid("El ID debe ser un UUID válido"),
  title: z.string().min(3, "El título es obligatorio"),
  description: z.string().min(10, "La descripción es obligatoria"),
  valor: z.number().positive("El valor debe ser un número positivo"),
  moneda: z.enum(["USD", "EUR", "CLP"], "La moneda debe ser USD, EUR o CLP").default("CLP"),
  imagenUrl: z.string().url("La URL de la imagen debe ser válida"),
});

// Inferir el tipo TypeScript a partir del esquema Zod
export type Servicio = z.infer<typeof ServicioSchema>;

// Definir un esquema para un array de servicios
export const ServicioArraySchema = z.array(ServicioSchema);