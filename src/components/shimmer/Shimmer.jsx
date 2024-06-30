const Shimmer = () => {
  return (
    <div className="animate-pulse">
      <div
        className="w-full h-[440px]  animate-pulse bg-zinc-500  text-white flex flex-col justify-end items-start "
        style={{
          background:
            "linear-gradient(rgb(244, 244, 244.0.4)),rgb(244, 244, 244,0.7)),rgb(244, 244, 244))",
        }}
      ></div>
      <div className="w-72 ml-4 h-12 bg-zinc-700 mt-3"></div>
      <div className="flex gap-3 ml-4 mt-3">
        <div className="h-60 w-64  bg-zinc-700"></div>
        <div className="h-60 w-64 bg-zinc-700"></div>
        <div className="h-60 w-64 bg-zinc-700"></div>
        <div className="h-60 w-64 bg-zinc-700"></div>
        <div className="h-60 w-64 bg-zinc-700"></div>
      </div>
    </div>
  );
};

export default Shimmer;
