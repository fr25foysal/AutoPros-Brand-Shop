import { Link } from "react-router-dom";

const HomeBrand = ({colBrand}) => {
    const {brand,image} = colBrand
    return (
      <div className="hover:scale-105 ease-in-out transition-transform duration-300">
        <Link to={`/${brand}`}>
        <div
          className="hero h-72 rounded-sm"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="hero-overlay  rounded-sm bg-black bg-opacity-40"></div>
          <div className="hero-content text-[#fff] text-center ">
            <div className="max-w-md">
              <h1 className=" uppercase text-3xl  block font-bold text-yellow">
                {brand}
              </h1>
            </div>
          </div>
        </div>
        </Link>
        
      </div>
    );
};

export default HomeBrand;