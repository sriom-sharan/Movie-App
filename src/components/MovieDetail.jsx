import { useParams, Link,Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import { LuExternalLink } from "react-icons/lu";
import DetailPage from "./shimmer/DetailPage";
import { FaWikipediaW } from "react-icons/fa";
import { FaImdb } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import { IoPlayOutline } from "react-icons/io5";
import HorizontalCards from "./partials/HorizontalCards";
import noImage from '../assets/no-image.jpg'

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  const { pathname } = useLocation();
  console.log(info);
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    // await GetMovies();
    // window.scrollTo(0, 0);
    return () => {
      dispatch(removemovie());
    };
  }, [dispatch, id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(to right ,rgb(0, 0, 0),rgb(1, 0, 6,0.7),rgb(31, 30, 36,0.2)) ,url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        filter: blur("28px"),
      }}
      className="w-screen max-[600px]:px-1 px-4 "
    >
      <div className="w-full backdrop-blur-[2px] ">
        <nav className="pt-4 flex justify-between">
          <Link
            onClick={() => navigate(-1)}
            className="text-zinc-200 text-2xl gap-2 flex items-center hover:text-primary"
          >
            <i className="ri-arrow-left-s-line  text-4xl  font-thin"> </i>
          </Link>

          <div className="text-white justify-end flex gap-9 p-4 items-center">
            <a
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110"
              href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
            >
              <FaWikipediaW size={24} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.imdb.com/title/${info.externalId?.imdb_id}`}
              className=" hover:scale-110 "
            >
              <FaImdb size={24} />
            </a>
            <a
              target="_blank"
              className="hover:scale-110"
              rel="noreferrer"
              href={info.detail.homepage}
            >
              <LuExternalLink size={24} />
            </a>
          </div>
        </nav>

        <div className="w-full h-full my-auto flex flex-col   ">
          <div className="flex max-[600px]:flex-col max-[600px]:px-4 max-[600px]:justify-center px-20 py-8 gap-8">
            <img
              title={info.detail.tilte}
              className="object-contain h-[400px] max-[600px]:m-auto max-[600px]:object-cover max-[600px]:w-[300px] rounded-lg border-y-2 shadow-xl"
              src={info.detail.poster_path || info.detail.backdrop_path ?  `https://image.tmdb.org/t/p/original${
                info.detail.poster_path || info.detail.backdrop_path 
              }`: noImage}
            />
            <div className="p-2 flex flex-col  gap-4 pt-4">
              <h1 className="font-wix uppercase tracking-wide font-bold text-4xl max-[600px]:text-xl  text-white">
                {info.detail.title}
              </h1>

              <h1 className="text-xs text-center flex gap-2  text-white">
                {info.detail.genres.map((categ) => (
                  <p className="bg-secondary p-2 rounded-full px-4" key={categ}>
                    {categ.name}
                  </p>
                )) || "NA."}
              </h1>
              <div className=" text-xs truncate mt-1 flex gap-4 items-center text-center text-zinc-400">
                <h1 className=" flex items-center gap-1 text-base">
                  <i className="ri-star-s-line text-yellow-400" />
                  <p className="text-sm">
                    {info.detail.vote_average.toFixed(1) || "N/A"}
                  </p>
                </h1>

                <h1 className=" mr-1  flex items-center gap-1  text-base">
                  <i className="ri-calendar-line text-purple-600" />
                  <p className="text-sm">{info.detail.release_date || "N/A"}</p>
                </h1>
              </div>

              <p className="text-xs w-2/4  max-[600px]:w-full line-clamp-3 text-zinc-300">
                {info.detail.overview || "NA"}
              </p>
              <Link
                to={`${pathname}/trailer`}
                className="border-[1px]  flex items-center justify-center hover:text-purple-500 gap-1 text-sm w-28 py-2 text-white border-primary text-center  rounded-md "
              >
                <IoPlayOutline size={20} /> Play Trailer
              </Link>
            </div>
          </div>
        </div>
      <h1 className="text-gray-400  font-wix text-lg text-center -mb-4">
        Languages Available:
      </h1>
      <Marquee className="flex gap-2  text-white p-4 px-6" autoFill={true}>
        {info.translations.map((m, i) => (
          <p className="font-wix p-4" key={i}>
            {m}
          </p>
        ))}
      </Marquee>
      </div>

        
        <Outlet/>

      {/* Recommendations */}
      {info.recommendation.length && <div className="px-8 max-[600px]:px-1 ">
        <h1 className="text-gray-100 flex font-wix px-4 text-2xl text-left -mb-4">
          Recommended
          <p className="ml-auto text-sm text-zinc-500">more →</p>
        </h1>
        {info.similar && <HorizontalCards data={info.recommendation} />}
      </div>}

    {info.similar.results.length && <div className="px-8 mt-10 max-[600px]:px-1">
        <h1 className="text-gray-100 flex font-wix px-4 text-2xl text-left -mb-4">
          Similar
          <p className="ml-auto text-sm text-zinc-500">more →</p>

        </h1>
        {info.similar && <HorizontalCards data={info.similar.results} />}
      </div>}

    </div>
  ) : (
    <DetailPage />
  );
};

export default MovieDetail;
