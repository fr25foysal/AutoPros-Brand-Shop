import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import { useContext } from "react";
import { useProvider } from "../../Provider/UniProvider/UniProvider";
import Footer from "../../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    const {dark} = useContext(useProvider)
console.log(dark);
    return (
        <div className={`font-poppins ${dark && 'dark'}`}>
            
            <NavBar></NavBar>
            {/* <h2 className="w-50 h-20 bg-yellow dark:bg-dark-bg"></h2> */}
            
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;