import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoClose, IoCalendarOutline } from "react-icons/io5";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import axios from "../../utils/axios";
import noimagee from "/noimagee.jpg";
import Loading from "../Loading";

const SeasonDetails = () => {
  const { id, season_number } = useParams();
  const navigate = useNavigate();
  const [seasonData, setSeasonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSeasonDetails = async () => {
      try {
        const { data } = await axios.get(`/tv/${id}/season/${season_number}`);
        setSeasonData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching season details:", error);
        setLoading(false);
      }
    };

    getSeasonDetails();
  }, [id, season_number]);

  if (loading) return <Loading />;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[#1F1F1F]/95 backdrop-blur-md z-50 
      overflow-y-auto scrollbar-thin scrollbar-thumb-[#6556CD] scrollbar-track-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Close Button */}
        <button 
          onClick={() => navigate(-1)}
          className="fixed top-4 right-4 text-white bg-zinc-800 p-2 rounded-full 
            hover:bg-zinc-700 transition-all duration-300 group hover:scale-110
            hover:shadow-[0_0_15px_rgba(39,39,42,0.5)] z-50"
        >
          <IoClose className="text-3xl text-zinc-400 group-hover:text-white" />
        </button>

        {/* Season Header */}
        <div className="flex gap-6 items-start mb-8">
          <img
            src={seasonData.poster_path ? 
              `https://image.tmdb.org/t/p/w300${seasonData.poster_path}` : noimagee}
            alt={seasonData.name}
            className="w-48 rounded-lg shadow-lg"
          />
          
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">{seasonData.name}</h1>
            <div className="flex items-center gap-4 text-zinc-400 mb-4">
              <div className="flex items-center gap-1">
                <IoCalendarOutline />
                <span>{seasonData.air_date?.split('-')[0] || 'TBA'}</span>
              </div>
              <div className="flex items-center gap-1">
                <PiTelevisionSimpleBold />
                <span>{seasonData.episodes?.length} Episodes</span>
              </div>
            </div>
            <p className="text-zinc-300">{seasonData.overview || "No overview available."}</p>
          </div>
        </div>

        {/* Episodes List */}
        <div className="space-y-4">
          {seasonData.episodes?.map((episode) => (
            <div 
              key={episode.id}
              className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50
                hover:border-[#6556CD]/30 transition-all duration-300 group"
            >
              <div className="flex gap-4 p-4">
                {episode.still_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${episode.still_path}`}
                    alt={episode.name}
                    className="w-48 h-27 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-48 h-27 bg-zinc-800 rounded-lg flex items-center justify-center">
                    <span className="text-zinc-600">No Image</span>
                  </div>
                )}
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-zinc-400 text-sm">Episode {episode.episode_number}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400 text-sm">{episode.runtime} min</span>
                    {episode.air_date && (
                      <>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-400 text-sm">{episode.air_date}</span>
                      </>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#6556CD] 
                    transition-colors duration-300">
                    {episode.name}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm line-clamp-2">
                    {episode.overview || "No overview available."}
                  </p>

                  {episode.vote_average > 0 && (
                    <div className="mt-2 inline-flex items-center gap-1 bg-yellow-600/20 text-yellow-600
                      px-2 py-1 rounded-lg text-sm">
                      <span className="font-semibold">{episode.vote_average.toFixed(1)}</span>
                      <span className="text-yellow-600/80">Rating</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonDetails; 