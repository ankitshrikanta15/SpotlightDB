import { Link, Navigate, useNavigate } from "react-router-dom"
import { IoArrowBack} from "react-icons/io5";
import { FaFacebook, FaImdb, FaInstagram, FaLink, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiWikidata } from "react-icons/si";


const NavBarSection = ({ information }) => {
  const navigate = useNavigate();
  return (
    <nav className="w-full text-zinc-200 flex items-center">
          <Link
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 mr-10 bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700 duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(39,39,42,0.5)]"
          >
            <IoArrowBack className="text-zinc-400 text-xl group-hover:text-white transform group-hover:-translate-x-1 transition-all duration-300" />
            <span className="text-zinc-400 group-hover:text-white font-medium">
              Go Back
            </span>
          </Link>

          <div className="flex gap-6 text-2xl">
          {information.detail.homepage && (
              <a
                title="Website"
                target="_blank"
                href={information.detail.homepage}
              >
                <FaLink className="hover:text-[#6556CD] duration-300" />
              </a>
            )}
            {information.externalId.imdb_id && (
              <a
                title="Imdb" 
                target="_blank"
                href={`https://www.imdb.com/title/${information.externalId.imdb_id}/`}
                className="transform hover:scale-125 transition-all duration-300 hover:text-[#f3ce13]"
              >
                <FaImdb className="hover:drop-shadow-[0_0_8px_rgba(243,206,19,0.5)]" />
              </a>
            )}
            {information.externalId.wikidata_id && (
              <a
                title="Wikidata"
                target="_blank"
                href={`https://www.wikidata.org/wiki/${information.externalId.wikidata_id}`}
                className="transform hover:scale-125 transition-all duration-300 hover:text-[#006699]"
              >
                <SiWikidata className="hover:drop-shadow-[0_0_8px_rgba(0,102,153,0.5)]" />
              </a>
            )}
            {information.externalId.twitter_id && (
              <a
                title="Twitter"
                target="_blank"
                href={`https://x.com/${information.externalId.twitter_id}`}
                className="transform hover:scale-125 transition-all duration-300 hover:text-[#1DA1F2]"
              >
                <FaXTwitter className="hover:drop-shadow-[0_0_8px_rgba(29,161,242,0.5)]" />
              </a>
            )}
            {information.externalId.instagram_id && (
              <a
                title="Instagram"
                target="_blank"
                href={`https://www.instagram.com/${information.externalId.instagram_id}`}
                className="transform hover:scale-125 transition-all duration-300 hover:text-[#E4405F]"
              >
                <FaInstagram className="hover:drop-shadow-[0_0_8px_rgba(228,64,95,0.5)]" />
              </a>
            )}
            {information.externalId.facebook_id && (
              <a
                title="Facebook"
                target="_blank"
                href={`https://www.facebook.com/${information.externalId.facebook_id}`}
                className="transform hover:scale-125 transition-all duration-300 hover:text-[#1877F2]"
              >
                <FaFacebook className="hover:drop-shadow-[0_0_8px_rgba(24,119,242,0.5)]" />
              </a>
            )}
            {information.externalId.youtube_id && (
              <a
                title="Youtube"
                target="_blank"
                href={`https://www.youtube.com/${information.externalId.youtube_id}`}
                className="transform hover:scale-125 transition-all duration-300 hover:text-[#FF0000]"
              >
                <FaYoutube className="hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
              </a>
            )}
          </div>
        </nav>
  )
}

export default NavBarSection