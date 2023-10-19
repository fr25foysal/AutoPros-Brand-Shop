import { Link, useLoaderData } from "react-router-dom";
import PrimaryBtn from "../../Components/Button/PrimaryBtn";
import HomeBrand from "./HomeBrands/HomeBrand";

const Home = () => {
  const brands = useLoaderData()
    return (
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/images/banner.jpg)",
          }}
        >
          <div className="hero-overlay bg-dark-bg bg-opacity-60"></div>
          <div className="hero-content text-[#fff] text-center ">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Fly on your way <br></br>{" "}
                <span className="text-yellow ">with AutoPros</span>{" "}
              </h1>
              <p className="mb-5">
                From Sleek Sedans to Powerful SUVs, We have Got Your Perfect
                Ride. Explore the Latest Models, Expert Reviews, and Unbeatable
                Deals.
              </p>
              <Link to={"/"}>
                <PrimaryBtn text={"Get Started"}></PrimaryBtn>
              </Link>
            </div>
          </div>
        </div>
        {/* Brands Section */}
        <div className="dark:bg-second-dark-bg dark:text-white">
          <div className="max-w-7xl mx-auto py-16">
            <div className="pb-10">
              <h2 className="text-4xl font-semibold text-center">
                Collabed Brands
              </h2>
              <div className="divider h-1 mt-1 bg-yellow w-28 mx-auto"></div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              {
                brands.map(brand => <HomeBrand key={brand._id} colBrand={brand}></HomeBrand>)
              }
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;