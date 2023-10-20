import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import MyCart from "../../Pages/MyCart/MyCart";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import BrandPage from "../../Pages/BrandPage/BrandPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SingleProduct from "../../Pages/SingleProduct/SingleProduct";
import UpdateProduct from "../../Pages/UpdateProduct/UpdateProduct";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=>{
            return fetch('https://autopros-backend.vercel.app/brands')
          }
        },
        {
            path : '/sign-in',
            element: <SignIn></SignIn>
        },
        {
            path: '/sign-up',
            element: <SignUp></SignUp>
        },
        {
            path: '/my-cart',
            element: <MyCart></MyCart>
        },
        {
            path: '/add-product',
            element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute> 
        },
        {
          path: '/:id',
          element: <BrandPage></BrandPage>,
          loader: ({params})=> fetch(`https://autopros-backend.vercel.app/${params.id}`)
        },
        {
          path: '/:brand/:name',
          element: <PrivateRoute><SingleProduct></SingleProduct></PrivateRoute> ,
          loader: ({params})=> fetch(`https://autopros-backend.vercel.app/${params.brand}/${params.name}`)
        },
        {
          path: '/update/:brand/:Uname',
          element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>

        }
      ]
    }
  ])
  
export default router;