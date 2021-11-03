import Link from 'next/link';
import Image from 'next/image';
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
            <div className={styles.branding}>
                <Link href="/">
                    <a>
                        <Image
                            src="/images/nais.svg"
                            alt="Logo The Nice Music Blog"
                            width={'32px'}
                            height={'37px'}
                            // className={styles.img}
                        />
                        <p>
                            —クラブ—<br />
                            THE NICE MUSIC CLUB
                        </p>
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Header;