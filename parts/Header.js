import Link from 'next/link';
import styles from '../styles/Header.module.sass';

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <nav className={styles.menu}>
                <Link href="/">
                    <a>Inicio</a>
                </Link>
                <Link href="/">
                    <a>Archivo</a>
                </Link>
            </nav>
        </header>
    )
}

export default Header;