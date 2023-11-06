import { useContext, useEffect } from "react";
import kenzieMovieIcon from "../../assets/kenziemovie.svg";
import Style from "./style.module.scss";
import { HomeList } from "./HomeList";
import { FiStar } from "react-icons/fi";
import { HomeCard } from "./HomeCard";
import { Footer } from "../Footer";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { MovieContext } from "../../providers/MovieContext";

export const Home = () => {
    const { getMovie, currentMovie, currentMovieReviews, moviesList } = useContext(MovieContext);

    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext);

    // console.log(moviesList);


    useEffect(() => {
        const movieId = localStorage.getItem("@kenziemovie-CurrentMovie");
        getMovie(movieId);
    }, []);

    // console.log(currentMovie);

    // const rating = moviesList.map(movie => {
    //     movie.reviews.id.length > 0 ?
    //         movie.reviews.reduce((total, value) => total + value.score, 0) / movie.reviews.id.length :
    //         5;
    // })
    // console.log(rating);

    return (
        <section>
            {/* {currentMovie ? */}
            <div className={Style.internalPage} >
                <header
                // ****************************
                // Essa parte está quebrando o código
                // ****************************
                // style={{
                //     backgroundImage: `url(${currentMovie.image})`,
                //     height: "39.9375rem",
                //     width: "100%",
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'center',
                //     backgroundRepeat: 'no-repeat',
                // }}
                >
                    {user ?
                        <div>
                            <div>
                                <p className={`buttonSmall round`}>{user.name.at(0)}</p>
                                <h3>{user.name}</h3>
                            </div>
                            <button className="title2" type="submit" onClick={() => logout()}>Sair</button>
                        </div>
                        : null}

                </header>
                <main>
                    <section className={`${Style.principalAvaliation}`} >
                        {/* <div className={`${Style.infoHeader}`}>
                                <div className={`${Style.text}`}>
                                    <p className={`buttonSmall`}>{currentMovie.type}</p>
                                    <p className={`paragraph alignRight`}>{currentMovie.duration}</p>
                                </div>
                                <div className={Style.text2}>
                                    <h2 className={`title1`}>{currentMovie.name}</h2>
                                    <p className={`title1-mobileB center`}><FiStar color="var(--yellow)" /> 5.0</p>
                                </div>
                            </div>
                            <div className={`${Style.infoAvaliation}`}>
                                <p className={`paragraph alignLeft`}>{currentMovie.synopsis}</p>
                            </div>
                            <div>
                                <p className={`paragraph alignRight`}>{currentMovie.duration}</p>
                                <p className={`title1-mobileB`}><FiStar color="var(--yellow)" /> 5.0</p>
                            </div> */}

                        <HomeCard />
                        <HomeList />
                    </section>
                </main>
            </div>
                {/* // : null} */}

            <Footer />
        </section >
    )
}