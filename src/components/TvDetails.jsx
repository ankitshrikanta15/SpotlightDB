import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadTv, removeTv } from "../store/actions/tvActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import noimagee from "/noimagee.jpg";
import "remixicon/fonts/remixicon.css";
import HorizontalCards from "./templates/HorizontalCards";
import SeasonsCard from "./templates/SeasonsCard";

import CastDetails from "./templates/CastDetails";
import SeasonsSection from "./templates/SeasonsSection";
import ReviewSection from "./templates/ReviewSection";
import LanguageSection from "./templates/LanguageSection";
import NavBarSection from "./templates/NavBarSection";


const TvDetails = () => {
  const { pathname } = useLocation();
  const { id, season_id } = useParams();
  const { information } = useSelector((state) => state.tv);
  console.log(information);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadTv(id, season_id));
    return () => {
      dispatch(removeTv());
    };
  }, [id, season_id]);

  return information ? (
    <div className="w-full">
      {/* First Page - Exactly as is */}
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${information.detail.backdrop_path})`,
          backgroundPosition: "top 50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-screen h-screen px-20 py-5"
      >
        {/* part-1 Navigation */}
        <NavBarSection information={information} />

        {/* part-02 Poster and Details */}
        <div className="w-full flex mt-[5%]">
          <img
            src={
              information.detail.poster_path || information.detail.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${
                    information.detail.poster_path ||
                    information.detail.backdrop_path
                  }`
                : noimagee
            }
            alt={information.detail.title}
            className="w-[250px] h-[400px] object-cover rounded-md"
          />

          <div className="content text-white ml-[5%] mt-[2%]">
            <h1 className="text-5xl font-bold">
              {information.detail.name ||
                information.detail.title ||
                information.detail.original_name}
              <small className="text-xl font-bold text-zinc-300">
                {/* ({information.detail.first_air_date}) */}
              </small>
            </h1>

            <div className="flex items-center mb-8 text-white gap-x-5 text-md font-semibold mt-1">
              <div className="flex">
                <span className="  text-white w-[6vh] h-[6vh] font-semibold text-lg bg-yellow-600 flex items-center justify-center rounded-full">
                  {(information.detail.vote_average * 10).toFixed()}{" "}
                  <sup>%</sup>
                </span>
                <h1 className="w-[60px] font-bold text-xl leading-5">
                  User Score
                </h1>
              </div>

              <h1>{information.detail.release_date}</h1>
              <h1>
                {information.detail.genres.map((genre) => genre.name).join(",")}
              </h1>
              <h1>{information.detail.number_of_seasons} Seasons.</h1>
            </div>

            <h1 className="font-semibold text-xl text-zinc-300 italic mb-5">
              {information.detail.tagline
                ? `"${information.detail.tagline}"`
                : ""}
            </h1>

            <h1 className="text-2xl font-semibold">Overview</h1>
            <p className="text-sm font-normal mb-7">
              {information.detail.overview}
            </p>

            <Link
              className="p-3 bg-[#6556CD] rounded text-white font-semibold hover:bg-[#7656cd]"
              to={`${pathname}/trailer`}
            >
              <i className="ri-play-fill mr-1"></i>Play Trailer
            </Link>
          </div>
        </div>

        {/* part-03 Available Platform */}
        <div className="w-[80%] text-white mt-5 text-normal font-semibold flex flex-col gap-5">
          {information.watchProviders &&
            information.watchProviders.flatrate && (
              <div className="flex gap-x-6 items-center">
                <h1 className="text-2xl">Now Streaming</h1>
                {information.watchProviders.flatrate.map((w, i) => (
                  <img
                    title={w.provider_name}
                    key={i}
                    className="w-[6vh] h-[6vh] object-cover rounded-md"
                    src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  />
                ))}
              </div>
            )}

          {information.watchProviders && information.watchProviders.rent && (
            <div className="flex gap-x-6 items-center">
              <h1>Available on Rent</h1>
              {information.watchProviders.rent.map((w, i) => (
                <img
                  title={w.provider_name}
                  key={i}
                  className="w-[6vh] h-[6vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                />
              ))}
            </div>
          )}

          {information.watchProviders && information.watchProviders.buy && (
            <div className="flex gap-x-6 items-center">
              <h1>Available on Buy</h1>
              {information.watchProviders.buy.map((w, i) => (
                <img
                  title={w.provider_name}
                  key={i}
                  className="w-[6vh] h-[6vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                />
              ))}
            </div>
          )}

          {information.watchProviders === undefined && (
            <div className="text-white text-3xl mt-15">
              Not available in your region.
            </div>
          )}
        </div>

        {/* Languages Section */}
        <LanguageSection information={information} />
      </div>

      {/* Second Page */}
      <div className="w-full min-h-screen bg-[#1F1F1F] px-20 py-10">
        {/* Cast Section */}
        <CastDetails information={information} person={information.person} />

        {/* Seasons Section */}
        {information.detail.seasons &&
          information.detail.seasons.length > 0 && (
            <div className="mb-16">
              <h2
                className="text-3xl font-bold bg-gradient-to-r from-[#6556CD] to-[#9747FF] 
              bg-clip-text text-transparent mb-8"
              >
                Seasons
              </h2>

              {/* Season Info Display */}
              <SeasonsSection information={information} />

              {/* Seasons Card Component */}
              <SeasonsCard
                seasons={information.detail.seasons}
                tvId={id}
                currentSeasonId={season_id}
              />
            </div>
          )}

        {/* Reviews Section */}
        <ReviewSection information={information} />

        {/* More Like This section */}
        <h2
          className="text-3xl font-bold bg-gradient-to-r from-[#6556CD] to-[#9747FF] 
          bg-clip-text text-transparent mb-8"
        >
          More Like This
        </h2>

        <HorizontalCards
          data={
            information.recommendations.length > 0
              ? information.recommendations
              : information.similar
          }
        />
      </div>
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
