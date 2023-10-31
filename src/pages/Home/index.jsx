import { useState } from "react";
import { Home } from "../../components/Home";
import kenzieMovieIcon from "../../assets/kenziemovie.svg";
import Style from "./style.module.scss";

// Página interna com a lógica para estar logado ou não
export const HomePage = () => {
    const [user, setUser] = useState(null);

    return (
        <>
            <header className={Style.internalPage}>
                <div>
                    <img src={kenzieMovieIcon} alt="Kenzie Movie Icon" />
                    <div>
                        <p className={`buttonSmall`}>J</p>
                        {/* <h3>{user?.name}</h3> */}
                        <h3 className="menuItem">José da Silva</h3>
                        <button className="title2" type="submit">Sair</button>
                    </div>
                </div>
            </header>
            <main className={Style.internalPage}>
                <Home />
            </main>

        </>
    )
}