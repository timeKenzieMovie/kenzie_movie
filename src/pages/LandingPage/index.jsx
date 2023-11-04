import styles from "./style.module.scss";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MovieRoll } from "../../components/MovieRoll";


// Home
<<<<<<< HEAD
export const LandingPage = () => {
=======
export const LandingPage = ({moviesList }) => {
>>>>>>> d84f98f8c544c1525ddb82d73e0fb1263c7f3591


    return (
        <div className={styles.landingpage}>
            <Header />
<<<<<<< HEAD
            <MovieRoll />
=======
            <MovieRoll moviesList={moviesList} />
>>>>>>> d84f98f8c544c1525ddb82d73e0fb1263c7f3591
            <Footer />
        </div>
    )
}