import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import TvShows from "./components/TvShows";
import Person from "./components/Person";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PersonDetails from "./components/PersonDetails";
import Trailer from "./components/templates/Trailer";
import NotFound from "./components/NotFound";
import SeasonDetails from "./components/templates/SeasonDetails";
import ClickSpark from "./components/ClickSpark";
// import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  // const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="h-screen w-screen bg-[#1F1E24] flex overflow-auto" id="scrollableDiv">
          <ClickSpark
            sparkColor='#E82660'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />        
        </Route>
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
          <Route path="/tv/details/:id/season/:season_number" element={<SeasonDetails />} />
        </Route>
        <Route path="/people" element={<Person />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </ClickSpark>
    </div>
  );
};

export default App;
