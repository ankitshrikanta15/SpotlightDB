export { removePerson } from "../reducers/peopleSlice";
import axios from "../../utils/axios";
import { loadPerson } from "../reducers/peopleSlice";


export const asyncLoadPerson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`)
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`)
    const externalId = await axios.get(`/person/${id}/external_ids`)
    const images = await axios.get(`/person/${id}/images`)
    const movieCredits = await axios.get(`/person/${id}/movie_credits`)
    const tvCredits = await axios.get(`/person/${id}/tv_credits`)
    
    let theUltimateDetails = {
      detail: detail.data,
      combinedCredits: combinedCredits.data,
      externalId: externalId.data,
      images: images.data,
      movieCredits: movieCredits.data,
      tvCredits: tvCredits.data,
    }

    dispatch(loadPerson(theUltimateDetails));
  } catch (error) {
    console.log("Error", error.message);
    
  }
}