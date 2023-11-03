import { useState } from "react";
import kenzieMovieIcon from "../../assets/kenziemovie.svg";
import Style from "./style.module.scss";
import { HomeList } from "./HomeList";
import { FiStar } from "react-icons/fi";
import { HomeCard } from "./HomeCard";
import { Footer } from "../Footer";
import { useNavigate } from "react-router-dom";

export const Home = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const [avaliationList, setAvaliationList] = useState([]);

    const [isVisibleCreate, setIsVisibleCreate] = useState(false);

    const [isVisibleEdit, setIsVisibleEdit] = useState(false);


    const handleClick = () => {
        navigate('/')
    }

    return (
        <section className={Style.internalPage}>
            <header>
                <div>
                    <img src={kenzieMovieIcon} alt="Kenzie Movie Icon" />
                    <div>
                        <div>
                            <p className={`buttonSmall round`}>J</p>
                            {/* <h3>{user?.name}</h3> */}
                            <h3 className="menuItem">José da Silva</h3>
                        </div>
                        <button className="title2" type="submit" onClick={handleClick}>Sair</button>
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
                            <p className={`paragraph alignRight`}>90m</p>

                            <p className={`title1-mobileB`}><FiStar color="var(--yellow)" /> 5.0</p>

                        </div>
                    </div>
                    <div className={`${Style.infoAvaliation}`}>
                        <p className={`paragraph alignLeft`}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
                    </div>
                </section>
                <section className={`${Style.listAvaliation}`}>
                    <div>
                        <h2 className={`title1`}>Avaliações</h2>
                        <button onClick={() => setIsVisibleCreate(true)} className={`buttonMedium`}> <FiStar color="var(--grey-2)" />Avaliar</button>
                    </div>
                    <HomeCard avaliationList={avaliationList} setIsVisibleCreate={setIsVisibleCreate} isVisibleCreate={isVisibleCreate} isVisibleEdit={isVisibleEdit} setIsVisibleEdit={setIsVisibleEdit} />
                    <HomeList />
                </section>
            </main>
            <Footer />
        </section>
    )
}