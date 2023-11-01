import styles from "./style.module.scss";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MovieRoll } from "../../components/MovieRoll";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

// Home
export const LandingPage = () => {
    const [ moviesList, setMoviesList ] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const { data } = await api.get("movies?_embed=reviews");
                setMoviesList(data);
            } catch (error) {
                console.error(error.message);
            }
        }
        getMovies();
    }, []);

    return (
        <div className={styles.landingpage}>
            <Header />
            <MovieRoll moviesList={moviesList} />
            <Footer />
        </div>
    )
}