import { useState, useEffect } from 'react';
import { ProyectoArraySchema, type Proyecto } from '../types';
import datosCrudos from '../data/projects.json';

export const useProjects = () => {
  const [projects, setProjects] = useState<Proyecto[]>([]);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const fetchProjects = async () => {
      try {
        const datosValidados = ProyectoArraySchema.parse(datosCrudos);
        setProjects(datosValidados);
      } catch (err) {
        console.error('Error al validar los datos de los proyectos:', err);
        setError('Error al cargar los proyectos. Por favor, inténtalo de nuevo más tarde.');
      }
    };

    fetchProjects();
  }, []);

  return { projects, error, isLoading: !error && projects.length === 0 };
};