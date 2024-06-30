/* eslint-disable react/prop-types */
import { IoLanguageOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import image from "../../assets/no-image.jpg";

const Card = ({ data, title }) => {
  return (
    <div className="flex flex-wrap justify-center max-[600px]:gap-4 max-[600px]:mt-2  w-full min-h-full gap-5 p-4 mt-4">
      {data.map((d, i) => (
        <Link
          to={`/${title || d.media_type}/${d.id}`}
          key={i}
          className="flex flex-col items-end justify-start w-56 max-[600px]:w-40 max-[600px]:mb-0 mb-5 bg-center bg-cover rounded-md shadow-s shadow-zinc-800"
          // style={{
          //   background: `url(https://image.tmdb.org/t/p/original${d.poster_path})`,
          //   ...backgroundStyle,

          // }}
        >
          <img
            className="object-cover w-full h-full "
            src={
              d.poster_path || d.profile_path
                ? `https://image.tmdb.org/t/p/original${
                    d.poster_path || d.profile_path
                  }`
                : image
            }
          ></img>
          <div className="z-10 m-auto flex w-full cursor-pointer flex-col justify-end rounded-md bg-[rgb(0,0,0,0.9)]  p-3 font-poppins text-lg font-medium text-white opacity-60 duration-500 hover:opacity-100">
            <h1 className="truncate ">
              {d?.name || d.title || d?.original_name || d.original_title}
            </h1>
            <p className="mb-1 text-xs font-normal line-clamp-3 text-zinc-400">
              {d.overview ||
                d.known_for_department ||
                "This the best film ever made."}
            </p>
            <div className="flex items-center mt-1 text-xs text-center truncate text-zinc-400">
              <i className="text-base text-yellow-400 ri-star-s-line"></i>{" "}
              {d.vote_average || d.popularity || "N/A"}
              <p className="ml-3 text-base text-blue-400 ">
                <IoLanguageOutline />
              </p>{" "}
              {d.original_language || "N/A"}
              <i className="ml-4 mr-1 text-base text-purple-400 ri-calendar-line"></i>
              {d.release_date || "N/A"}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
