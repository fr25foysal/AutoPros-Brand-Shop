import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const SingleBrand = ({car}) => {
    const {name,brand,image,type,price,rating}= car

    return (
      <div className="px-5">
        <div className="flex  hover:bg-transparent flex-col rounded-sm  text-dark-bg">
          <div className="lg:h-96 overflow-hidden rounded-sm rounded-b-none ">
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
              <h4 className="block   text-2xl font-semibold ">
                Rating: {rating}
              </h4>
              <h4 className="block  text-2xl  font-semibold">{type}</h4>
            </div>
            <div className="flex items-center justify-between p-6">
              <Link
                to={`/${brand}/${name}`}
                className="border-[3.2px] px-4 py-2 bg-dark-bg text-white hover:bg-transparent hover:text-yellow font-medium dark:border-white hover:border-yellow ease-linear duration-200 "
              >
                Details
              </Link>
              <Link
                to={`/update/${brand}/${name}`}
                className="border-[3.2px] px-4 py-2 bg-dark-bg text-white hover:bg-transparent hover:text-yellow font-medium dark:border-white hover:border-yellow ease-linear duration-200 "
              >
                Update
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

SingleBrand.propTypes = {
  car: PropTypes.object
}
export default SingleBrand;