import { Link } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to={PATHS.HOME}>Home</Link>
            <Link to={PATHS.SERVICIOS}>Servicios</Link>
            <Link to={PATHS.PROYECTOS}>Proyectos</Link>
            <Link to={PATHS.ABOUT}>About</Link>
            <Link to={PATHS.CONTACTO}>Contacto</Link>
        </nav>
    );
};

export default Navbar;