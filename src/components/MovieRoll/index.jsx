import styles from "./style.module.scss";
import { Movie } from "./Movie";
import { TopMovie } from "./TopMovie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../../services/api";

export const MovieRoll = ({ moviesList, setMoviesList }) => {

  const navigate = useNavigate();

  console.log(moviesList);

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
    // useEffect(() => {
    //   const getMoviesById = async () => {
    //     try {
    //       const { data } = await api.get(`/movies/${moviesList.id}?_embed=reviews`);
    //       console.log(data);
    //       setMoviesList(data);
    //       navigate("/home")
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    //   getMoviesById();
    // }, []);
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