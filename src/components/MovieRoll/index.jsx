import styles from "./style.module.scss";
import { Movie } from "./Movie";
import { TopMovie } from "./TopMovie";
import { useNavigate } from "react-router-dom";


export const MovieRoll = ({ moviesList }) => {

  const navigate = useNavigate();

  // console.log(moviesList);

  const handleClick = () => {
    // getMovie(moviesList.id)
    navigate("/home")
  }
  console.log(handleClick);
  
  return (
    <>
      {moviesList.length > 0 && <TopMovie movie={moviesList[0]} handleClick={handleClick} />}
      <ul className={styles.movielist}>
        {moviesList.slice(1).map(movie => <Movie key={movie.id} movie={movie} handleClick={handleClick} />)}
      </ul>
    </>
  );
}