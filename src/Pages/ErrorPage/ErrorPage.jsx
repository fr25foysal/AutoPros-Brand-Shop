import { useContext } from "react";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { useProvider } from "../../Provider/UniProvider/UniProvider";

const ErrorPage = () => {
    
    const {dark} = useContext(useProvider)
    return (
        <div  className={`font-poppins ${dark && 'dark'}`}>
            <NavBar></NavBar>
            <div className="w-full bg-second-dark-bg grid h-screen content-center">
                <h2 className="font-bold text-yellow text-7xl  text-center">Something Went Wrong...</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;