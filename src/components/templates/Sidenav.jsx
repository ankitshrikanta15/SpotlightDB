import { IoInformationCircle } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { SiShowtime } from "react-icons/si";
import { FaFire } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { MdLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";
import GradientText from "./GradientText";
import "../../index.css"
import logo from "/film-slate.png"

const Sidenav = () => {


  return (
    <div className="w-[18%] h-full border-r-[1px] border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-semibold flex items-center gap-2">
        <img className="w-[2vw]" src={logo} alt="" />
        <span className="text-[2.1vw]">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
        SpotlightDB
        </GradientText>
        </span>
      </h1>
      <nav className="flex flex-col text-md text-zinc-400 gap-1 font-semibold">
        <h1 className=" text-white font-normal text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link to="/trending" className="p-4 hover:bg-[#6556CD] hover:text-white rounded duration-300 flex items-center gap-2">
          <IoMdTrendingUp /> Trending
        </Link>
        <Link to="/popular" className="p-4 hover:bg-[#6556CD] hover:text-white rounded duration-300 flex items-center gap-2">
          <FaFire /> Popular
        </Link>
        <Link to="/movies" className="p-4 hover:bg-[#6556CD] hover:text-white rounded duration-300 flex items-center gap-2">
        <MdLiveTv /> Movies
        </Link>
        <Link to="/tv" className="p-4 hover:bg-[#6556CD] hover:text-white rounded duration-300 flex items-center gap-2">
          <SiShowtime /> Tv Shows
        </Link>
        <Link to="/people" className="p-4 hover:bg-[#6556CD] hover:text-white rounded duration-300 flex items-center gap-2">
          <HiUserGroup /> People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 mt-2" />
      <nav className="flex flex-col text-md text-zinc-400 gap-1 font-semibold">
        <h1 className=" text-white font-normal text-xl mt-10 mb-5">
          Website Information
        </h1>
        <Link to="/about" className="p-4 hover:bg-[#6556CD] hover:text-white rounded duration-300 flex items-center gap-2">
          <IoInformationCircle /> About
        </Link>
        <Link to="/contact" className="p-4 hover:bg-[#6556CD] hover:text-white rounded duration-300 flex items-center gap-2">
          <IoMdCall /> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
