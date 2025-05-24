import { useState } from 'react';
import { Link } from 'react-router-dom';
import noimagee from "/noimagee.jpg";
import { IoCalendarOutline } from "react-icons/io5";
import { PiTelevisionSimpleBold } from "react-icons/pi";

const SeasonsCard = ({ seasons }) => {
  const [expandedSeason, setExpandedSeason] = useState(null);

  return (
    <div className="w-full bg-zinc-900/50 rounded-xl backdrop-blur-sm border border-zinc-800/50 p-6">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-[#6556CD] to-[#9747FF] 
        bg-clip-text text-transparent mb-6">
        Seasons
      </h2>
      
      <div className="space-y-4">
        {seasons.map((season) => (
          <div 
            key={season.id}
            className={`bg-zinc-800/50 rounded-xl overflow-hidden transition-all duration-300
              ${expandedSeason === season.id ? 'ring-2 ring-[#6556CD]/30' : 'hover:bg-zinc-800'}`}
          >
            {/* Season Header */}
            <div 
              className="flex items-center gap-4 p-4 cursor-pointer"
              onClick={() => setExpandedSeason(expandedSeason === season.id ? null : season.id)}
            >
              <img
                src={season.poster_path ? 
                  `https://image.tmdb.org/t/p/w200${season.poster_path}` : noimagee}
                alt={season.name}
                className="w-16 h-24 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg">{season.name}</h3>
                <div className="flex items-center gap-4 text-sm text-zinc-400 mt-1">
                  <div className="flex items-center gap-1">
                    <IoCalendarOutline />
                    <span>{season.air_date?.split('-')[0] || 'TBA'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <PiTelevisionSimpleBold />
                    <span>{season.episode_count} Episodes</span>
                  </div>
                </div>
              </div>

              {/* Expand Arrow */}
              <svg 
                className={`w-6 h-6 text-zinc-400 transition-transform duration-300
                  ${expandedSeason === season.id ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Expanded Content */}
            {expandedSeason === season.id && (
              <div className="p-4 pt-0 border-t border-zinc-700/50">
                <p className="text-zinc-400 text-sm mb-4">
                  {season.overview || "No overview available."}
                </p>
                
                <Link 
                  to={`season/${season.season_number}`}
                  className="inline-flex items-center gap-2 text-sm text-[#6556CD] hover:text-[#9747FF] 
                    transition-colors duration-300"
                >
                  View Full Details
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonsCard; 