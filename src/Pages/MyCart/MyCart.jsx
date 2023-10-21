import { useContext, useEffect } from "react";
import { useProvider } from "../../Provider/UniProvider/UniProvider";
import CartSingle from "./CartSingle";

const MyCart = () => {
    const {user,cartProducts,setCartProducts} = useContext(useProvider)

    useEffect(()=>{
        fetch(`https://autopros-backend.vercel.app/cart/products/${user.email}`)
        .then(res=>res.json())
        .then(data => {
            setCartProducts(data)
        } )
    },[user.email,setCartProducts])

    return (
        <div className="dark:bg-second-dark-bg min-h-screen dark:text-white py-10">
            <div className="max-w-7xl mx-auto px-5 ">
                <div className="mb-10">
                    <h2 className="text-4xl font-semibold uppercase text-center"><span className="text-yellow">My</span> cart</h2>
                    <div className="divider h-1 mt-1 bg-yellow w-36 mx-auto"></div>
                </div>
                <div>
                {cartProducts.length === 0 ? (
                <div>
                  <h2 className="text-center text-yellow text-3xl">
                   Cart is empty !
                  </h2>
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 gap-8 gap-y-12">
                  {cartProducts.map((product) => (
                    <CartSingle key={product._id} product={product}></CartSingle>
                  ))}
                </div>
              )}
                </div>
            </div>
        </div>
    );
};

export default MyCart;