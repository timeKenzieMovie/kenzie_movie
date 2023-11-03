import styles from "./style.module.scss";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MovieRoll } from "../../components/MovieRoll";


// Home
export const LandingPage = ({moviesList }) => {


    return (
        <div className={styles.landingpage}>
            <Header />
            <MovieRoll moviesList={moviesList} />
            <Footer />
        </div>
    )
}