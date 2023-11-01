import { useState } from "react";
import kenzieMovieIcon from "../../assets/kenziemovie.svg";
import Style from "./style.module.scss";
import { HomeList } from "./HomeList";
import { FiStar } from "react-icons/fi";

export const Home = () => {
    const [user, setUser] = useState(null);
    const [isVisibleCreate, setIsVisibleCreate] = useState(false);
    const [isVisibleEdit, setIsVisibleEdit] = useState(false);


    return (
        <section className={Style.internalPage}>
            <header>
                <div>
                    <img src={kenzieMovieIcon} alt="Kenzie Movie Icon" />
                    <div>
                        <p className={`buttonSmall round`}>J</p>
                        {/* <h3>{user?.name}</h3> */}
                        <h3 className="menuItem">José da Silva</h3>
                        <button className="title2" type="submit">Sair</button>
                    </div>
                </div>
            </header>
            <main>
                <section className={`${Style.principalAvaliation}`}>
                    <div className={`${Style.infoHeader}`}>
                        <div className={`${Style.text}`}>
                            <p className={`buttonSmall`}>Ficção</p>
                            <h2 className={`title1`}>The Random Heros</h2>
                        </div>
                        <div>
                            <p className={`paragraph`}>90m</p>
                            <p className={`title1-mobileB`}><FiStar color="var(--yellow)" /> 5.0</p>
                        </div>
                    </div>
                    <div className={`${Style.infoAvaliation}`}>
                        <p className={`paragraph`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
                    </div>
                </section>
                <section className={`${Style.listAvaliation}`}>
                    <div>
                        <h2 className={`title1`}>Avaliações</h2>
                        <button className={`buttonMedium`}> <FiStar color="var(--grey-2)" />Avaliar</button>
                    </div>
                    <HomeList />
                </section>
            </main>
            <footer>
                <h3 className={`title1-mobileB`}>Todos os direitos reservados - Kenzie Academy Brasil</h3>
            </footer>
        </section>
    )
}