import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./PrivateRoute.jsx";
import AuthPage from "../../pages/AuthPage.jsx";
import MainPage from "../../pages/MainPage.jsx";
import MyCostsPage from "../../pages/MyCostsPage.jsx";
import CostAnalysisPage from "../../pages/CostAnalysisPage.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} >
                <Route element={<PrivateRoute />}>
                    <Route path="/costs/my" element={<MyCostsPage />} />
                    <Route path="/costs/analysis" element={<CostAnalysisPage />} />
                </Route>
                {/* Страница входа и регистрации*/}
                <Route path="/auth" element={<AuthPage />} />
            </Route>
        </Routes>
    );

    /*return (
        <Routes>
            <Route element={<PrivateRoute />}>
                {/!* Главная страница *!/}
                <Route path="/" element={<MainPage />} >
                    <Route path="/costs/my" element={<MyCostsPage />} />
                    <Route path="/costs/analysis" element={<CostAnalysisPage />} />
                </Route>
            </Route>
            {/!* Страница входа и регистрации*!/}
            <Route path="/auth" element={<AuthPage />} />
        </Routes>
    );*/
}

export default AppRoutes;