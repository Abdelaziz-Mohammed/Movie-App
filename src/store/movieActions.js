import axios from "axios";
import { setBannerData, setImageURL, setNowPlayingData, setTopRatedData, setPopularData, setOnTheAirData } from "./movieSlice";

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

export const fetchNowPlayingData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/movie/now_playing');
      dispatch(setNowPlayingData(response.data.results));
    }
    catch(err) {
      console.error('Error fetching now-playing data:', err);
    }
  }
}

export const fetchTopRatedData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/movie/top_rated');
      dispatch(setTopRatedData(response.data.results));
    }
    catch(err) {
      console.error('Error fetching top-rated data:', err);
    }
  }
}

export const fetchPopularData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/tv/popular');
      dispatch(setPopularData(response.data.results));
    }
    catch(err) {
      console.error('Error fetching popular data:', err);
    }
  }
}

export const fetchOnTheAirData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/tv/on_the_air');
      dispatch(setOnTheAirData(response.data.results));
    }
    catch(err) {
      console.error('Error fetching on-the-air data:', err);
    }
  }
}