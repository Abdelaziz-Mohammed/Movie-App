import axios from "axios";
import { setBannerData, setImageURL } from "./movieSlice";

export const fetchTrendingData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/trending/all/week');
      dispatch(setBannerData(response.data.results));
    }
    catch(err) {
      console.error('Error fetching trending data:', err);
    }
  }
}

export const fetchConfiguration = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/configuration');
      dispatch(setImageURL(response.data.images.secure_base_url+'original'))
    }
    catch(err) {
      console.error('Error fetching configuration data:', err);
    }
  }
}