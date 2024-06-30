/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Header = ({ data }) => {
  return (
    <div className="w-full h-[460px]   text-white flex flex-col justify-end items-start ">
      {/* <h1 className="py-4 text-5xl font-medium text-white font-wix">
        {data?.name || data.title || data?.original_name || data.original_title}
      </h1>
      <p className="w-2/3 text-base line-clamp-3 text-zinc-400">
        {data.overview || "This the best film ever made."}
      </p>
      <p className="flex items-center pt-3 text-sm">
        <i className="pr-2 text-xl text-center ri-calendar-line text-primary"></i>
        {data.release_date || "No information"}
        <i className="pr-2 ml-8 text-xl text-center ri-movie-2-line text-primary"></i>
        {data.media_type}
      </p>
      <Link className="px-4 py-2 mt-4 duration-100 bg-primary hover:bg-primary/50 ">Watch Trailer</Link> */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full "
      >
        {data.map((d, i) => (
          <SwiperSlide
            key={i}
            className="flex flex-col justify-end p-16"
            style={{
              background: `linear-gradient(rgba(0,0,0,0.2),rgb(31, 30, 36,0.7),rgb(31, 30, 36)) ,url(https://image.tmdb.org/t/p/original${d.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 className="headingText py-4  font-medium text-white font-wix">
              {d?.name || d.title || d?.original_name || d.original_title}
            </h1>
            <p className="w-2/3  max-[600px]:w-full text-base line-clamp-3 text-zinc-400">
              {d.overview || "This the best film ever made."}
            </p>
            <p className="flex items-center pt-3 text-sm">
              <i className="pr-2 text-xl text-center ri-calendar-line text-primary"></i>
              {d.release_date || "N/A"}
              <i className="pr-2 ml-8 text-xl text-center ri-movie-2-line text-primary"></i>
              {d.media_type}
            </p>
            <Link
              to={`/${d.media_type}/${d.id}/trailer`}
              className="w-32 px-4 py-2 mt-4 duration-100 bg-primary hover:bg-primary/50 "
            >
              Watch Trailer
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
