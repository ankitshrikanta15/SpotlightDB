import { IoClose } from "react-icons/io5";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const Trailer = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytVideo = useSelector((state) => state[category].information.videos);
  

  return (
    <div className="bg-[rgba(0,0,0,0.8)] absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
      <Link
        onClick={() => navigate(-1)}
        className="absolute top-5 right-[50%] text-white bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition-all duration-300 group hover:scale-110 hover:shadow-[0_0_15px_rgba(39,39,42,0.5)]">
        <IoClose className="text-3xl text-zinc-400 group-hover:text-white" />
      </Link>
      {ytVideo ?  (
        <ReactPlayer
        controls
        height={600}
        width={1300}
        url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
      />) : <NotFound />
      }
    </div>
  )
};

export default Trailer;
