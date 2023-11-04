import styles from "./style.module.scss";
import { Movie } from "./Movie";
import { TopMovie } from "./TopMovie";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { api } from "../../services/api";
import { UserContext } from "../../providers/UserContext";
import { MovieContext } from "../../providers/MovieContext";

export const MovieRoll = () => {

  const navigate = useNavigate();
  const {users} = useContext(UserContext);
  const {moviesList, setMoviesList} = useContext(MovieContext);
  // console.log(moviesList);

  // useEffect(() => {
  //   const getMoviesById = async () => {
  //     try {
  //       const { data } = await api.get(`/movies/${moviesList.id}?_embed=reviews`);
  //       console.log(data);
  //       setMoviesList(data);

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getMoviesById();
  // }, []);

  const handleClick = () => {
    // getMovie(moviesList.id)
    navigate("/home")
  }
  // console.log(handleClick);
  
  return (
    <>
      {moviesList.length > 0 && <TopMovie movie={moviesList[0]} handleClick={handleClick} />}
      <ul className={styles.movielist}>
        {moviesList.slice(1).map(movie => <Movie key={movie.id} movie={movie} handleClick={handleClick} />)}
      </ul>
    </>
  );
}