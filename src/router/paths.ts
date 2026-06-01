export const PATHS = {
  HOME: '/',
  SERVICIOS: '/servicios',
  PROYECTOS: '/proyectos',
  PROYECTO_DETALLE: (id: string) => `/proyectos/${id}`,
  ABOUT: '/about',
  CONTACTO: '/contacto',
} as const;