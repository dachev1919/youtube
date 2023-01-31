import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import {IHomePageVideos} from "../Types";
import {clearVideos} from "../store/store";
import {useNavigate} from "react-router-dom";
import {getSearchPageVideos} from "../store/reducers/getSearchPageVideos";
import SearchCard from "../components/SearchCard";

const Search = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

    useEffect(() => {
        dispatch(clearVideos());
        console.log(searchTerm)
        if (searchTerm && searchTerm === "") {
            navigate("/");
        } else {
            dispatch(getSearchPageVideos(false));
        }
    }, [dispatch, navigate, searchTerm])

    return (
        <div className="max-h-screen overflow-hidden">
            <Navbar/>
            <div className="flex relative" style={{height: "calc(100vh - 3.5rem)"}}>
                <Sidebar/>
                <div className='w-10/12 overflow-auto'>
                    {
                        videos.length ? (
                            <div className="py-8 pl-8 flex flex-col gap-5 w-full">
                                <InfiniteScroll
                                    dataLength={videos.length}
                                    next={() => dispatch(getSearchPageVideos(true))}
                                    hasMore={videos.length < 500}
                                    loader={<Spinner/>}
                                    height={800}
                                >
                                    {videos.map((item: IHomePageVideos) => {
                                        return (
                                            <div className="my-5">
                                                return <SearchCard data={item} key={item.videoId}/>
                                            </div>
                                        );
                                    })}
                                </InfiniteScroll>
                            </div>
                        ) : <Spinner/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;