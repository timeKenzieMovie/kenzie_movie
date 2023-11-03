import styles from "./style.module.scss";
import { Movie } from "./Movie";
import { TopMovie } from "./TopMovie";
import { useContext, useEffect } from "react";
import { MovieContext } from "../../providers/MovieContext";

export const MovieRoll = () => {
  const { moviesList, getMovies } = useContext(MovieContext);

  useEffect(() => {
    getMovies();
  }, []);


  return (
    <>
      {moviesList.length > 0 && <TopMovie movie={moviesList[0]} />}
      <ul className={styles.movielist}>
        {moviesList.slice(1).map(movie => <Movie key={movie.id} movie={movie} />)}
      </ul>
    </>
  );
}