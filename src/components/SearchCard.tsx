import {IHomePageVideos} from "../Types";
import {Link} from "react-router-dom";

const SearchCard = ({data}: { data: IHomePageVideos }) => {
    return (
        <div className="flex gap-3">
            <div className="relative">
                <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
                    {data.videoDuration}
                </span>
                <Link className="rounded-xl overflow-hidden flex" to={`/youtube/watch/${data.videoId}`}>
                    <img src={data.videoThumbnail} className="h-52 w-full object-cover" alt="thumbnail"/>
                </Link>
            </div>
            <div className="flex gap-1 flex-col">
                <a href="#" className="line-clamp-2">
                    <h3 className="max-w-2xl">
                        {data.videoTitle}
                    </h3>
                </a>
                <div className="text-xs text-grap-400">
                    <div>
                        <div>
                            <span className="after:content-['•'] after:mx-1">
                                {data.videoViews} views
                            </span>
                            <span>{data.videoAge}</span>
                        </div>
                    </div>
                </div>
                <div className="min-w-fit my-2">
                    <a href="#" className="flex items-center gap-2 text-xs text-gray-400">
                        <img src={data.channelInfo.image} alt="channel" className="h-9 w-9 rounded-full"/>
                        <span>{data.channelInfo.name}</span>
                    </a>
                </div>
                <div className="max-w-2xl line-clamp-2 text-sm text-gray-400">
                    <p>{data.videoDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;