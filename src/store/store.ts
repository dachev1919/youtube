import {IInitialState} from "../Types";
import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getHomePageVideos} from "./reducers/getHomePageVideos";
import {getSearchPageVideos} from "./reducers/getSearchPageVideos";
import {getVideoDetails} from "./reducers/getVideoDetails";
import {getRecommendedVideos} from "./reducers/getRecommendedVideos";

const initialState: IInitialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: []
};

const YoutubeSlice = createSlice({
    name: "youtube",
    initialState,
    reducers: {
        clearVideos: state => {
            state.videos = [];
            state.nextPageToken = null;
        },
        changeSearchTerm: (state, action: PayloadAction<string>) => {
            state.searchTerm = action.payload;
        },
        clearSearchTerm: (state) => {
            state.searchTerm = "";
        }
    },
    extraReducers: (builder => {
        builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
            state.videos = action.payload.parsedData;
            state.nextPageToken = action.payload.nextPageToken;
        });
        builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
            state.videos = action.payload.parsedData;
            state.nextPageToken = action.payload.nextPageToken;
        });
        builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
            state.recommendedVideos = action.payload.parsedData;
        });
        builder.addCase(getVideoDetails.fulfilled, (state, action) => {
            state.currentPlaying = action.payload;
        });
    }),
});

export const { clearVideos, changeSearchTerm, clearSearchTerm } = YoutubeSlice.actions;

export const store = configureStore({
    reducer: {
        youtubeApp: YoutubeSlice.reducer,
    },
});

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;