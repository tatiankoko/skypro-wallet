import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../../context/AuthContext.jsx";

function PrivateRoute() {
    const isAuth = useAuth();

    return isAuth ? <Outlet /> : <Navigate to="/auth" />;
}

export default PrivateRoute;