import styles from '../styles/Footer.module.sass';

const Footer = () => {
    return (
        <footer className={styles.mainFooter}>
            <div className={styles.credit}>
                <p>
                    —クラブ—<br />
                    the NICE MUSIC CLUB
                </p>
                <p>
                    REVIEWS EN ESPAÑOL
                </p>
            </div>
        </footer>
    )
}

export default Footer;