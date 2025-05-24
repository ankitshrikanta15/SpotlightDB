import { Link } from "react-router-dom"
import noimagee from "/noimagee.jpg";


const CastDetails = ({information, person}) => {
  return (
    <div className="mb-16">
    <h2
      className="text-3xl font-bold bg-gradient-to-r from-[#6556CD] to-[#9747FF] 
      bg-clip-text text-transparent mb-8"
    >
      Top Cast
    </h2>

    <div className="flex gap-5 flex-wrap">
      {information.credits.cast.slice(0, 12).map((person) => (
        <Link
          to={`/person/details/${person.id}`}
          key={person.id}
          className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800/50 hover:border-[#6556CD]/30 hover:shadow-[0_0_15px_rgba(101,86,205,0.15)]duration-300"
        >
          <div className="relative overflow-hidden">
            <img
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                  : noimagee
              }
              alt={person.name}
              className="w-[28vh] h-[40vh] object-top object-cover"
            />
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-0 
              group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <div className="p-3">
            <h3
              className="text-white font-semibold text-sm group-hover:text-[#6556CD] 
              transition-colors duration-300 truncate"
            >
              {person.name}
            </h3>
            <p className="text-zinc-400 text-xs mt-0.5 truncate">
              {person.character}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default CastDetails