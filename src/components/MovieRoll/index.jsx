import styles from "./style.module.scss";
import { Movie } from "./Movie";
import { TopMovie } from "./TopMovie";
<<<<<<< HEAD
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
  
=======
import { useContext, useEffect } from "react";
import { MovieContext } from "../../providers/MovieContext";

export const MovieRoll = () => {
  const { moviesList, getMovies } = useContext(MovieContext);

  useEffect(() => {
    getMovies();
  }, []);


>>>>>>> d84f98f8c544c1525ddb82d73e0fb1263c7f3591
  return (
    <>
      {moviesList.length > 0 && <TopMovie movie={moviesList[0]} />}
      <ul className={styles.movielist}>
        {moviesList.slice(1).map(movie => <Movie key={movie.id} movie={movie} />)}
      </ul>
    </>
  );
}