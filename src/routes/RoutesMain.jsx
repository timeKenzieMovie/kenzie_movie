import { Route, Routes } from "react-router-dom"
import { NotFoundPage } from "../pages/NotFound"
import { LoginPage } from "../pages/Login"
import { RegisterPage } from "../pages/Register"
import { LandingPage } from "../pages/LandingPage"
import { HomePage } from "../pages/Home"


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    )
}