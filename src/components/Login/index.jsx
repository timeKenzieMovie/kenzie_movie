import { FormLogin } from "../FormLogin"
import styles from "./style.module.scss"

export const Login = () => {
    return (
        <section>
            <header>
                <div>
                    <p className={styles.logo}>kenziemovie</p>
                    <div>
                        <span>Cadastre-se</span>
                        <button>Entrar</button>
                    </div>
                </div>
            </header>
            <main>
                <FormLogin />
                <hr className={styles.hr} />
            </main>
            <footer>
                <h3>Todos os direitos reservados - Kenzie Academy Brasil</h3>
            </footer>
        </section>
    )
}
