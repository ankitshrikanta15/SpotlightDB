import axios from '../utils/axios';
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from './templates/Dropdown';
import Topnav from './templates/Topnav';
import { IoArrowBack } from 'react-icons/io5';
import Cards from './templates/Cards';
import Loading from './Loading';

const TvShows = () => {
  document.title = 'Spotlight | TV Shows';

  const navigate = useNavigate();
  const [category, setCategory] = useState('airing_today');
  const [tv, setTV] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTvShows = async() => {
    try {
      const {data} = await axios.get(`/tv/${category}?page=${page}`);
      console.log(data);
      
  
      if(data.results.length > 0 ) {
        setTV((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
      
    } catch (error) {
      console.log("Error", error.message);
    }
  };


  const refreshHandler = () => {
    if (tv.length === 0) {
      getTvShows();
    } else {
      setPage(1);
      setTV([]);
      getTvShows();
    }
  }


  useEffect(() => {
    refreshHandler();
  }, [category]);
  
  return tv.length > 0 ? (
    <div className="relative w-screen min-h-screen bg-[#1F1F1F] pb-10">
      {/* Header Secction */}
      <div className='sticky top-0 z-[99] bg-[#1F1F1F] shadow-md'>
      <div className="w-full flex items-center gap-6 px-[5%] py-5">
        <Link
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-700 duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(39,39,42,0.5)]">
          <IoArrowBack
            className="text-zinc-400 text-xl group-hover:text-white transform group-hover:-translate-x-1 transition-all duration-300"/>
          <span className="text-zinc-400 group-hover:text-white font-medium">
            Go Back
          </span>
        </Link>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#6556CD] to-[#9747FF] bg-clip-text text-transparent animate-gradient">
          TV Shows
        </h1>
        <div className="w-[58%]">
          <Topnav />
        </div>
        <div className="flex gap-4">
          <Dropdown title="Category" options={["on_the_air", "popular", "top_rated", "airing_today"]} func={(e) => setCategory(e.target.value)} />
        </div>
      </div>
    </div>
 

      <div className='px-[5%] mt-8 bg-[#1F1F1F]'>
      <InfiniteScroll
      dataLength={tv.length}
      next={getTvShows}
      hasMore={hasMore}
      loader={
        <div className="w-full flex justify-center items-center py-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-[#6556CD] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-zinc-400 text-sm font-medium">Loading more...</p>
          </div>
        </div>
      }
      endMessage={
        <p className="text-center text-zinc-400 py-8">
          No more TV shows to load.
        </p>
      }
      scrollThreshold={0.8}
      scrollableTarget="scrollableDiv"
      >
      
          <Cards data={tv} title="tv" />
      </InfiniteScroll>
      </div>




    </div>
  ) : <Loading />
};

export default TvShows;