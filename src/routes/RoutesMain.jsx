import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFound";
import { LandingPage } from "../pages/LandingPage";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";



export const RoutesMain = () => {
<<<<<<< HEAD
    const { moviesList, getMovies, setMoviesList } = useContext(MovieContext);

    useEffect(() => {
        getMovies();
    }, []);

=======
>>>>>>> d84f98f8c544c1525ddb82d73e0fb1263c7f3591
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    )
}