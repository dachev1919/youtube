import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/youtube"/>}/>
                <Route path="/youtube" element={<Home/>}/>
                <Route path="/youtube/search" element={<Search/>}/>
                <Route path="/youtube/watch/:id" element={<Watch/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
