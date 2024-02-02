import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Artists from "./Artists";
import ArtistCard from "./ArtistCard";

const Router = () => {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/artists/:id" element={<ArtistCard />} />
        </Routes>
    )
}

export default Router;