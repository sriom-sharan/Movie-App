export { removemovie } from "../reducers/movieSlice";
import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";

export const asyncloadmovie = (id) => async (dispatch) => {
  try {
    const detail = await axios.get(`movie/${id}`);
    const externalId = await axios.get(`movie/${id}/external_ids`);
    const recommendation = await axios.get(`movie/${id}/recommendations`);
    const videos = await axios.get(`movie/${id}/videos`);
    const similar = await axios.get(`movie/${id}/similar`);
    const translations = await axios.get(`movie/${id}/translations`);
    const watchProvider = await axios.get(`movie/${id}/watch/providers`);

    let allDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendation: recommendation.data.results,
      similar: similar.data,
      translations: translations.data.translations.map((t) => t.english_name),
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchProvider: watchProvider.data.results.IN,
    };

    dispatch(loadmovie(allDetails));
    console.log(allDetails);
  } catch (error) {
    console.log(error);
  }
};
