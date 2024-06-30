/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import TopNav from "../partials/TopNav";
import Dropdown from "../partials/Dropdown";
import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Card from "../partials/Card";
import ShimmerCard from "../shimmer/ShimmerCard";

const Movies = () => {
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // This will change title dynamically.
  document.title = "Cinova - Movies- (" + category + ")";

  const getMovies = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`movie/${category}?page=${page}`);
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [category, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-screen h-screen px-2 py-4">
      <div className="w-full h-16 z-50 fixed top-0 bg-secondary  flex gap-2 items-center">
        <Link
          onClick={() => navigate(-1)}
          className="text-zinc-200 z-[100000] hover:text-primary"
        >
          <i className="ri-arrow-left-s-line  text-4xl font-thin "></i>
        </Link>
        <h1 className="text-2xl font-wix text-zinc-200 font-medium mr-20">
          Movies
        </h1>
        <TopNav />
      </div>
      <div className="w-full   max-h-fit gap-6 px-9 py mt-12 flex justify-end">
        <Dropdown
          title="Category"
          options={["now_playing", "popular", "top_rated", "upcoming"]}
          func={(e) => setCategory(e.target.value)}
        />
      </div>

      {movie.length > 0 ? (
        <>
          <Card data={movie} title="movie" />
          <div className="w-full h-min flex p-4 justify-center">
            <button
              onClick={handleLoadMore}
              className="p-2 px-4 w-2/3 rounded-md border-[1px] border-primary text-white cursor-pointer"
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        </>
      ) : (
        <ShimmerCard />
      )}
    </div>
  );
};

export default Movies;
