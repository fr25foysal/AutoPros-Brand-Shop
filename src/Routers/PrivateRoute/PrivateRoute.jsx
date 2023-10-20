import { useContext } from "react";
import { useProvider } from "../../Provider/UniProvider/UniProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(useProvider)
    return (
        user ? children : <Navigate to={'/sign-in'}></Navigate>
    );
};

export default PrivateRoute;