export interface IInitialState {
    videos: IHomePageVideos[];
    currentPlaying: ICurrentPlaying | null;
    searchTerm: string;
    searchResults: [];
    nextPageToken: string | null;
    recommendedVideos: IRecommendedVideos[];
}

export interface IHomePageVideos {
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    videoThumbnail: string;
    videoLink: string;
    videoDuration: string;
    videoViews: string;
    videoAge: string;
    channelInfo: {
        id: string;
        image: string;
        name: string;
    }
}

export interface ICurrentPlaying {
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    videoViews: string;
    videoLikes: string;
    videoAge: string;
    channelInfo: {
        id: string;
        image: string;
        name: string;
        subscribers: string;
    };
}

export interface IRecommendedVideos {
    videoId: string;
    videoTitle: string;
    videoThumbnail: string;
    videoDuration: string;
    videoViews: string;
    videoAge: string;
    channelInfo: {
        id: string;
        name: string;
    };
}

export interface IItem {
    snippet: {
        title: string;
        thumbnails: { medium: { url: string } };
        publishedAt: Date;
        channelTitle: string;
        channelId: string;
    };
    contentDetails: { upload: { videoId: string } };
}