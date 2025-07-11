import {Route, Routes} from "react-router-dom";
import ExampleProps from "./components/demoProps/ExampleProps.jsx";
import Phone from "./components/myPhone/Phone.jsx";
import HomeTemplate from "./template/HomeTemplate.jsx";
import PageNotFound from "./components/pageNotFound/PageNotFound.jsx";
import PokeDetail from "./components/PokeDetail.jsx";
import useRootCustom from "./routes/useRootCustom.jsx";

function App() {
    return useRootCustom();
    // return (
    //     <div>
    //         <Routes>
    //             <Route path={"/"} element={<HomeTemplate/>}>
    //                 <Route index element={<ExampleProps/>}/>
    //                 <Route path={"my-phone"} element={<Phone/>}/>
    //                 <Route path={"poke-detail/:id"} element={<PokeDetail/>}/>
    //             </Route>
    //             <Route path={"*"} element={<PageNotFound/>}/>
    //         </Routes>
    //     </div>
    // )
}

export default App;
