import ReactPlayer from 'react-player/youtube'
import {useSelector} from 'react-redux'
import {useLocation,useNavigate,Link} from 'react-router-dom'
import Error from '../Error'

const Trailer=()=> {
 const {pathname} =  useLocation()
const navigate = useNavigate();
 const category = pathname.includes("movie")?'movie':'tv'
 document.title = "Cinova - Trailer- (" + category + ")";

 const ytVideo =  useSelector(state=>state[category].info.videos);

  return (
    <div className="flex bg-zinc-900/95 absolute w-screen h-screen max-[600px]:px-2 items-center justify-center top-0 left-0 z-50">
        
          <Link
            onClick={() => navigate(-1)}
            className="text-zinc-200 absolute text-2xl gap-2 flex items-center z-50 top-10 left-20 hover:text-purple-500"
            >
            <i className="ri-add-fill rotate-45  text-4xl  font-thin bg-zinc-600  px-0.5 rounded-full" > </i>
          </Link>
         { ytVideo ?   <>
        <ReactPlayer controls url={`https://www.youtube.com/watch?v=${ytVideo.key}`} className="h-[80%] w-[70%]   max-[600px]:w-[90%] max-[600px]:h-1/2 "  />
            </>:<Error/>}
        
    </div>
  )
}

export default Trailer