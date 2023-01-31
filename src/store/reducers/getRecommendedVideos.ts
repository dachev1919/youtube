import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TRootState } from "../store";
import { IRecommendedVideos } from "../../Types";
import { parseRecommendedData } from "../../utils";
import { YOUTUBE_API_URL } from "../../utils/constants";

const API_KEY = process.env.REACT_APP_YOTUBE_DATA_API_KEY;

export const getRecommendedVideos = createAsyncThunk(
    "youtubeApp/getRecommendedVideos",
    async (videoId: string, { getState }) => {
        const {
            youtubeApp: {
                currentPlaying: {
                    channelInfo: { id: channelId },
                },
            },
        } = getState() as TRootState;

        const {
            data: { items },
        } = await axios.get(
            `${YOUTUBE_API_URL}/activities?key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=video&videoId=${videoId}`
        );

        const parsedData: IRecommendedVideos[] = await parseRecommendedData(
            items,
            videoId
        );

        return { parsedData };
    }
);