import {Route, Routes} from "react-router-dom";

import {navigation} from "./data/navigation";

import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import Sticky from "./layouts/Sticky";

const App = () => {
    return <>
        <Sticky />
        <Header navigation={navigation} title="Weather"/>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Navbar />
    </>
}

export default App;