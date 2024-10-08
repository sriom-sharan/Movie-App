import { useEffect, useState } from "react";
import SideNav from "../partials/SideNav"
import TopNav from "../partials/TopNav"
import Header from "../partials/Header";
import axios from "../../utils/axios"
import HorizontalCards from "../partials/HorizontalCards";
import Dropdown from "../partials/Dropdown";
import Shimmer from "../shimmer/Shimmer";
import { Outlet } from 'react-router-dom';
import Footer from "../Footer";


const Home = () => {
    document.title="Cinova - Home";

    const [wallpaper,setWallpaper] = useState(null);
    const [trending,setTrending] = useState(null);
    const[category,setCatgory] = useState('all');

    const getList = async() => {
      try{
        const {data} = await axios.get('trending/all/day');
       
        setWallpaper(data.results);
       } catch(error){
        console.log(error)
      }
       }

       const getTrending = async() => {
        try{
          const {data} = await axios.get(`trending/${category}/day`);
         
          setTrending(data.results);
         } catch(error){
          console.log(error)
        }
         }


    useEffect(()=>{
    !wallpaper && getList();
    getTrending();
 
    },[category])


  return (
    <div className="flex w-full overflow-hidden">
    <SideNav />
    <Outlet />
    <div className="w-5/6 overflow-y-scroll right-screen">
      <TopNav />

    { wallpaper&&trending?
    <>
      <Header data={wallpaper} />

    <div className="flex gap-16 px-6 pr-8 mt-6 max-[600px]:mt-10 -mb-3 text-3xl font-medium font-poppins text-zinc-300 ">
      <h1>Trending</h1> 
    <Dropdown title="Filter" options={["tv","movie","all"]} func={(e)=>setCatgory(e.target.value)} />
    </div>

    <HorizontalCards data={trending}/></>:<Shimmer />}
   <Footer/>
    </div>
    
    </div>
  )
}

export default Home;