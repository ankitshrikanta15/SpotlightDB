import PropTypes from 'prop-types';
import noimagee from "/noimagee.jpg"
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const HorizontalCards = ({ data }) => {
  const swiperRef = useRef(null);
  
  const getRatingColor = (rating) => {
    const score = Number(rating.toFixed(1));
    if (score >= 7.5) return 'bg-gradient-to-r from-green-500/10 to-green-500/20 text-green-500 ring-green-500/30';
    if (score >= 6) return 'bg-gradient-to-r from-blue-500/10 to-blue-500/20 text-blue-500 ring-blue-500/30';
    if (score >= 5) return 'bg-gradient-to-r from-orange-500/10 to-orange-500/20 text-orange-500 ring-orange-500/30';
    return 'bg-gradient-to-r from-red-500/10 to-red-500/20 text-red-500 ring-red-500/30';
  };

  return ( 
    <div className="w-full min-h-[500px] p-5 relative">
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        className="w-full"
      >
        {data.length > 0 ? data.map((trend, index) => (
          <SwiperSlide key={`${trend.id}-${index}`} className="!w-[232px]">
            <Link 
              to={`/${trend.media_type}/details/${trend.id}`} 
              className="h-[420px] bg-zinc-900 rounded-xl overflow-hidden hover:bg-zinc-800/80 
                transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(101,86,205,0.3)]
                border border-zinc-800 hover:border-[#6556CD]/30 backdrop-blur-sm block"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={trend.poster_path || trend.profile_path ? 
                    `https://image.tmdb.org/t/p/w500/${trend.poster_path || trend.profile_path || trend.file_path }` : noimagee}
                  alt={trend.title}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-all duration-500"
                />
                {trend.media_type !== 'person' && (
                  <span className="absolute top-2 right-2 bg-black/60 text-white px-2.5 py-1 rounded-lg 
                    text-xs backdrop-blur-sm border border-white/10 font-medium tracking-wider">
                    {trend.media_type ? trend.media_type.toUpperCase() : ""}
                  </span>
                )}
              </div>
              <div className="p-3">
                <h1 className="text-zinc-200 font-semibold text-lg truncate">
                  {trend.name || trend.title || trend.original_name}
                </h1>
                <p className="text-zinc-400 text-sm mt-1">
                  {trend.release_date || trend.first_air_date || ""}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  {trend.media_type === 'person' ? (
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#6556CD]/10 to-[#6556CD]/20 
                        px-2 py-1 rounded-lg ring-1 ring-[#6556CD]/30">
                        <span className="text-[#6556CD] font-semibold text-sm">
                          {trend.popularity.toFixed(1)}K
                        </span>
                        <span className="text-[#6556CD]/80 text-xs">
                          Popularity
                        </span>
                      </div>
                      {trend.known_for_department && (
                        <span className="bg-gradient-to-r from-purple-500/10 to-purple-500/20 text-purple-500 px-2 py-1 rounded-lg text-xs font-medium
                          ring-1 ring-purple-500/30 tracking-wide">
                          {trend.known_for_department}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className={`flex items-center gap-1.5 px-2 py-1 rounded-lg ring-1 ${getRatingColor(trend.vote_average)}`}>
                      <span className="font-semibold text-sm tracking-wide">
                        {(trend.vote_average * 10).toFixed(0)}%
                      </span>
                      <span className="text-xs opacity-90">
                        Rating
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        )) : <h1 className='text-3xl text-white font-bold text-center mt-5'>Nothing to Show</h1>}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button 
        onClick={() => swiperRef.current?.swiper.slidePrev()} 
        className="absolute left-0 top-[40%] -translate-y-1/2 z-20 
          bg-zinc-900/80 hover:bg-zinc-800/90 text-white w-12 h-12 rounded-full
          shadow-lg backdrop-blur-sm border border-zinc-700/50 hover:border-[#6556CD]/50 
          transition-all duration-300 hover:scale-110 flex items-center justify-center
          focus:outline-none group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-[#6556CD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => swiperRef.current?.swiper.slideNext()} 
        className="absolute right-0 top-[40%] -translate-y-1/2 z-20 
          bg-zinc-900/80 hover:bg-zinc-800/90 text-white w-12 h-12 rounded-full
          shadow-lg backdrop-blur-sm border border-zinc-700/50 hover:border-[#6556CD]/50 
          transition-all duration-300 hover:scale-110 flex items-center justify-center
          focus:outline-none group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-[#6556CD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

HorizontalCards.propTypes = {
  data: PropTypes.array.isRequired
};

export default HorizontalCards;


