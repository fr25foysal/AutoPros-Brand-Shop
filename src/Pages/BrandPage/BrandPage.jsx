import { Link, useLoaderData, useParams } from "react-router-dom";
import SingleBrand from "./SingleBrand/SingleBrand";
import { useEffect, useState } from "react";
import BrandSlider from "./BrandSlider/BrandSlider";
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import PrimaryBtn from "../../Components/Button/PrimaryBtn";
register();


const BrandPage = () => {
    const {id} = useParams()
    const cars = useLoaderData()
    const [sliders, setSliders] = useState([]) 

    useEffect(()=>{
      fetch(`http://localhost:5001/sliders/${id}`)
      .then(res=> res.json())
      .then(data=> setSliders(data[0].sliders))
    },[id])
    return (
      <div>
        <div>
        <Swiper
        speed="1000" 
        loop="true" 
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
          
            // modules={[Pagination]}
            className="mySwiper"
          >
            {sliders.map(slider=><SwiperSlide key={slider}>
              <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${slider.image})`,
          }}
        >
          <div className="hero-overlay bg-dark-bg bg-opacity-60"></div>
          <div className="hero-content text-[#fff] text-center ">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                <span className="text-yellow ">{slider.title}</span>{" "}
              </h1>
              <p className="mb-5">
                {slider.paragraph}
              </p>
              <Link to={"/"}>
                <PrimaryBtn text={"Get Started"}></PrimaryBtn>
              </Link>
            </div>
          </div>
        </div>
          
            </SwiperSlide> )}
            
            
            
          </Swiper>
          
        </div>
        {/*Single Brand Section */}
        <div className="dark:bg-second-dark-bg dark:text-white">
          <div className="max-w-7xl mx-auto py-16">
            <div className="pb-10">
              <h2 className="text-4xl font-semibold uppercase text-center">
                {id} collection
              </h2>
              <div className="divider h-1 mt-1 bg-yellow w-36 mx-auto"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 gap-y-12">
              {cars.map((car) => (
                <SingleBrand key={car._id} car={car}></SingleBrand>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default BrandPage;