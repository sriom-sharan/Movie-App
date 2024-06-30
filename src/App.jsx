import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Trending from "./components/pages/Trending";
import Popular from "./components/pages/Popular";
import Movies from "./components/pages/Movies";
import TVshows from "./components/pages/TVshows";
import People from "./components/pages/People";
import MovieDetail from "./components/MovieDetail";
import PersonDetail from "./components/PersonDetail";
import TVDetail from "./components/TVShowsDetail";
import Trailer from "./components/pages/Trailer";
import Error from "./components/Error";
import Search from "./components/pages/Search";
import Authentication from "./components/pages/Authentication";
import About from "./components/pages/About";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-secondary flex ">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/search" element={<Search />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TVshows />} />
        <Route path="/people" element={<People />} />
        <Route path="movie/:id" element={<MovieDetail />}>
          <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="person/:id" element={<PersonDetail />} />
        <Route path="tv/:id" element={<TVDetail />}>
          <Route path="trailer" element={<Trailer />} />
        </Route>
        <Route path="person/:id" element={<PersonDetail />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
};

export default App;
