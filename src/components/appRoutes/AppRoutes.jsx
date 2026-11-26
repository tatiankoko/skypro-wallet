import {Navigate, Route, Routes} from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx";
import AuthPage from "../../pages/AuthPage.jsx";
import MainPage from "../../pages/MainPage.jsx";
import MyCostsPage from "../../pages/MyCostsPage.jsx";
import CostAnalysisPage from "../../pages/CostAnalysisPage.jsx";
import {useAuth} from "../../context/AuthContext.jsx";

function RootRedirect() {
    const {isAuth} = useAuth();

    return <Navigate to={isAuth ? "/costs/my" : "/auth"} replace />;
}

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} >
                <Route index element={<RootRedirect />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/costs/my" element={<MyCostsPage />} />
                    <Route path="/costs/analysis" element={<CostAnalysisPage />} />
                </Route>
                {/* Страница входа и регистрации*/}
                <Route path="/auth" element={<AuthPage />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;