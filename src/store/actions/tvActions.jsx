export { removeTv } from "../reducers/tvSlice";
import axios from "../../utils/axios";
import { loadTv } from "../reducers/tvSlice";


export const asyncLoadTv = (id, season_id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`)
    const credits = await axios.get(`/tv/${id}/credits`)
    const externalId = await axios.get(`/tv/${id}/external_ids`)
    const recommendations = await axios.get(`/tv/${id}/recommendations`)
    const similar = await axios.get(`/tv/${id}/similar`)
    const videos = await axios.get(`/tv/${id}/videos`)
    const watchProviders = await axios.get(`/tv/${id}/watch/providers`)
    const translations = await axios.get(`/tv/${id}/translations`)
    const reviews = await axios.get(`/tv/${id}/reviews`)
    
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

    if (season_id) {
      const seasonInfo = await axios.get(`/tv/${id}/season/${season_id}`)
      theUltimateDetails.seasonInfo = seasonInfo.data
    }

    dispatch(loadTv(theUltimateDetails));
  } catch (error) {
    console.log("Error", error.message);
    
  }
}