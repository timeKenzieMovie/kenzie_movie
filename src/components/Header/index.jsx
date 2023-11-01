import { Link, useNavigate } from "react-router-dom"
import styles from "./style.module.scss"

export const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        //Criar uma lógica para que, se o token de usuário existir ele navega para home
        navigate("/home")
        // caso contrario, navega para pagina de login
        // navigate("/")
    }
    return (
        <>
            <header className={styles.header}>
                <div className={styles.divHeader}>
                    <p className={styles.logo}>kenziemovie</p>
                    <div className={styles.divNav}>
                        <Link className="menuItem" to={"/register"}><span >Cadastre-se</span></Link>

                        <button className={styles.buttonLogin} onClick={handleClick}>Entrar</button>
                    </div>
                </div>
            </header>
        </>
    )
}