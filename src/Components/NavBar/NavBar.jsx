import { MdOutlineDarkMode,MdLightMode } from 'react-icons/md';
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useProvider } from "../../Provider/UniProvider/UniProvider";
import { FaUserCircle } from 'react-icons/fa';

const NavBar = () => {

    const {user,logOut,successNotify,loading} = useContext(useProvider)
   console.log(user);
    const {dark,setDark} = useContext(useProvider)
    const handleTheme=()=>{
        setDark(!dark)
    }
    
    const handleLogOut = () =>{
      logOut()
      .then(data =>{
        console.log(data)
        successNotify('User Logged Out')
      })
      .catch(e=>console.error(e))
    }

 

    const liItems = (
      <>
        <li className=" ">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "" 
              : isActive ? "dark:hover:bg-transparent border-[3.2px] py-2 rounded-none px-5 bg-yellow hover:text-[#FFF]  font-medium border-yellow ease-linear duration-200" : "dark:text-[#fff] dark:hover:text-yellow border-[3.2px] py-2 rounded-none px-5  hover:text-yellow font-medium border-yellow ease-linear duration-200"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/add-product"}
            className={({ isActive, isPending }) =>
              isPending ? "" 
              : isActive ? "dark:hover:bg-transparent border-[3.2px] py-2 rounded-none px-5 bg-yellow hover:text-[#FFF]  font-medium border-yellow ease-linear duration-200" : "dark:text-[#fff] dark:hover:text-yellow border-[3.2px] py-2 rounded-none px-5  hover:text-yellow font-medium border-yellow ease-linear duration-200"
            }
          >
            Add Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/my-cart"}
            className={({ isActive, isPending }) =>
              isPending ? "" 
              : isActive ? "dark:hover:bg-transparent border-[3.2px] py-2 rounded-none px-5 bg-yellow hover:text-[#FFF]  font-medium border-yellow ease-linear duration-200" : "dark:text-[#fff] dark:hover:text-yellow border-[3.2px] py-2 rounded-none px-5  hover:text-yellow font-medium border-yellow ease-linear duration-200"
            }
          >
            My Cart
          </NavLink>
        </li>
      </>
    );
    return (
      <div className="dark:bg-dark-bg bg-base-100 border-b-2 border-yellow">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className=" text-white lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu z-10 menu-sm dropdown-content mt-3 p-2 bg-dark-bg w-40"
              >
                {liItems}
              </ul>
            </div>
            <Link to={"/"}>
              <img src="/images/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal text-base gap-x-4">{liItems}</ul>
          </div>
          <div className="navbar-end lg:justify-end flex justify-between bg-hite md:gap-x-3">
            <div
              className="text-3xl dark:text-[#fff] transition duration-200 ease-out hover:ease-in"
              onClick={handleTheme}
            >
              {dark ? (
                <MdOutlineDarkMode></MdOutlineDarkMode>
              ) : (
                <MdLightMode></MdLightMode>
              )}
            </div>
            <div className='content-center'>
              {
              user ? (
                <div className="avatar pt-2">
                  <div className="w-10 rounded-full border-2 border-yellow ">
                    {/* <FaUserCircle></FaUserCircle> */}
                    {user?.photoURL ? <img src={user.photoURL} /> : <FaUserCircle  className='text-white text-4xl'></FaUserCircle> }
                  </div>
                </div>
              ) : (
                ""
              )
              }
            </div>

            <div>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="border-[3.2px] px-4 py-2 bg-yellow text-[#000] hover:bg-transparent hover:text-yellow font-medium border-yellow ease-linear duration-200 "
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  to={"/sign-in"}
                  className="border-[3.2px] px-4 py-2 bg-yellow text-[#000] hover:bg-transparent hover:text-yellow font-medium border-yellow ease-linear duration-200 "
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default NavBar;