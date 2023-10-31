import { Route, Routes } from "react-router-dom"
import { NotFoundPage } from "../pages/NotFound"

import { LandingPage } from "../pages/LandingPage"
import { HomePage } from "../pages/Home"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"


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