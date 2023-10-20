import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
    const {name,image,brand,price,rating,type,short_description} = useLoaderData()
    // console.log(product);
    return (
      <div className="dark:bg-second-dark-bg">
        <div className="flex max-w-7xl mx-auto hover:bg-transparent flex-col rounded-sm  text-dark-bg">
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
            className="h-[600px] w-full overflow-hidden rounded-sm rounded-b-none "
          >
            
            {/* <img className="w-full" src={image} alt={name} /> */}
          </div>
          <div className="border-4 rounded-t-none bg-yellow dark:hover:text-white transition-colors duration-200 hover:bg-transparent rounded-sm border-yellow">
            <div className="p-6">
              <div>
                <h4 className="block uppercase text-4xl font-semibold ">
                  {brand} : {name}
                </h4>
                {/* <div className="divider h-1 mt-1 dark:bg-white bg-dark-bg w-20 mx-auto"></div> */}
              </div>

              <h4 className="block mt-6 uppercase text-4xl font-semibold ">
                Price: {price}
              </h4>
            </div>
            <div className="divider h-1 mt-1 dark:bg-white bg-dark-bg w-[90%] mx-auto"></div>
            <div className="flex items-center justify-between p-6">
              <h4 className="block   text-2xl font-semibold ">
                Rating: {rating}
              </h4>
              <h4 className="block  text-2xl  font-semibold">{type}</h4>
            </div>
            <p className="p-6 text-xl font-medium">{short_description}</p>
            <div className="flex items-center justify-between p-6">
              <button className="border-[3.2px] px-4 py-2 bg-dark-bg text-white hover:bg-transparent hover:text-yellow font-medium dark:border-white hover:border-yellow ease-linear duration-200 ">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;