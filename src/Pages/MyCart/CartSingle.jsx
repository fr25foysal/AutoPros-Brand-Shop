
import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { useProvider } from '../../Provider/UniProvider/UniProvider';

const CartSingle = ({product}) => {
    const {user,successNotify,errorNotify,cartProducts,setCartProducts} = useContext(useProvider)
    const {_id,name,brand,image,price,type} = product

    const handleDelete = ()=>{
        fetch(`https://autopros-backend.vercel.app/cart/products/${user.email}/${_id}`,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data => {
            const modifiedCart = cartProducts.filter(p=> p._id !== _id)
            setCartProducts(modifiedCart)
            data.deletedCount > 0 ? successNotify('Product has been removed') : errorNotify('Please try again!')
        } )
    }
    return (
      <div className="flex  hover:bg-transparent flex-col rounded-sm  text-dark-bg">
        <div className=" overflow-hidden rounded-sm rounded-b-none ">
          <img src={image} alt={name} />
        </div>
        <div className="border-4 rounded-t-none bg-yellow dark:hover:text-white transition-colors duration-200 hover:bg-transparent rounded-sm border-yellow">
          <div className="p-6">
            <div className="">
              <h4 className="block uppercase text-4xl font-semibold ">
                {brand} : {name}
              </h4>
            </div>
            <div className="">
              <h4 className="block uppercase text-4xl mt-5  font-semibold ">
                Price: {price}
              </h4>
            </div>
          </div>
          <div className="divider h-1 mt-1 dark:bg-white bg-dark-bg w-[90%] mx-auto"></div>
          <div className="flex items-center justify-between p-6">
            <div>
              <button
                onClick={handleDelete}
                className="border-[3.2px] flex items-center gap-1 px-4 py-2 bg-dark-bg text-white hover:bg-transparent hover:text-yellow font-medium dark:border-white hover:border-yellow ease-linear duration-200 "
              >
                Delete <MdDelete></MdDelete>
              </button>
            </div>
            <h4 className="block  text-2xl  font-semibold"> {type} </h4>
          </div>
        </div>
      </div>
    );
};

export default CartSingle;