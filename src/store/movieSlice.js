import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        bannerData: [],
        imageURL: '',
        nowPlayingData: [],
        topRatedData: [],
        popularData: [],
        onTheAirData: [],
    },
    reducers: {
        setBannerData(state, action) {
            state.bannerData = action.payload;
        },
        setImageURL(state, action) {
            state.imageURL = action.payload;
        },
        setNowPlayingData(state, action) {
            state.nowPlayingData = action.payload;
        },
        setTopRatedData(state, action) {
            state.topRatedData = action.payload;
        },
        setPopularData(state, action) {
            state.popularData = action.payload;
        },
        setOnTheAirData(state, action) {
            state.onTheAirData = action.payload;
        }
    },
});

export const { setBannerData, setImageURL, setNowPlayingData, setTopRatedData, setPopularData, setOnTheAirData } = movieSlice.actions;

export default movieSlice.reducer;