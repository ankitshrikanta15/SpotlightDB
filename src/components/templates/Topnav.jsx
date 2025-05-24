import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import { useEffect } from "react";
import noimagee from "/noimagee.jpg"

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const GetSearches = async() => {
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results)
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  // console.log(searches);
  

  return (
    <div className="w-[60%] h-[8vh] relative flex items-center mx-auto">
      <div className={`flex items-center gap-2 w-full bg-zinc-800 rounded-full px-5 py-3 
        transition-all duration-300 border-2 
        ${isFocused ? 'border-[#6556CD] shadow-[0_0_15px_rgba(101,86,205,0.5)]' : 'border-transparent'}`}>
        
        <CiSearch className={`text-2xl transition-all duration-300 
          ${isFocused ? 'text-[#6556CD]' : 'text-zinc-400'}`} />
        
        <input 
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={query}
          className="w-full text-white bg-transparent border-none outline-none placeholder:text-zinc-400"
          type="text"
          placeholder="Search anything"
        />
        
        {query.length > 0 && (
          <IoClose 
            onClick={() => setQuery("")}
            className="text-2xl text-zinc-400 hover:text-white cursor-pointer transition-colors duration-300"
          />
        )}
      </div>

      {/* Search Results */}
      {searches && searches.length > 0 && query.length > 0 && (
        <div className="z-[100] absolute w-full max-h-[70vh] bg-zinc-800 top-[100%] mt-2 overflow-auto rounded-2xl border-2 border-zinc-700">
          {searches.map((search, index) => (
            <Link to={`/${search.media_type}/details/${search.id}`}
              key={index} 
              className="p-4 w-full flex items-center gap-4 hover:bg-zinc-700 transition-colors duration-300 border-b border-zinc-700 last:border-none"
            >
              <img 
                className="w-[50px] h-[70px] object-cover rounded-lg"
                src={search.backdrop_path || search.poster_path || search.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${search.profile_path || search.poster_path || search.backdrop_path}`
                  : noimagee
                }
                alt={search.title || search.original_title}
              />
              <div className="flex flex-col">
                <span className="text-white font-medium">{search.name || search.title}</span>
                <span className="text-sm text-zinc-400">
                  {search.media_type.charAt(0).toUpperCase() + search.media_type.slice(1)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div> 
  )
}

export default Topnav