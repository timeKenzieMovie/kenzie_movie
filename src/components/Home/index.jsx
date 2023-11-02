import { useState } from "react";
import kenzieMovieIcon from "../../assets/kenziemovie.svg";
import Style from "./style.module.scss";
import { HomeList } from "./HomeList";
import { FiStar } from "react-icons/fi";
import { HomeCard } from "./HomeCard";
import { Footer } from "../Footer";
import { useNavigate } from "react-router-dom";

export const Home = ({ moviesList, moviesById }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const [avaliationList, setAvaliationList] = useState([]);

    const [isVisibleCreate, setIsVisibleCreate] = useState(false);

    const [isVisibleEdit, setIsVisibleEdit] = useState(false);
    // console.log(moviesList);

    const handleClick = () => {
        navigate('/')
    }

    // const rating = moviesList.map(movie => {
    //     movie.reviews.id.length > 0 ?
    //         movie.reviews.reduce((total, value) => total + value.score, 0) / movie.reviews.id.length :
    //         5;
    // })
    // console.log(rating);

    return (
        <section className={Style.internalPage} >
            {moviesList.map(movie =>
                <div key={movie.id}>
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
                        <section className={`${Style.principalAvaliation}`} >
                            <div className={`${Style.infoHeader}`}>
                                <div className={`${Style.text}`}>
                                    <p className={`buttonSmall`}>{movie.type}</p>
                                    <h2 className={`title1`}>{movie.name}</h2>
                                </div>
                                <div>
                                    <p className={`paragraph alignRight`}>{movie.duration}m</p>

                                    <p className={`title1-mobileB`}><FiStar color="var(--yellow)" /> 5.0</p>

                                </div>
                            </div>
                            <div className={`${Style.infoAvaliation}`}>
                                <p className={`paragraph alignLeft`}>{movie.synopsis}</p>
                            </div>
                        </section>

                        <section className={`${Style.listAvaliation}`}>
                            <div>
                                <h2 className={`title1`}>Avaliações</h2>
                                {/* {user ?  */}
                                <button onClick={() => setIsVisibleCreate(true)} className={`buttonMedium`}> <FiStar color="var(--grey-2)" />Avaliar</button>
                                {/* : null} */}
                            </div>
                            <HomeCard avaliationList={avaliationList} setIsVisibleCreate={setIsVisibleCreate} isVisibleCreate={isVisibleCreate} isVisibleEdit={isVisibleEdit} setIsVisibleEdit={setIsVisibleEdit} />
                            <HomeList />
                        </section>
                    </main>
                </div>
            )}
            <Footer />

        </section>
    )



}