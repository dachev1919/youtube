import {IHomePageVideos} from "../Types";
import {Link} from "react-router-dom";

const Card = ({data}: { data: IHomePageVideos }) => {
    return (
        <div className="w-25 flex gap-3 flex-col">
            <div className="relative">
                <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
                    {data.videoDuration}
                </span>
                <Link className="rounded-xl overflow-hidden flex" to={`/youtube/watch/${data.videoId}`}>
                    <img src={data.videoThumbnail} className="h-50 w-full object-cover" alt="thumbnail"/>
                </Link>
            </div>
            <div className="flex gap-2">
                <div className="min-w-fit">
                    <a href="/youtube">
                        <img src={data.channelInfo.image} className="h-9 w-9 rounded-full" alt="channel"/>
                    </a>
                </div>
            </div>
            <div>
                <a href="/" className="line-clamp-2">
                    <h3>
                        {data.videoTitle}
                    </h3>
                </a>
                <div className="text-sm text-gray-400">
                    <div className="py-2">
                        <a href="/" className="hover:text-white transition-all">
                            {data.channelInfo.name}
                        </a>
                    </div>
                    <div>
                        <span className="after:content-['•'] after:mx-1">
                            {data.videoViews} views
                        </span>
                        <span>{data.videoAge}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;