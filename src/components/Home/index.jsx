<<<<<<< HEAD
import { useContext, useState } from "react";
=======
import { useContext, useEffect, useState } from "react";
>>>>>>> d84f98f8c544c1525ddb82d73e0fb1263c7f3591
import kenzieMovieIcon from "../../assets/kenziemovie.svg";
import Style from "./style.module.scss";
import { HomeList } from "./HomeList";
import { FiStar } from "react-icons/fi";
import { HomeCard } from "./HomeCard";
import { Footer } from "../Footer";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { UserContext } from "../../providers/UserContext";
import { MovieContext } from "../../providers/MovieContext";

export const Home = ({moviesById }) => {
=======
import { MovieContext } from "../../providers/MovieContext";

export const Home = () => {
    const { getMovie, currentMovie, currentMovieReviews } = useContext(MovieContext);
>>>>>>> d84f98f8c544c1525ddb82d73e0fb1263c7f3591

    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext);
    const { moviesList } = useContext(MovieContext);

    // console.log(moviesList);


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
            {currentMovie &&
                <div className={Style.internalPage} >
                    <header style={{
                        backgroundImage: `url(${currentMovie.image})`,
                        height: "39.9375rem",
                        width: "100%",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                        <div>
                            <div>
<<<<<<< HEAD
                                <div>
                                    <p className={`buttonSmall round`}>{user?.name.at(0)}</p>
                                    <h3>{user?.name}</h3>
                                </div>
                                <button className="title2" type="submit" onClick={() => logout()}>Sair</button>
=======
                                <p className={`buttonSmall round`}>J</p>
                                {/* <h3>{user?.name}</h3> */}
                                <h3 className="menuItem">José da Silva</h3>
>>>>>>> d84f98f8c544c1525ddb82d73e0fb1263c7f3591
                            </div>
                            <button className="title2" type="submit" onClick={handleClick}>Sair</button>
                        </div>

                    </header>
                    <main>
                        <section className={`${Style.principalAvaliation}`} >
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

<<<<<<< HEAD
                        <section className={`${Style.listAvaliation}`}>
                            <div>
                                <h2 className={`title1`}>Avaliações</h2>
                                {user ? <button onClick={() => setIsVisibleCreate(true)} className={`buttonMedium`}> <FiStar color="var(--grey-2)" />Avaliar</button>: null} 
                            </div> 
                            <HomeCard />
=======
                            </div>
                            <div>
                                <p className={`paragraph alignRight`}>{currentMovie.duration}m</p>

                                <p className={`title1-mobileB`}><FiStar color="var(--yellow)" /> 5.0</p>

                            </div>

                            <HomeCard avaliationList={avaliationList} setIsVisibleCreate={setIsVisibleCreate} isVisibleCreate={isVisibleCreate} isVisibleEdit={isVisibleEdit} setIsVisibleEdit={setIsVisibleEdit} />
>>>>>>> d84f98f8c544c1525ddb82d73e0fb1263c7f3591
                            <HomeList />
                        </section>
                    </main>
                </div>
<<<<<<< HEAD
            )}
=======
            }

>>>>>>> d84f98f8c544c1525ddb82d73e0fb1263c7f3591
            <Footer />
        </section >
    )
}