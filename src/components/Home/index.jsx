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
import { Header } from "../Header";

export const Home = () => {
    const { getMovie, currentMovie, currentMovieReviews, moviesList } = useContext(MovieContext);
    const { user, logout } = useContext(UserContext);

    const navigate = useNavigate();
    

    useEffect(() => {
        const movieId = localStorage.getItem("@kenziemovie-CurrentMovie");
        getMovie(movieId);
    }, []);

    // const rating = moviesList.map(movie => {
    //     movie.reviews.id.length > 0 ?
    //         movie.reviews.reduce((total, value) => total + value.score, 0) / movie.reviews.id.length :
    //         5;
    // })
    // console.log(rating);

    return (
        <section>
            <div className={Style.internalPage} >
                <div
                    style={{
                        backgroundImage: `url(${currentMovie?.image})`,
                        height: "39.9375rem",
                        width: "100%",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Header />
                </div>
                <main>
                    <section className={`${Style.principalAvaliation}`} >
                        {currentMovie && <>
                            <div className={`${Style.infoHeader}`}>
                                <div className={`${Style.text}`}>
                                    <p className={`buttonSmall`}>{currentMovie.type}</p>
                                    <p className={`paragraph alignRight`}>{currentMovie.duration}m</p>
                                </div>
                                <div className={Style.text2}>
                                    <h2 className={`title1`}>{currentMovie.name}</h2>
                                    <p className={`title1-mobileB center`}><FiStar color="var(--yellow)" /> 5.0</p>
                                </div>
                            </div>
                            <div className={`${Style.infoAvaliation}`}>
                                <p className={`paragraph alignLeft`}>{currentMovie.synopsis}</p>
                            </div>
                            {/* <div>
                                <p className={`paragraph alignRight`}>{currentMovie.duration}</p>
                                <p className={`title1-mobileB`}><FiStar color="var(--yellow)" /> 5.0</p>
                            </div> */}
                        </>}

                        <HomeCard />
                        <HomeList />
                    </section>
                </main>
            </div>
            <Footer />
        </section >
    )
}