import { Link, useLoaderData } from "react-router-dom";
import PrimaryBtn from "../../Components/Button/PrimaryBtn";
import HomeBrand from "./HomeBrands/HomeBrand";
import { LiaCertificateSolid } from 'react-icons/lia';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { GrServices } from 'react-icons/gr';

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
          <div className="max-w-7xl mx-auto py-16 px-5">
            <div className="pb-10">
              <h2 className="text-4xl font-semibold text-center">
                Collabed Brands
              </h2>
              <div className="divider h-1 mt-1 bg-yellow w-28 mx-auto "></div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {brands.map((brand) => (
                <HomeBrand key={brand._id} colBrand={brand}></HomeBrand>
              ))}
            </div>
          </div>
        </div>

        {/* why chose us */}
        <div className="dark:bg-second-dark-bg dark:text-white">
          <div className="max-w-7xl mx-auto py-4 px-5">
            <div className="mb-16">
              <h2 className="text-4xl font-semibold text-center">
                Why Choose Us
              </h2>
              <div className="divider h-1 mt-1 bg-yellow w-28 mx-auto "></div>
            </div>
            <div className="grid lg:grid-cols-3 gap-7">
              <div className="border-4 border-yellow p-6 text-center rounded-sm hover:-translate-y-5 transition-transform duration-200">
                <div className="avatar">
                  <div className="p-3 bg-yellow text-black mask mask-hexagon">
                    <LiaCertificateSolid className=" text-7xl"></LiaCertificateSolid>
                  </div>
                </div>
                <h2 className="text-3xl font-semibold py-5">
                  Competitive Pricing Options
                </h2>
                <p className="text-base">
                  Our flexible financing solutions cater to a variety of
                  budgets, ensuring that you can drive off in your dream car
                  without breaking the bank.
                </p>
              </div>
              <div className="border-4 border-yellow p-6 text-center rounded-sm hover:-translate-y-5 transition-transform duration-200">
                <div className="avatar">
                  <div className="p-3 bg-yellow text-black mask mask-hexagon">
                    <VscWorkspaceTrusted className=" text-7xl"></VscWorkspaceTrusted>
                  </div>
                </div>
                <h2 className="text-3xl font-semibold py-5">
                  Exceptional Customer Service
                </h2>
                <p className="text-base">
                  Our team of knowledgeable and friendly professionals is
                  dedicated to providing you with a seamless and personalized
                  experience.
                </p>
              </div>
              <div className="border-4 border-yellow p-6 text-center rounded-sm hover:-translate-y-5 transition-transform duration-200">
                <div className="avatar">
                  <div className="p-3 bg-yellow text-black mask mask-hexagon">
                    <GrServices className=" text-7xl"></GrServices>
                  </div>
                </div>
                <h2 className="text-3xl font-semibold py-5">
                  Selection of Quality Vehicles
                </h2>
                <p className="text-base">
                  With a diverse selection of models, from luxury sedans to
                  powerful SUVs, you're sure to find the perfect ride tailored
                  to your preferences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallary Section*/}
        <div className="dark:bg-second-dark-bg dark:text-white">
          <div className="max-w-7xl mx-auto py-14 px-5">
            <div className="">
              <h2 className="text-4xl font-semibold text-center">Gallary</h2>
              <div className="divider h-1 mt-1 bg-yellow w-28 mx-auto "></div>
            </div>

            <div className="container mx-auto lg:px-5 py-2 lg:pt-12">
              <div className=" lg:flex flex-wrap md:-m-2">
                <div className="flex lg:w-1/2 flex-wrap">
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-sm object-cover object-center"
                      src="/images/ford1.jpg"
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-sm object-cover object-center"
                      src="images/mercedes4.jpg"
                    />
                  </div>
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-sm object-cover object-center"
                      src="images/audi4.jpg"
                    />
                  </div>
                </div>
                <div className="flex start-0 lg:w-1/2 flex-wrap">
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-sm object-cover object-center"
                      src="/images/audi3.jpg"
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-sm object-cover object-center"
                      src="/images/mercedes3.jpg"
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded-sm object-cover object-center"
                      src="/images/ford4.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    );
};

export default Home;