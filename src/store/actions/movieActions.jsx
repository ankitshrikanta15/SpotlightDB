export { removeMovie } from "../reducers/movieSlice";
import axios from "../../utils/axios";
import { loadMovie } from "../reducers/movieSlice";


export const asyncLoadMovies = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`)
    const credits = await axios.get(`/movie/${id}/credits`)
    const externalId = await axios.get(`/movie/${id}/external_ids`)
    const recommendations = await axios.get(`/movie/${id}/recommendations`)
    const similar = await axios.get(`/movie/${id}/similar`)
    const videos = await axios.get(`/movie/${id}/videos`)
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`)
    const translations = await axios.get(`/movie/${id}/translations`)
    const reviews = await axios.get(`/movie/${id}/reviews`)
    let theUltimateDetails = {
      detail: detail.data,
      credits: credits.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchProviders: watchProviders.data.results.IN,
      translations: translations.data.translations,
      reviwes: reviews.data,
    }

    dispatch(loadMovie(theUltimateDetails));
  } catch (error) {
    console.log("Error", error.message);
    
  }
}