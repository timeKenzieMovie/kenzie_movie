import { Route, Routes } from "react-router-dom"
import { NotFoundPage } from "../pages/NotFound"

import { LandingPage } from "../pages/LandingPage"
import { HomePage } from "../pages/Home"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"


export const RoutesMain = () => {
    const { moviesList, getMovies } = useContext(MovieContext);

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LandingPage moviesList={moviesList} />} />
            <Route path="/home" element={<HomePage moviesList={moviesList} />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    )
}