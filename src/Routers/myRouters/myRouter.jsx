import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import MyCart from "../../Pages/MyCart/MyCart";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import BrandPage from "../../Pages/BrandPage/BrandPage";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=>{
            return fetch('http://localhost:5001/brands')
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
            element: <AddProduct></AddProduct>
        },
        {
          path: '/:id',
          element: <BrandPage></BrandPage>,
          loader: ({params})=> fetch(`http://localhost:5001/${params.id}`)
        }
      ]
    }
  ])
  
export default router;