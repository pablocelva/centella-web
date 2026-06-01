import { z } from "zod";

// Definir el esquema de validación para un proyecto
export const ProyectoSchema = z.object({
  id: z.string().uuid("El ID debe ser un UUID válido"),
  title: z.string().min(3, "El título es obligatorio"),
  description: z.string().min(10, "La descripción es obligatoria"),
  fechaLanzamiento: z.string().date("Debe ser una fecha válida"),
  tags: z.array(z.string()),
  portadaUrl: z.string().url("La URL de la imagen debe ser válida"),
  links: z.object({
    spotify: z.string().url("La URL de Spotify debe ser válida").optional(),
    appleMusic: z.string().url("La URL de Apple Music debe ser válida").optional(),
    youtube: z.string().url("La URL de YouTube debe ser válida").optional(),
    soundcloud: z.string().url("La URL de SoundCloud debe ser válida").optional(),
  }),
});
// Inferir el tipo TypeScript a partir del esquema Zod
export type Proyecto = z.infer<typeof ProyectoSchema>;

// Definir un esquema para un array de proyectos
export const ProyectoArraySchema = z.array(ProyectoSchema);
export type ProyectoArray = z.infer<typeof ProyectoArraySchema>;