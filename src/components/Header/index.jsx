import { Link } from "react-router-dom"
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.divHeader}>
                    <p className={styles.logo}>kenziemovie</p>
                    <div className={styles.divNav}>
                        <Link className="menuItem" to={"/register"}><span >Cadastre-se</span></Link>

                        <button className={styles.buttonLogin}>Entrar</button>
                    </div>
                </div>
            </header>
        </>
    )
}