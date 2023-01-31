import {createAsyncThunk} from "@reduxjs/toolkit";
import {TRootState} from "../store";
import axios from "axios";
import {YOUTUBE_API_URL} from "../../utils/constants";
import {parseData} from "../../utils";
import {IHomePageVideos} from "../../Types";

const API_KEY = process.env.REACT_APP_YOTUBE_DATA_API_KEY;

export const getSearchPageVideos = createAsyncThunk(
    "youtubeApp/searchPageVideos",
    async (isNext: boolean, { getState }) => {
        const {
            youtubeApp: { nextPageToken: nextPageTokenFromState, videos, searchTerm },
        } = getState() as TRootState;
        const {
            data: { items, nextPageToken },
        } = await axios.get(
            `${YOUTUBE_API_URL}/search?q="${searchTerm}"&key=${API_KEY}&part=snippet&type=video&${
                isNext ? `pageToken=${nextPageTokenFromState}` : ""
            }`
        );

        const parsedData: IHomePageVideos[] = await parseData(items);
        return { parsedData: [...videos, ...parsedData], nextPageToken };
    }
);