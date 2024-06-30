export { removetv } from "../reducers/tvSlice";
import axios from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice";

export const asyncloadtv = (id) => async (dispatch) => {
  try {
    const detail = await axios.get(`tv/${id}`);
    const externalId = await axios.get(`tv/${id}/external_ids`);
    const recommendation = await axios.get(`tv/${id}/recommendations`);
    const videos = await axios.get(`tv/${id}/videos`);
    const similar = await axios.get(`tv/${id}/similar`);
    const translations = await axios.get(`tv/${id}/translations`);
    const watchProvider = await axios.get(`tv/${id}/watch/providers`);

    let allDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendation: recommendation.data.results,
      similar: similar.data,
      translations: translations.data.translations.map((t) => t.english_name),
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchProvider: watchProvider.data.results.IN,
    };

    dispatch(loadtv(allDetails));
    console.log(allDetails);
  } catch (error) {
    console.log(error);
  }
};
