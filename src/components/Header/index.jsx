import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/kenziemovie.svg";
import styles from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
    const {user} = useContext(UserContext)
    const navigate = useNavigate();

    const handleClick = () => {
        user ? navigate("/home") : navigate("/login")
    }

    return (
        <>
            <header className={styles.header}>
                <div className={styles.divHeader}>
                     <img src={Logo} alt="Kenzie Movie icon" />
                    <div className={styles.divNav}>
                        <Link className="menuItem" to={"/register"}><span >Cadastre-se</span></Link>

                        <button className={styles.buttonLogin} onClick={handleClick}>Entrar</button>
                    </div>
                </div>
            </header>
        </>
    )
}