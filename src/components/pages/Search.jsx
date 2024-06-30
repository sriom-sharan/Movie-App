import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import image from "../../assets/no-image.jpg";

const Search = () => {
  const [query, setQuery] = useState("");
  const [search, setSearches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSearches = async () => {
      try {
        const { data } = await axios.get(`search/multi?query=${query}`);
        setSearches(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getSearches();
  }, [query]);
  return (
    <div className="w-full h-screen flex flex-col bg-black/85 z-50  justify-center ">
      <div className="  w-full  m-auto h-[90%] flex flex-col justify-center  items-start  ">
        <div className="flex w-full  justify-center ">
          <Link
            onClick={() => navigate(-1)}
            className="text-zinc-200 flex items-center gap-2 hover:text-primary absolute left-8"
          >
            <i className="ri-add-fill rotate-45  text-4xl  font-thin bg-zinc-600  px-0.5 rounded-full">
              {" "}
            </i>
          </Link>
          <input
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className=" text-sm py-4 w-1/3 h-10 bg-zinc-700 max-[600px]:w-1/2 max-[600px]:ml-2 border-none px-4 text-zinc-200 outline-none rounded-sm"
            placeholder="Search for movies, shows, person.."
            aria-label="Search Movies"
            value={query}
          />
          {query.length > 0 ? (
            <i
              className="ri-close-line text-xl bg-red-700 px-4 -ml-1 py-1.5 text-zinc-200"
              onClick={() => setQuery("")}
              aria-label="Close Icon"
            ></i>
          ) : (
            <i
              className="ri-search-line text-xl bg-primary px-4 -ml-1 py-1.5 text-zinc-200"
              aria-label="Search Icon"
            ></i>
          )}
        </div>
        <div className=" w-full gap-2 flex items-center mt-2  flex-col  h-full  overflow-y-auto overflow-x-hidden ">
          {search.map((m, i) => (
            <Link
              to={`/${m.media_type}/${m.id}`}
              key={i}
              className="px-6 py-3 rounded-md lg:w-1/2 xl:w-1/2 2xl:w-1/2   w-full h-18 border-b-2 flex border-zinc-500  bg-slate-700 text-zinc-200 items-center "
            >
              <img
                className="w-16 h-16  mr-5 shadow-sm object-cover rounded-md "
                src={
                  m.backdrop_path || m.profile_path
                    ? `https://image.tmdb.org/t/p/original${
                        m.backdrop_path || m.profile_path
                      }`
                    : image
                }
              />
              <span>
                <h1 className="font-medium truncate w-64 ">
                  {m?.name || m.title || m?.original_name || m.original_title}
                </h1>
                <p className="text-xs line-clamp-1 w-68 text-zinc-400">
                  {m.overview || "This the best film ever made."}
                </p>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
