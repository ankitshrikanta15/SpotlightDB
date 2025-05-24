import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiThemoviedatabase } from "react-icons/si";

const About = () => {
  document.title = 'Spotlight | About';

  return (
    <div className="w-screen min-h-screen bg-[#1F1F1F] p-5">
      <Link to="/" className="inline-flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full 
        hover:bg-zinc-700 duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(39,39,42,0.5)]">
        <IoArrowBack className="text-zinc-400 text-xl group-hover:text-white" />
        <span className="text-zinc-400 group-hover:text-white font-medium">Go Back</span>
      </Link>

      <div className="max-w-4xl mx-auto mt-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#6556CD] to-[#9747FF] 
            bg-clip-text text-transparent mb-4">
            About SpotlightDB
          </h1>
          <p className="text-zinc-400 text-lg">Your Ultimate Movie Database Experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-800/50
            hover:border-[#6556CD]/30 transition-all duration-300 group">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
              Movie Mania aims to provide a comprehensive and user-friendly platform for movie enthusiasts
              to discover, explore, and keep track of their favorite movies, TV shows, and artists.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-800/50
            hover:border-[#6556CD]/30 transition-all duration-300 group">
            <h2 className="text-2xl font-semibold text-white mb-4">Features</h2>
            <ul className="text-zinc-400 space-y-2 group-hover:text-zinc-300 transition-colors duration-300">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6556CD]"></span>
                Extensive movie and TV show database
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6556CD]"></span>
                Real-time trending content
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6556CD]"></span>
                Detailed information about cast and crew
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-zinc-900/50 p-8 rounded-xl backdrop-blur-sm border border-zinc-800/50 mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Powered By</h2>
          <div className="flex items-center justify-center gap-8">
            <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-[#90cea1] transition-colors duration-300">
              <SiThemoviedatabase className="text-4xl" />
              <span className="font-medium">TMDB API</span>
            </a>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-6">Connect With Us</h2>
          <div className="flex items-center justify-center gap-6">
            <a target="-blank" href="https://github.com/ankitshrikanta15" className="text-zinc-400 hover:text-[#2dba4e] transition-colors duration-300">
              <FaGithub className="text-3xl mb-10 hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.5)]" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/ankitshrikanta/" className="text-zinc-400 hover:text-[#0077B5] transition-colors duration-300">
              <FaLinkedin className="text-3xl mb-10 hover:drop-shadow-[0_0_8px_rgba(45,186,78,0.5)]" /> 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 