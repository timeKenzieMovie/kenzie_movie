import { useEffect, useState } from "react";
import { Home } from "../../components/Home";
import { api } from "../../services/api";


// Página interna com a lógica para estar logado ou não
export const HomePage = ({ moviesList, setMoviesList }) => {

//   
  
//   useEffect(() => {
//     const getMoviesById = async () => {
//       try {
//         const { data } = await api.get(`/movies/${moviesList.id}?_embed=reviews`);
//         console.log(data);
//         setMoviesList(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     getMoviesById();
//   }, []);

  return (
    <>
      <Home moviesList={moviesList} />
    </>
  )
}