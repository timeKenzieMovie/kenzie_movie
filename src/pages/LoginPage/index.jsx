import { Header } from "../../components/Header";
import { FormLogin } from "../../components/forms/FormLogin";
import styles from "./style.module.scss"

export const LoginPage = () => {
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
