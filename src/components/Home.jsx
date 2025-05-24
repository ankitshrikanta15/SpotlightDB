import { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Loading from "./Loading";
import Dropdown from "./templates/Dropdown";

const Home = () => {  
  document.title = 'Spotlight | Home Page';

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState('all');
 
  const getHeaderWallpaper = async() => {
    try {
      const {data} = await axios.get(`/trending/all/day`);
      let randomData = data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const getTrending = async() => {
    try {
      const {data} = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    getTrending();
  }, [wallpaper, category]);

  const getCategoryTitle = () => {
    switch(category) {
      case 'movie':
        return 'Trending Movies';
      case 'tv':
        return 'Trending TV Shows';
      case 'person':
        return 'Trending People';
      default:
        return 'Trending All';
    }
  };
  
  return wallpaper && trending ? (
    <div className="flex w-full h-screen bg-[#1F1F1F]">
      <Sidenav />
      <div className="w-[82%] h-screen overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900">
        <Topnav />
        <Header data={wallpaper} />

        <div className="px-5 py-3">
          <div className="flex justify-between items-center bg-zinc-800/50 p-4 rounded-xl backdrop-blur-sm">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-white">
                {getCategoryTitle()}
              </h1>
              <p className="text-sm text-zinc-400 mt-1">
                Most trending content of the day
              </p>
            </div>
            <Dropdown 
              title="Filter" 
              options={["all", "movie", "tv", "person"]} 
              func={(e) => setCategory(e.target.value)} 
            />
          </div>

          <HorizontalCards 
            data={trending} 
            func={setCategory}
          />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Home;