import { Route, Routes } from "react-router-dom"
import { NotFoundPage } from "../pages/NotFound"

import { LandingPage } from "../pages/LandingPage";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { useEffect, useState } from "react";
import { api } from "../services/api";


export const RoutesMain = () => {
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
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LandingPage moviesList={moviesList} setMoviesList={setMoviesList}/>} />
            <Route path="/home" element={<HomePage moviesList={moviesList} setMoviesList={setMoviesList}/>} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    )
}