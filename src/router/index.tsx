import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PATHS } from './paths';

// Importar las páginas
import {Home} from '../pages/Home.tsx';
import {Servicios} from '../pages/Servicios.tsx';
import {Proyectos} from '../pages/Proyectos.tsx';
import {ProyectoDetalle} from '../pages/ProyectoDetalle.tsx';
import {About} from '../pages/About.tsx';
import {Contacto} from '../pages/Contacto.tsx';
import {Layout} from '../components/Layout/Layout.tsx';

const router = createBrowserRouter([
    {
        path: PATHS.HOME,
        element: <Layout children={undefined} />,
        children: [
            { index: true, element: <Home /> },
            { path: PATHS.SERVICIOS, element: <Servicios /> },
            { path: PATHS.PROYECTOS, element: <Proyectos /> },
            { path: PATHS.PROYECTO_DETALLE(':id'), element: <ProyectoDetalle /> },
            { path: PATHS.ABOUT, element: <About /> },
            { path: PATHS.CONTACTO, element: <Contacto /> },
        ],
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};