import {
    MdHomeFilled,
    MdOutlineSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineSmartDisplay,
    MdOutlineWatchLater,
    MdThumbUpOffAlt,
    MdSettings,
    MdOutlinedFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
    MdOutlineSportsVolleyball,
} from "react-icons/md";
import { TbMusic, TbDeviceGamepad2 } from "react-icons/tb";
import { FaRegCompass } from "react-icons/fa";
import { GiFilmStrip } from "react-icons/gi";

const MAIN_LINKS = [
    {
        icon: <MdHomeFilled className="text-xl" />,
        name: "Home",
    },
    {
        icon: <FaRegCompass className="text-xl" />,
        name: "Explore",
    },
    {
        icon: <MdOutlineSlowMotionVideo className="text-xl" />,
        name: "Shorts",
    },
    {
        icon: <MdSubscriptions className="text-xl" />,
        name: "Subscriptions",
    },
];

const SECONDARY_LINKS = [
    {
        icon: <MdOutlineVideoLibrary className="text-xl" />,
        name: "Library",
    },
    {
        icon: <MdHistory className="text-xl" />,
        name: "History",
    },
    {
        icon: <MdOutlineSmartDisplay className="text-xl" />,
        name: "Your Videos",
    },
    {
        icon: <MdOutlineWatchLater className="text-xl" />,
        name: "Watch Later",
    },
    {
        icon: <MdThumbUpOffAlt className="text-xl" />,
        name: "Liked Videos",
    },
];

const SUBSCRIPTION_LINKS = [
    {
        icon: <TbMusic className="text-xl" />,
        name: "Music",
    },
    {
        icon: <MdOutlineSportsVolleyball className="text-xl" />,
        name: "Sport",
    },
    {
        icon: <TbDeviceGamepad2 className="text-xl" />,
        name: "Gaming",
    },
    {
        icon: <GiFilmStrip className="text-xl" />,
        name: "Films",
    },
];

const HELP_LINKS = [
    {
        icon: <MdSettings className="text-xl" />,
        name: "Settings",
    },
    {
        icon: <MdOutlinedFlag className="text-xl" />,
        name: "Report history",
    },
    {
        icon: <MdOutlineHelpOutline className="text-xl" />,
        name: "Help",
    },
    {
        icon: <MdOutlineFeedback className="text-xl" />,
        name: "Send feedback",
    },
];

const TEXT_LINKS = [
    [
        "About",
        "Press",
        "Copyright",
        "Contact us",
        "Creator",
        "Advertise",
        "Developers",
    ],
    [
        "Terms",
        "Privacy",
        "Policy & Safety",
        "How YouTube works",
        "Test new features",
    ],
];

const Sidebar = () => {
    return (
        <div className="w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 sidebar">
            <ul className="flex flex-col border-b-2 border-gray-700 py-1">
                {
                    MAIN_LINKS.map(({icon, name}) => {
                        return (
                            <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name==="Home" ? "bg-slate-600" : ""}`}>
                                <a href="/youtube" className="flex items-center gap-5">
                                    {icon}
                                    <span className="text-sm tracking-wider">{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700 py-1">
                {
                    SECONDARY_LINKS.map(({icon, name}) => {
                        return (
                            <li key={name} className="pl-6 py-3 hover:bg-zinc-600">
                                <a href="/youtube" className="flex items-center gap-5">
                                    {icon}
                                    <span className="text-sm tracking-wider">{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700 py-1">
                {
                    SUBSCRIPTION_LINKS.map(({icon, name}) => {
                        return (
                            <li key={name} className="pl-6 py-3 hover:bg-zinc-600">
                                <a href="/youtube" className="flex items-center gap-5">
                                    {icon}
                                    <span className="text-sm tracking-wider">{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700 py-1">
                {
                    HELP_LINKS.map(({icon, name}) => {
                        return (
                            <li key={name} className="pl-6 py-3 hover:bg-zinc-600">
                                <a href="/youtube" className="flex items-center gap-5">
                                    {icon}
                                    <span className="text-sm tracking-wider">{name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
                {
                    TEXT_LINKS[0].map((name) => {
                        return (
                            <li key={name}>
                                {name}
                            </li>
                        )
                    } )
                }
            </ul>
            <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400">
                {
                    TEXT_LINKS[1].map((name) => {
                        return (
                            <li key={name}>
                                {name}
                            </li>
                        )
                    } )
                }
            </ul>
            <span className="px-4 text-sm text-zinc-400">&copy; {new Date().getFullYear()} Google</span>
            <br/>
            <p className="px-4 pt-3 text-sm text-zinc-400">
                This app - clone, for educational purpose only!
            </p>
        </div>
    );
};

export default Sidebar;