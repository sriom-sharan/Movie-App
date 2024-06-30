import TopNav from "../partials/TopNav";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col text-zinc-50">
      <div className="w-full h-16 z-50 fixed top-0 bg-secondary  flex gap-2 items-center">
        <Link
          onClick={() => navigate(-1)}
          className="text-zinc-200  z-[100000] hover:text-primary"
        >
          <i className="ri-arrow-left-s-line pl-3 text-4xl font-thin "></i>
        </Link>
        {/* <h1 className="text-2xl font-wix text-zinc-200 font-medium mr-20">
          About us
        </h1> */}
        <TopNav />
      </div>
        <img className="w-full absolute top-0 -mt-52" src="https://www.shutterstock.com/image-vector/abstract-golden-light-rays-scene-600nw-2271597037.jpg"/>
    </div>
  );
};

export default About;
