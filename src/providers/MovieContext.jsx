import { createContext, useState } from "react";
import { api } from "../services/api";

export const MovieContext = createContext({});

export const MovieProvider = ({ children }) => {
  const [ moviesList, setMoviesList ] = useState([]);
  const [ currentMovie, setCurrentMovie ] = useState(null);
  const [ currentMovieReviews, setCurrentMovieReviews ] = useState([]);

  const getMovies = async () => {
    try {
        const { data } = await api.get("movies?_embed=reviews");
        setMoviesList(data);
    } catch (error) {
        console.error(error.message);
    }
  }

  const getMovie = async movieId => {
    try {
      const { data } = await api.get(`movies/${movieId}?_embed=reviews`);
      setCurrentMovie(data);
      setCurrentMovieReviews(data.reviews);
    } catch (error) {
      console.error(error.message);
    }
  }

  const createReview = async review => {
    let result = false;
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const { data } = await api.post("reviews", review, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCurrentMovieReviews(...currentMovieReviews, data);
        result = true;
      } catch (error) {
        console.error(error.message);
      }
    }
    return result;
  }

  const editReview = async editedReview => {
    let result = false;
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        await api.put(`reviews/${editedReview.id}`, editedReview, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCurrentMovieReviews(
          currentMovieReviews.map(review => review.id === editedReview.id ? editedReview : review));
        result = true;
      } catch (error) {
        console.error(error.message);
      }
    }
    return result;
  }

  const deleteReview = async reviewId => {
    let result = false;
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        await api.delete(`reviews/${reviewId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCurrentMovieReviews(currentMovieReviews.filter(review => review.id !== reviewId));
        result = true;
      } catch (error) {
        console.error(error.message);
      }
    }
    return result;
  }

  return (
    <MovieContext.Provider value={({ moviesList, getMovies, currentMovie, getMovie, currentMovieReviews, createReview, editReview, deleteReview })}>
      {children}
    </MovieContext.Provider>
  );
}