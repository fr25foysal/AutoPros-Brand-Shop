import { useContext } from "react";
import { useProvider } from "../../Provider/UniProvider/UniProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(useProvider)

    if (loading) {
        return <div className="grid justify-center min-h-screen content-center"><span className="loading loading-dots loading-lg"></span></div>
    }
    if (user) {
       return children
    }
    return (
         <Navigate to={'/sign-in'}></Navigate>
    );
};

export default PrivateRoute;