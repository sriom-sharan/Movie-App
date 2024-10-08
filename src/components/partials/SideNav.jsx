import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const SideNav = () => {
  const [isVisible, setisVisible] = useState(true);

console.log(window.innerWidth);



useEffect(()=>{
  if (window.innerWidth<1060) {
    setisVisible(false)
  }else{
    setisVisible(true)
  }
})
  const handleVisiblity = () => {
    setisVisible(!isVisible);
  };

  return (
    <>
      <div
        className="absolute lg:hidden xl:hidden 2xl:hidden -mt-6  w-20 h-28 top-0  flex justify-start items-center text-[28px] text-teal-50 left-4 z-[10000]"
        onClick={handleVisiblity}
      >
        <i className="ri-menu-2-line"></i>
        {/* <RiMenu3Line className="relative" size={30} /> */}
      </div>

      {isVisible && (
        <div className=" side-nav w-1/6 h-full max-[600px]:h-[100dvh] p-3 px-6 border-r-2  overflow-hidden  bg-secondary border-zinc-700">
          <h1 className="text-2xl flex text-white font-medium tracking-tighter border-b-[1px] border-zinc-500 py-4 ">
            {/* <i className="mr-2 text-primary ri-film-fill" /> */}
            <img className="w-8 mr-2" src={logo}></img>
            <span className="font-poppins">Cinova</span>
          </h1>
          <nav className="flex flex-col gap-1 font-wix ">
            <h1 className="text-white text- mt-8 pb-2 border-b-[1px] border-zinc-700 mb-2 ">
              Menu
            </h1>
            <Link className="flex items-center p-2 text-sm align-middle duration-200 rounded-sm text-zinc-300 hover:bg-primary">
              <i className="mr-1 ri-home-5-line"></i> Home
            </Link>
            <Link
              to={"/about"}
              className="flex items-center p-2 text-sm duration-200 rounded-sm text-zinc-300 hover:bg-primary text-middle"
            >
              <i className="mr-1 ri-information-line"></i> About
            </Link>
            <Link className="flex items-center p-2 text-sm duration-200 rounded-sm text-zinc-300 hover:bg-primary">
              <i className="mr-1 ri-phone-line"></i> Contact
            </Link>
          </nav>
          <nav className="flex flex-col gap-1 ">
            <h1 className="text-white  mt-4 pb-2 border-b-[1px] border-zinc-700 mb-2  ">
              New Feeds
            </h1>
            <Link
              to="/trending"
              className="p-2 text-sm duration-200 rounded-sm text-zinc-300 hover:bg-primary"
            >
              <i className=" ri-fire-line"></i> Trending
            </Link>
            <Link
              to="/popular"
              className="p-2 text-sm duration-200 rounded-sm text-zinc-300 hover:bg-primary"
            >
              <i className="ri-bard-fill"></i> Popular
            </Link>
            <Link
              to="/movies"
              className="p-2 text-sm duration-200 rounded-sm text-zinc-300 hover:bg-primary"
            >
              <i className="ri-movie-2-line"></i> Movies
            </Link>
            <Link
              to="/tv"
              className="p-2 text-sm duration-200 rounded-sm text-zinc-300 hover:bg-primary"
            >
              <i className="ri-tv-line"></i> Tv Shows
            </Link>
            <Link
              to="/people"
              className="p-2 text-sm duration-200 rounded-sm text-zinc-300 hover:bg-primary"
            >
              <i className="ri-team-line"></i> People
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default SideNav;
