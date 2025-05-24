const SeasonsSection = ({information}) => {
  return (
    <>
      {information.seasonInfo ? (
        <div className="mb-8">
          <h3 className="text-white text-xl font-semibold mb-4">
            {information.seasonInfo.name}
          </h3>
          <p className="text-zinc-300 mb-4">
            {information.seasonInfo.overview || "No overview available."}
          </p>
          <div className="text-zinc-400">
            <p>Episodes: {information.seasonInfo.episodes?.length || 0}</p>
            <p>Air Date: {information.seasonInfo.air_date || "TBA"}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SeasonsSection;
