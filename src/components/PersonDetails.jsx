import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadPerson, removePerson } from "../store/actions/personAction";
import { Link, useParams } from "react-router-dom";

import Loading from "./Loading";
import noimagee from "/noimagee.jpg";
import "remixicon/fonts/remixicon.css";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import InfoItem from "./templates/InfoItem";
import NavBarSection from "./templates/NavBarSection";

const PersonDetails = () => {
  const { id } = useParams();
  const { information } = useSelector((state) => state.person);
  console.log(information);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("movie");


  useEffect(() => {
    dispatch(asyncLoadPerson(id));
    return () => {
      dispatch(removePerson());
    };
  }, [id]);

  return information ? (
    <div className="relative w-full min-h-screen bg-[#1F1F1F] text-white overflow-x-hidden">
      {/* Part-01 */}
      <div className="px-20 py-5">
        
        {/* part-1 Navigation */}
        <NavBarSection information={information}/>
      </div>

      {/* Part-02 */}
      <div className="w-full flex px-20 mt-[5%]">
        {/* left Posters and Details */}
        <div className="flex flex-col w-[25%]">
          <img
            src={
              information.detail.profile_path
                ? `https://image.tmdb.org/t/p/w500/${information.detail.profile_path}`
                : noimagee
            }
            alt={information.detail.title}
            className="w-[300px] h-[450px] object-cover rounded-md"
          />

          <div className="mt-8 bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50">
            <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-[#6556CD] to-[#9747FF] bg-clip-text text-transparent">
              Personal Information
            </h2>
            <div className="space-y-4">
              <InfoItem
                title="Known For"
                value={information.detail.known_for_department}
              />

              <InfoItem
                title="Known For"
                value={information.combinedCredits.cast.length}
              />

              <InfoItem
                title="Gender"
                value={information.detail.gender === 2 ? "Male" : "Female"}
              />

              <InfoItem title="Birthday" value={information.detail.birthday} />

              {information.detail.deathday && (
                <InfoItem
                  title="Deceased"
                  value={information.detail.deathday}
                />
              )}

              <InfoItem
                title="Place of Birth"
                value={information.detail.place_of_birth}
              />

              {information.detail.also_known_as.length > 0 && (
                <div>
                  <h3 className="text-zinc-400 text-sm mb-1">Also Known As</h3>
                  <div className="space-y-1">
                    {information.detail.also_known_as.map((name) => (
                      <p key={name} className="text-white text-sm">
                        {name}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Details and credits */}
        <div className="w-[75%] ml-10 mt-[5%]">
          <h1 className="text-5xl font-bold text-white mb-2">
            {information.detail.name || information.detail.title}
            <small className="ml-3 text-xl font-medium text-zinc-400">
              (
              {new Date(
                information.detail.deathday || new Date()
              ).getFullYear() -
                new Date(information.detail.birthday).getFullYear()}{" "}
              years old {information.detail.deathday ? " - Deceased" : ""})
            </small>
          </h1>

          {information.detail.biography && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-4">Biography</h2>

              <div className="space-y-4 text-zinc-300">
                {information.detail.biography
                  .split("\n\n")
                  .map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
              </div>
            </div>
          )}

          {/* Known For Section */}
          <h2 className="text-2xl font-semibold mt-10">Known For</h2>
          <HorizontalCards data={information.combinedCredits.cast} />

          {/* Action Career Sections */}
          <div className="w-full flex items-center justify-between mb-5">
            <h2 className="text-2xl font-semibold">Acting Career</h2>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="bg-zinc-900/50 rounded-xl border border-zinc-800/50 overflow-hidden">
            <div className="max-h-[600px] overflow-y-auto p-6 space-y-4">
              {information[category + "Credits"].cast.map((credit, i) => (
                <Link
                  key={`${credit.id}-${i}`}
                  to={`/${category}/details/${credit.id}`}
                  className="block hover:bg-zinc-800/50 p-4 rounded-lg transition-all duration-300"
                >
                  <h3
                    className="text-lg font-semibold text-white hover:text-[#6556CD] 

                      transition-colors duration-300"
                  >
                    {credit.name || credit.title || credit.original_name}
                  </h3>

                  {credit.character && (
                    <p className="text-zinc-400 mt-1">as {credit.character}</p>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Photos Gallery */}
          {information.images.profiles.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6 mt-10">Photos</h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {information.images.profiles.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-[2/3] rounded-lg overflow-hidden group relative"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                      alt={`${information.detail.name} photo ${index + 1}`}
                      className=""
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
