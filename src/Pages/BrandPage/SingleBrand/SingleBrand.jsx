
const SingleBrand = ({car}) => {
    const {name,brand,image,type,price,rating}= car

    return (
      <div>
        

        <div className="flex  hover:bg-transparent flex-col rounded-sm  text-dark-bg">
          <div className="h-96 overflow-hidden rounded-sm rounded-b-none ">
            <img src={image} alt={name} />
          </div>
          <div className="border-4 rounded-t-none bg-yellow dark:hover:text-white transition-colors duration-200 hover:bg-transparent rounded-sm border-yellow">
            <div className="p-6 flex justify-between">
              <div>
                <h4 className="block text-center uppercase text-5xl font-semibold ">
                  {brand} : {name}
                </h4>
                {/* <div className="divider h-1 mt-1 dark:bg-white bg-dark-bg w-20 mx-auto"></div> */}
              </div>

              <h4 className="block text-center uppercase text-5xl font-semibold ">
                {price}
              </h4>
            </div>
            <div className="divider h-1 mt-1 dark:bg-white bg-dark-bg w-[90%] mx-auto"></div>
            <div className="flex items-center justify-between p-6">
              <h4 className="block   text-2xl font-semibold ">
                Rating: {rating}
              </h4>
              <h4 className="block  text-2xl  font-semibold">{type}</h4>
            </div>
            <div className="flex items-center justify-between p-6">
              <button className="border-[3.2px] px-4 py-2 bg-dark-bg text-white hover:bg-transparent hover:text-yellow font-medium dark:border-white hover:border-yellow ease-linear duration-200 ">
                Details
              </button>
              <button className="border-[3.2px] px-4 py-2 bg-dark-bg text-white hover:bg-transparent hover:text-yellow font-medium dark:border-white hover:border-yellow ease-linear duration-200 ">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleBrand;