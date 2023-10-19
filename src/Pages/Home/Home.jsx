import { Link } from "react-router-dom";
import PrimaryBtn from "../../Components/Button/PrimaryBtn";

const Home = () => {
    return (
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(/images/banner.jpg)",
          }}
        >
          <div className="hero-overlay bg-dark-bg bg-opacity-60"></div>
          <div className="hero-content text-[#fff] text-center ">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Fly on your way <br></br> <span className="text-yellow ">with AutoPros</span> </h1>
              <p className="mb-5">
              From Sleek Sedans to Powerful SUVs, We have Got Your Perfect Ride. Explore the Latest Models, Expert Reviews, and Unbeatable Deals.
              </p>
              <Link to={'/'}><PrimaryBtn text={'Get Started'}></PrimaryBtn></Link>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;