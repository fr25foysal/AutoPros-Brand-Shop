import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import { useContext } from "react";
import { useProvider } from "../../Provider/UniProvider/UniProvider";

const MainLayout = () => {
    const {dark} = useContext(useProvider)
console.log(dark);
    return (
        <div className={`font-poppins ${dark && 'dark'}`}>
            
            <NavBar></NavBar>
            {/* <h2 className="w-50 h-20 bg-yellow dark:bg-dark-bg"></h2> */}
            <h2>Main ``</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;