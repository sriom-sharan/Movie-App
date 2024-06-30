/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { IoLanguageOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import image from "../../assets/no-image.jpg";

const HorizontalCards = ({ data }) => {
  console.log(data);
  return (
    <div className="w-full h-[480px] max-[600px]:h-[300px] max-[600px]:p-1  overflow-x-hidden overflow-hidden p-4">
      <hr className="my-2 opacity-15"></hr>
      <Swiper
        slidesPerView={2}
        spaceBetween={6}
        navigation={true}
        scrollbar={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          "@0.60": {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 6,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 12,
          },
          "@1.85": {
            slidesPerView: 5,
            spaceBetween: 14,
          },
        }}
        modules={[Pagination, Navigation]}
        className="h-full p-3   "
      >
        {data.map((d, i) => (
          <SwiperSlide
            key={i}
            className="relative bg-center bg-cover rounded-md shadow-s shadow-zinc-800 "
          >
            <Link
              to={`/${d.media_type || data.media_type}/${d.id}`}
              key={d.id}
              className="flex items-end justify-start w-full h-full rounded-md"
            >
              <img
                className="absolute object-cover w-full h-full "
                src={
                  d.poster_path || d.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${
                        d.poster_path || d.backdrop_path
                      }`
                    : image
                }
              ></img>
              <div className="z-10 absolute font-medium flex flex-col justify-end duration-500  cursor-pointer rounded-md opacity-100  m-auto  text-white text-lg font-poppins bg-[rgb(0,0,0,0.9)] p-3 w-full">
                <h1 className="truncate">
                  {d?.name || d.title || d?.original_name || d.original_title}
                </h1>
                {d.episode_count && (
                  <h1 className="text-xs font-light font-wix">
                    Episodes - {d.episode_count}
                  </h1>
                )}
                <p className="text-xs font-normal line-clamp-3 text-zinc-400">
                  {d.overview}
                </p>

                <div className="flex items-center mt-1 text-xs truncate text-zinc-400">
                  <i className="mr-1 text-base text-yellow-400 ri-star-s-line"></i>{" "}
                  {d.vote_average || "N/A"}
                  <p className="ml-4 mr-1 text-base text-blue-400 ">
                    <IoLanguageOutline />
                  </p>{" "}
                  {d.original_language || "N/A"}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalCards;
