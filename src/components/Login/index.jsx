import { Link } from "react-router-dom"
import { FormLogin } from "../FormLogin"
import styles from "./style.module.scss"

export const Login = () => {
    return (
        <section className={styles.login}>
            <div className={styles.pageLogin}>
                <header className={styles.header}>
                    <div className={styles.divHeader}>
                        <p className={styles.logo}>kenziemovie</p>
                        <div className={styles.divNav}>
                            <Link className="menuItem" to={"/register"}><span >Cadastre-se</span></Link>

                            <button className={styles.buttonLogin}>Entrar</button>
                        </div>
                    </div>
                </header>
                <main className={styles.main}>
                    <FormLogin />
                </main>
            </div>
            <hr className={styles.hr} />
            <footer className={styles.footer}>
                <h3 className="title1-mobileB center">Todos os direitos reservados - Kenzie Academy Brasil</h3>
            </footer>
        </section>
    )
}
