import { Link } from "react-router-dom";
import { HiSpeakerphone } from "react-icons/hi";
import { RiSlideshow2Fill } from "react-icons/ri";


const Header = ({data}) => { 
  // console.log(data);
  
  return (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
      backgroundPosition: 'top 50%',
      backgroundSize: 'cover',
    }} className="w-full h-[60vh] flex flex-col justify-end items-start p-[5%]">
      <Link to={`/${data.media_type}/details/${data.id}`} >
      <h1 className="text-5xl text-white font-bold">{data.name || data.title}</h1>
      <p className="text-zinc-300 text-sm line-clamp-2 w-[60%] mt-3 mb-2">{data.overview}</p>
      <p className="flex items-center gap-1 text-white">
        <HiSpeakerphone className="text-yellow-500" />{data.first_air_date || data.release_date}
        <RiSlideshow2Fill className="text-yellow-500 ml-3" />{data.media_type.toUpperCase()}
      </p>
      </Link>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className="p-3 bg-[#6556CD] rounded text-white font-semibold mt-4 hover:bg-[#7656cd]">Watch Trailer</Link>
    </div>
  )
}

export default Header



// import { Link } from "react-router-dom";
// import { HiSpeakerphone } from "react-icons/hi";
// import { RiSlideshow2Fill } from "react-icons/ri";
// import { FaPlay } from "react-icons/fa";
// import PropTypes from 'prop-types';

// const Header = ({data}) => { 
//   return (
//     <div 
//       style={{
//         background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//       }} 
//       className="w-full h-[70vh] flex flex-col justify-end items-start p-[5%] relative group"
//     >
//       {/* Animated gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
//       {/* Content container with slide-up animation */}
//       <div className="z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//         <h1 className="text-6xl text-white font-bold mb-4 drop-shadow-lg hover:scale-105 transition-transform duration-300">
//           {data.name || data.title}
//         </h1>
        
//         <div className="flex items-center gap-4 text-white mb-4">
//           <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
//             <HiSpeakerphone className="text-yellow-500" />
//             <span>{data.first_air_date || data.release_date}</span>
//           </div>
//           <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
//             <RiSlideshow2Fill className="text-yellow-500" />
//             <span>{data.media_type.toUpperCase()}</span>
//           </div>
//         </div>

//         <p className="text-zinc-200 text-base line-clamp-2 w-[60%] mb-6 leading-relaxed">
//           {data.overview}
//         </p>

//         <Link className="inline-flex items-center gap-2 px-6 py-3 bg-[#6556CD] rounded-full text-white font-semibold 
//           hover:bg-[#7656cd] transform hover:scale-105 transition-all duration-300 
//           hover:shadow-[0_0_20px_rgba(101,86,205,0.5)] group/btn">
//           <FaPlay className="transform group-hover/btn:rotate-90 transition-transform duration-300" />
//           Watch Trailer
//         </Link>
//       </div>

//       {/* Animated corner decorations */}
//       <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-white/30 
//         transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 
//         transition-transform duration-700"></div>
//       <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-white/30 
//         transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 
//         transition-transform duration-700"></div>
//     </div>
//   )
// }

// Header.propTypes = {
//   data: PropTypes.shape({
//     backdrop_path: PropTypes.string,
//     profile_path: PropTypes.string,
//     name: PropTypes.string,
//     title: PropTypes.string,
//     first_air_date: PropTypes.string,
//     release_date: PropTypes.string,
//     media_type: PropTypes.string.isRequired,
//     overview: PropTypes.string.isRequired
//   }).isRequired
// };

// export default Header;