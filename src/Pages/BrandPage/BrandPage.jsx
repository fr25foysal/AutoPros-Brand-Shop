import { useLoaderData, useParams } from "react-router-dom";
import SingleBrand from "./SingleBrand/SingleBrand";

const BrandPage = () => {
    const {id} = useParams()
    const cars = useLoaderData()


    return (
      <div>
        {/*Single Brand Section */}
        <div className="dark:bg-second-dark-bg dark:text-white">
          <div className="max-w-7xl mx-auto py-16">
            <div className="pb-10">
              <h2 className="text-4xl font-semibold uppercase text-center">
                {id} collection
              </h2>
              <div className="divider h-1 mt-1 bg-yellow w-36 mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {
                cars.map(car=> <SingleBrand key={car._id} car={car}></SingleBrand>)
              }
            </div>
          </div>
        </div>
      </div>
    );
};

export default BrandPage;