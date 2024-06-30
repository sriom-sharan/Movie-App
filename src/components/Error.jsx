import {useNavigate} from 'react-router-dom'
const Error = () => {
    const navigate = useNavigate()
  return (
    <div className=" text-white max-[600px]:px-2 justify-center align-middle gap-4 w-full items-center flex flex-col font-poppins">
      <h1 className="text-9xl">☹</h1>
      <h1 className="text-6xl">404</h1>
      <p className="text-3xl max-[600px]:text-xl">Sorry, Request Not Found!</p>
      <p className="text-xs font-thin font-wix max-[600px]:px-4 text-center">Note : These page may be not available for right now. But we are working on it. Soon it will be available.</p>
      <button onClick={()=>navigate(-1)} className='underline bg-black w-40 h-10 rounded-lg text-sm hover:text-primary'>Go Back</button>
    </div>
  );
};

export default Error;
