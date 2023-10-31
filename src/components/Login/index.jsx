import { FormLogin } from "../FormLogin"
import styles from "./style.module.scss"
import { Header } from "../Header"

export const Login = () => {
    return (
        <section className={styles.login}>
            <div className={styles.pageLogin}>
                <Header />
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
