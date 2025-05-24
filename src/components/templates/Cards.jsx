import { Link } from "react-router-dom"
import noimagee from "/noimagee.jpg"
import { AiFillStar } from "react-icons/ai"


const Cards = ({ data, title }) => {
  console.log(data);
  
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-8">
      {data.map((card, index) => (
        <Link 
          to={`/${card.media_type || title}/details/${card.id}`} 
          key={index}
          className="bg-zinc-900/40 rounded-xl overflow-hidden border border-zinc-800/40
            hover:border-[#6556CD]/30 transition-all duration-300 group
            hover:shadow-[0_0_15px_rgba(101,86,205,0.15)] backdrop-blur-sm"
        >
          <div className="relative overflow-hidden">
            <img 
              className="w-full aspect-[2/3] object-cover transition-all duration-500" 
              src={card.poster_path || card.profile_path ? 
                `https://image.tmdb.org/t/p/original/${card.poster_path || card.profile_path}` 
                : noimagee
              } 
              alt={card.name || card.title} 
            />
            
            {/* Rating Badge */}
            {card.vote_average ? (
              <div className="absolute top-2 right-2 bg-black/60 text-white px-2.5 py-1 
                rounded-lg backdrop-blur-sm border border-white/10 text-sm font-medium
                flex items-center gap-1">
                <AiFillStar className="text-yellow-500" />
                {(card.vote_average * 10).toFixed()}%
              </div>
            ) : (
              <div className="absolute top-2 right-2 bg-black/60 text-white px-2.5 py-1 
                rounded-lg backdrop-blur-sm border border-white/10 text-sm font-medium">
                {card.popularity.toFixed(1)}K
              </div>
            )}
          </div>

          <div className="p-4">
            <h1 className="text-white font-medium text-lg group-hover:text-[#6556CD] 
              transition-colors duration-300 line-clamp-1">
              {card.name || card.title || card.original_name}
            </h1>
            
            {card.first_air_date ? (
              <p className="text-zinc-400 text-sm mt-1">
                {new Date(card.first_air_date).getFullYear()}
              </p>
            ) : (
              <p className="text-zinc-400 text-sm mt-1">
              {card.release_date ? (new Date(card.release_date).getFullYear()) : (card.known_for_department) } 
            </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Cards