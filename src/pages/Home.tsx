import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useEffect} from "react";
import {getHomePageVideos} from "../store/reducers/getHomePageVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import {IHomePageVideos} from "../Types";
import Card from "../components/Card";
import {clearVideos} from "../store/store";

const Home = () => {
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);

    useEffect(() => {
        return () => {
            dispatch(clearVideos())
        };
    }, [dispatch]);

    useEffect(() => {
        dispatch(getHomePageVideos(false));
    }, [dispatch])

    return (
        <div className="max-h-screen overflow-hidden">
            <Navbar/>
            <div className="flex relative" style={{height: "calc(100vh - 3.5rem)"}}>
                <Sidebar />
                <div className='w-10/12 overflow-auto'>
                    {
                        videos.length ? (
                            <InfiniteScroll
                                dataLength={videos.length}
                                next={() => dispatch(getHomePageVideos(true))}
                                hasMore={videos.length < 500}
                                loader={<Spinner />}
                                height={800}
                            >
                                <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
                                    {
                                        videos.map((item: IHomePageVideos) => {
                                            return <Card data={item} key={item.videoId} />
                                        })
                                    }
                                </div>
                            </InfiniteScroll>
                        ) : <Spinner />
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;